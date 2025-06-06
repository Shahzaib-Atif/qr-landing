// components/ProductDetails.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
    <main className="max-w-xl mx-auto p-6 rounded-lg shadow-md border bg-white mt-10 flex flex-col items-center">
      <Link
        href="/"
        className="self-start mb-4 text-blue-600 hover:underline font-medium"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{name}</h1>
      <p className="text-lg mb-4 text-gray-700">{description}</p>
      <div className="relative w-[300px] h-[300px] flex justify-center items-center">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-300 rounded" />
        )}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Product"
            width={300}
            height={300}
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
