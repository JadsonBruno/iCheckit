import { IAdminsRepository } from "../../../repositories/IAdminRepository";
import { IDeleteClientRequestDTO } from "./DeleteClientDTO";

export class DeleteClientUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) {}

  async execute(data: IDeleteClientRequestDTO) {
    await this.adminsRepository.deleteUser(data.id);
  }
}
