import { IClientRepository } from "../../../repositories/IClientRepository";
import { ICreateClientRequestDTO } from "./CreateClientDTO";
import { Client } from "../../../entities/Client";

export class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
  ) {}

  async execute(data: ICreateClientRequestDTO) {
    const adminAlreadyExists = await this.clientRepository.findByEmail(data.email);

    if (adminAlreadyExists) {
      throw new Error('User client already exists.');
    }

    const user = new Client(data);

    await this.clientRepository.save(user);
  }
}
