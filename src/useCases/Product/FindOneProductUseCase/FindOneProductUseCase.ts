import { IProductRepository } from "../../../repositories/IProductRepository";
import { IFindOneProductRequestDTO } from "./FindOneProductDTO";

export class FindOneProductUseCase {
  constructor(
    private clientRepository: IProductRepository,
  ) {}

  async execute(data: IFindOneProductRequestDTO) {
    return await this.clientRepository.findById(data.id);
  }
}
