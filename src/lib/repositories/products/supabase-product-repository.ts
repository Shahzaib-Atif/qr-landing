// lib/supabase-product-repository.ts
import { createClient } from '@/utils/supabase-server';
import { cookies } from 'next/headers';
import { IProductRepository } from '@/lib/repositories/interfaces';
import { Product } from '@/lib/models';

export class SupabaseProductRepository implements IProductRepository {
    supabase: ReturnType<typeof createClient>;

    constructor() {
        const cookieStore = cookies();
        this.supabase = createClient(cookieStore);
    }

    async getAllProducts(): Promise<Product[]> {
        const { data: products, error } = await this.supabase.from("products").select('*');

        if (error) {
            console.error(error);
            return [];
        }

        return products as Product[];
    }

    async getProductBySlug(slug: string): Promise<Product | null> {
        const { data: product, error } = await this.supabase
            .from('products')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error) {
            console.error(error);
            return null;
        }

        return product as Product;
    }
}
