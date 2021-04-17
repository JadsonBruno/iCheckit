import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { IFindOneServiceRequestDTO } from "./FindOneServiceDTO";

export class FindOneServiceUseCase {
  constructor(
    private clientRepository: IServiceRepository,
  ) {}

  async execute(data: IFindOneServiceRequestDTO) {
    return await this.clientRepository.findByDate(data.date);
  }
}
