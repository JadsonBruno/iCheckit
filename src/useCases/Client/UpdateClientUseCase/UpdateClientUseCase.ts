import { IClientRepository } from "../../../repositories/IClientRepository";
import { IUpdateClientRequestDTO } from "./UpdateClientDTO";

export class UpdateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
  ) {}

  async execute(data: IUpdateClientRequestDTO) {
    await this.clientRepository.updateUser(data.id, data.admin);
  }
}
