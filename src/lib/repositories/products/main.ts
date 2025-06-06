import { IProductRepository } from "../interfaces";
import { Product } from "../../models";
import { SupabaseProductRepository } from "./supabase-product-repository";

export class ProductRepository implements IProductRepository {
    repo: IProductRepository;

    constructor() {
        // CHANGE THIS LINE TO USE THE DESIRED REPOSITORY
        this.repo = new SupabaseProductRepository();
    }

    getProductBySlug(slug: string): Promise<Product | null> {
        return this.repo.getProductBySlug(slug);
    }

    getAllProducts(): Promise<Product[]> {
        return this.repo.getAllProducts();
    }

}