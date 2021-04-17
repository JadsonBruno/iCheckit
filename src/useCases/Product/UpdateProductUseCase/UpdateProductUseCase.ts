import { IProductRepository } from "../../../repositories/IProductRepository";
import { IUpdateClientRequestDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
  ) {}

  async execute(data: IUpdateClientRequestDTO) {
    await this.productRepository.updateProduct(data.id, data.product);
  }
}
