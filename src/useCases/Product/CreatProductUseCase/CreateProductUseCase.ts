import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";
import { Product } from "../../../entities/Product";

export class CreateProductUseCase {
  constructor(
    private clientRepository: IProductRepository,
  ) {}

  async execute(data: ICreateProductRequestDTO) {
    const product = new Product(data);

    await this.clientRepository.save(product);
  }
}
