import { IAppointmentRepository } from "../../repositories/IAppointmentRepository";
import { IUpdateAppointmentRequestDTO } from "./UpdateAppointmentDTO";

export class UpdateAppointmentUseCase {
  constructor(
    private appointmentRepository: IAppointmentRepository,
  ) { }

  async execute(data: IUpdateAppointmentRequestDTO) {
    await this.appointmentRepository.updateUser(data.id, data.appointment);
  }
}
