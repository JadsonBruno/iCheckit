import { IAdminsRepository } from "../../repositories/IAdminRepository";
import { IUpdateAdminRequestDTO } from "./UpdateAdminDTO";

export class UpdateAdminUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) { }

  async execute(data: IUpdateAdminRequestDTO) {
    await this.adminsRepository.updateUser(data.id, data.admin);
  }
}
