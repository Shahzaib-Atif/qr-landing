import { SupabaseProductRepository } from "@/lib/repositories/products/supabase-product-repository";
// import Image from "next/image";

export default async function Page() {
  const repo = new SupabaseProductRepository();
  const products = await repo.getAllProducts();

  if (!products || products.length === 0) {
    return <div className="text-center mt-10">No products found</div>;
  }

  // Fetch image URLs for all products
  const productsWithUrls = await Promise.all(
    products.map(async (product) => ({
      ...product,
      imageUrl: await repo.getImageUrl(product.image_url),
    }))
  );

  return (
    <div className="overflow-x-auto mt-10 flex justify-center">
      <table className="min-w-[600px] bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">
              Name
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">
              Description
            </th>
            <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {productsWithUrls.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b ">{product.name}</td>
              <td className="px-6 py-4 border-b">{product.description}</td>
              <td className="px-6 py-4 border-b">
                <a href={`./${product.name}`} target="_blank">
                  {`"./${product.image_url}"`}
                </a>
              </td>
              {/* <td className="px-6 py-4 border-b">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ objectFit: "contain" }}
                    width={96}
                    height={96}
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
