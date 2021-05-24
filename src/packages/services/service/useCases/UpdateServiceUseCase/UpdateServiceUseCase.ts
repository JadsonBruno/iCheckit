import { IServiceRepository } from "../../repositories/IServiceRepository";
import { IUpdateClientRequestDTO } from "./UpdateServiceDTO";

export class UpdateServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
  ) { }

  async execute(data: IUpdateClientRequestDTO) {
    await this.serviceRepository.updateService(data.id, data.service);
  }
}
