import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";
import { ICreateEstablishmentRequestDTO } from "./CreateEstablishmentDTO";
import { Establishment } from "../../entity/Establishment";

export class CreateEstablishmentUseCase {
  constructor(
    private establishmentsRepository: IEstablishmentRepository,
  ) { }

  async execute(data: ICreateEstablishmentRequestDTO) {
    const establishmentAlreadyExists = await this.establishmentsRepository.findByEmail(data.email);

    if (establishmentAlreadyExists) {
      throw new Error('User establishment already exists.');
    }

    const user = new Establishment(data);

    return await this.establishmentsRepository.save(user);
  }
}
