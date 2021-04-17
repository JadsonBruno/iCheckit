import { IEstablishmentRepository } from "../../../repositories/IEstablishmentRepository";

export class FindAllEstablishmentUseCase {
  constructor(
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  async execute() {
    return await this.establishmentRepository.findAll();
  }
}
