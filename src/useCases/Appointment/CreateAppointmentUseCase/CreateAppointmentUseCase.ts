import { IAppointmentRepository } from "../../../repositories/IAppointmentRepository";
import { ICreateAppointmentRequestDTO } from "./CreateAppointmentDTO";
import { Appointment } from "../../../entities/Appointment";

export class CreateAppointmentUseCase {
  constructor(
    private AppointmentRepository: IAppointmentRepository,
  ) {}

  async execute(data: ICreateAppointmentRequestDTO) {
    const AppointmentAlreadyExists = await this.AppointmentRepository.findByDate(data.date);

    if (AppointmentAlreadyExists) {
      throw new Error('User Appointment already exists.');
    }

    const user = new Appointmentdata);

    return await this.AppointmentRepository.save(user);
  }
}
