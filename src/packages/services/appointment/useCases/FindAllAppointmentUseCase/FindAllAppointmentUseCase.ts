import { IAdminsRepository } from "../../../repositories/IAdminRepository";

export class FindAllAdminUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) {}

  async execute() {
    return await this.adminsRepository.findAll();
  }
}
