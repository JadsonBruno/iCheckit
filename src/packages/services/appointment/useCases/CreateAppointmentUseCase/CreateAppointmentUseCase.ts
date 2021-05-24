import { IAppointmentRepository } from "../../repositories/IAppointmentRepository";
import { ICreateAppointmentRequestDTO } from "./CreateAppointmentDTO";
import { Appointment } from "../../entity/Appointment";

export class CreateAppointmentUseCase {
  constructor(
    private AppointmentRepository: IAppointmentRepository,
  ) { }

  async execute(data: ICreateAppointmentRequestDTO) {
    const AppointmentAlreadyExists = await this.AppointmentRepository.save(data.date);

    if (AppointmentAlreadyExists) {
      throw new Error('User Appointment already exists.');
    }

    const appointment = new Appointment(data);

    return await this.AppointmentRepository.save(appointment);
  }
}
