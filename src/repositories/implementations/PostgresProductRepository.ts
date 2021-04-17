import { IProductRepository } from "../IProductRepository";
import { Product } from "../../entities/Product";

export class PostgresProductRepository implements IProductRepository {
  private products: Product[] = [];

  async findById(id: string): Promise<Product> {
    const product = this.products.find(product => product.id === id);

    return product;
  }

  async save(product: Product): Promise<Product> {
    this.products.push(product);

    return product;
  }

  async deleteProduct(id: string): Promise<void> {
    const index = this.products.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error('User not found.');
    }

    this.products.splice(index, 1);
  }

  async findAll() : Promise<Product[]> {
    return this.products;
  }

  async updateProduct(id: string, user: Product): Promise<Product> {
    const index = this.products.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error('User not found.');
    }

    const actualUser = this.products[index];

    this.products[index] = {
      ...actualUser,
      ...user
    };

    return this.products[index];
  }
}
