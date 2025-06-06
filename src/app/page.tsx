import { SupabaseProductRepository } from "@/lib/repositories/products/supabase-product-repository";

export default async function Page() {
  const repo = new SupabaseProductRepository();
  const products = await repo.getAllProducts();

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }
  
  return (
    <ul>
      {products?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}
