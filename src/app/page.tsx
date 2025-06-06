import { SupabaseProductRepository } from "@/lib/repositories/products/supabase-product-repository";

export default async function Page() {
  const repo = new SupabaseProductRepository();
  const products = await repo.getAllProducts();

  const url = await repo.getImageUrl('A052CP.png');

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Product Name</h1>
      <p>{}</p>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="Private" width={200} height={'auto'}/>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
