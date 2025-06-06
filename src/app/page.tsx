import { createClient } from "@/lib/supabase.server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: products, error } = await supabase.from("products").select('*');
  
  console.log("Products data:", products);
  console.log("Error:", error);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
