// components/ProductDetails.tsx
export function ProductDetails({
  name,
  description,
  imageUrl,
}: {
  name: string | null;
  description: string | null;
  imageUrl: string | null;
}) {
  return (
    <main className="max-w-xl mx-auto p-6 rounded-lg shadow-md border bg-white mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{name}</h1>
      <p className="text-lg text-gray-700">{description}</p>
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt="Private" width={200} height={"auto"} />
      ) : (
        <p>Loading image...</p>
      )}
    </main>
  );
}
