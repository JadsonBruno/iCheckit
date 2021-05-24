import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";
import { IFindOneEstablishmentRequestDTO } from "./FindOneEstablishmentDTO";

export class FindOneEstablishmentUseCase {
  constructor(
    private EstablishmentRepository: IEstablishmentRepository,
  ) { }

  async execute(data: IFindOneEstablishmentRequestDTO) {
    return await this.EstablishmentRepository.findByEmail(data.email);
  }
}
