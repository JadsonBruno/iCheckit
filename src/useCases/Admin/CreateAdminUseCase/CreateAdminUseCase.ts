import { IAdminsRepository } from "../../../repositories/IAdminRepository";
import { ICreateAdminRequestDTO } from "./CreateAdminDTO";
import { Admin } from "../../../entities/Admin";

export class CreateAdminUseCase {
  constructor(
    private adminsRepository: IAdminsRepository,
  ) {}

  async execute(data: ICreateAdminRequestDTO) {
    const adminAlreadyExists = await this.adminsRepository.findByEmail(data.email);

    if (adminAlreadyExists) {
      throw new Error('User admin already exists.');
    }

    const user = new Admin(data);

    return await this.adminsRepository.save(user);
  }
}
