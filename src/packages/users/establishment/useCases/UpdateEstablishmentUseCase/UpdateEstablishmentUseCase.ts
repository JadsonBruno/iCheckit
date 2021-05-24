import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";
import { IUpdateEstablishmentRequestDTO } from "./UpdateEstablishmentDTO";

export class UpdateEstablishmentUseCase {
  constructor(
    private EstablishmentRepository: IEstablishmentRepository,
  ) { }

  async execute(data: IUpdateEstablishmentRequestDTO) {
    await this.EstablishmentRepository.updateUser(data.id, data.admin);
  }
}
