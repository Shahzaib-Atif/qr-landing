import { IProductRepository } from "../interfaces";
import { Product } from "../../models";
import { SupabaseProductRepository } from "./supabase-product-repository";

export class ProductRepository implements IProductRepository {
    repo: IProductRepository;

    constructor() {
        // CHANGE THIS LINE TO USE THE DESIRED REPOSITORY
        this.repo = new SupabaseProductRepository();
    }
    getImageUrl(image_url: string): Promise<string | null> {
        return this.repo.getImageUrl(image_url);
    }

    getProductBySlug(slug: string): Promise<Product | null> {
        return this.repo.getProductBySlug(slug);
    }

    getAllProducts(): Promise<Product[]> {
        return this.repo.getAllProducts();
    }

}