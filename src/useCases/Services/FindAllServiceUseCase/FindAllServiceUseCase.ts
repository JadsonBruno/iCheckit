import { IServiceRepository } from "../../../repositories/IServiceRepository";

export class FindAllServiceUseCase {
  constructor(
    private serviceRepository: IServiceRepository,
  ) {}

  async execute() {
    return await this.serviceRepository.findAll();
  }
}
