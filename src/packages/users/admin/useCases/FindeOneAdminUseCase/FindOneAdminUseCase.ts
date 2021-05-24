import { IAdminsRepository } from "../../repositories/IAdminRepository";
import { ICreateAdminRequestDTO } from "./FindOneAdminDTO";

export class FindOneAdminUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) { }

  async execute(data: ICreateAdminRequestDTO) {
    return await this.adminsRepository.findByEmail(data.email);
  }
}
