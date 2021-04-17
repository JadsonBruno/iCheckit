import { IEstablishmentRepository } from "../../../repositories/IEstablishmentRepository";
import { IDeleteEstablishmentRequestDTO } from "./DeleteEstablishmentDTO";

export class DeleteEstablishmentUseCase {
  constructor(
    private adminsRepository: IEstablishmentRepository,
  ) {}

  async execute(data: IDeleteEstablishmentRequestDTO) {
    await this.adminsRepository.deleteUser(data.id);
  }
}
