import { IAdminsRepository } from "../../repositories/IAdminRepository";
import { IDeleteAdminRequestDTO } from "./DeleteAdminDTO";

export class DeleteAdminUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) { }

  async execute(data: IDeleteAdminRequestDTO) {
    await this.adminsRepository.deleteUser(data.id);
  }
}
