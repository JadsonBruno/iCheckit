import { IProductRepository } from "../../repositories/IProductRepository";

export class FindAllProductUseCase {
  constructor(
    private productRepository: IProductRepository,
  ) { }

  async execute() {
    return await this.productRepository.findAll();
  }
}
