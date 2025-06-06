// lib/interfaces/product-repository.ts

import { Product } from "@/lib/models";

export interface IProductRepository {
  getProductBySlug(slug: string): Promise<Product | null>;
  getAllProducts(): Promise<Product[]>;
}
