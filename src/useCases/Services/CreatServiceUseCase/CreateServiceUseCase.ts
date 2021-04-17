import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { ICreateProductRequestDTO } from "./CreateserviceDTO";
import { Service } from "../../../entities/Service";

export class CreateServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
  ) {}

  async execute(data: ICreateProductRequestDTO) {
    const service = new Service(data);

    await this.serviceRepository.save(service);
  }
}
