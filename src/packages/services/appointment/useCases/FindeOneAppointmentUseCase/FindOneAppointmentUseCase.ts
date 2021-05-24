import { IAppointmentRepository } from "../../repositories/IAppointmentRepository";
import { ICreateAppointmentRequestDTO } from "./FindOneAppointmentDTO";

export class FindOneAppointmentUseCase {
  constructor(
    private appointmentRepository: IAppointmentRepository,
  ) { }

  async execute(data: ICreateAppointmentRequestDTO) {
    return await this.appointmentRepository.findByDate(data.date);
  }
}
