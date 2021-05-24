import { Product } from "../entities/Product";

export interface IProductRepository {
  findById(id: string): Promise<Product>;
  save(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  updateProduct(id: string, product: Omit<Product, 'id'>): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}
