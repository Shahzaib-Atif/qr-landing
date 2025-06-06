import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase.server";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/ProductDetails";

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

  return <ProductDetails name={product.name} description={product.description} />;
}
