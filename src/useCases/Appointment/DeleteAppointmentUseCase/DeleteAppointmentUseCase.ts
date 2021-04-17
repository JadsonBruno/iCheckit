import { IAppointmentRepository } from "../../../repositories/IAppointmentRepository";
import { IDeleteAppointmentRequestDTO } from "./DeleteAppointmentDTO";

export class DeleteAppointmentUseCase {
  constructor(
    private AppointmentRepository: IAppointmentRepository,
  ) {}

  async execute(data: IDeleteAppointmentRequestDTO) {
    await this.AppointmentRepository.deleteUser(data.id);
  }
}
