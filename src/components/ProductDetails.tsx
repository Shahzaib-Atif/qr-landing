// components/ProductDetails.tsx
'use client';
import Image from "next/image";
import { useState } from "react";

export function ProductDetails({
  name,
  description,
  imageUrl,
}: {
  name: string | null;
  description: string | null;
  imageUrl: string | null;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <main className="max-w-xl mx-auto p-6 rounded-lg shadow-md border bg-white mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{name}</h1>
      <p className="text-lg text-gray-700">{description}</p>
      <div className="relative w-[200px] h-[200px]">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" />
        )}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Product"
            width={200}
            height={200}
            placeholder="empty"
            style={{ objectFit: "contain" }}
            onLoad={() => setImgLoaded(true)}
            className={`transition-opacity duration-300 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </main>
  );
}
