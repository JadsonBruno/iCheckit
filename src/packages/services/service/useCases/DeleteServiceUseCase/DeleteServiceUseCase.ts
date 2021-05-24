import { IServiceRepository } from "../../repositories/IServiceRepository";
import { IDeleteServiceRequestDTO } from "./DeleteServiceDTO";

export class DeleteServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
  ) { }

  async execute(data: IDeleteServiceRequestDTO) {
    await this.serviceRepository.deleteService(data.id);
  }
}
