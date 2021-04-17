import { IClientRepository } from "../../../repositories/IClientRepository";
import { IFindOneClientRequestDTO } from "./FindOneClientDTO";

export class FindOneClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
  ) {}

  async execute(data: IFindOneClientRequestDTO) {
    return await this.clientRepository.findByEmail(data.email);
  }
}
