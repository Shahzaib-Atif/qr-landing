import { cookies } from "next/headers";
import { createClient } from "@/lib/server";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // If params is a Promise, await it:
  const resolvedParams = await params;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .single();

  if (!product) return notFound();

  return (
    <main>
      <h1>{product.name}</h1>
      <h1>{product.image_url}</h1>
    </main>
  );
}
