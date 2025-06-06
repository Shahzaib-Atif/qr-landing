// lib/interfaces/product-repository.ts

import { Product } from "@/lib/models";

export interface IProductRepository {
  getImageUrl(image_url: string): Promise<string | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getAllProducts(): Promise<Product[]>;
}
