import { IProductRepository } from "../../repositories/IProductRepository";
import { IDeleteClientRequestDTO } from "./DeleteProductDTO";

export class DeleteClientUseCase {
  constructor(
    private adminsRepository: IProductRepository,
  ) { }

  async execute(data: IDeleteClientRequestDTO) {
    await this.adminsRepository.deleteProduct(data.id);
  }
}
