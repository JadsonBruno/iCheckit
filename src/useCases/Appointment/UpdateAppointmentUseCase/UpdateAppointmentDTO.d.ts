import { Appointment } from "../../../entities/Appointment";

export interface IUpdateAppointmentRequestDTO {
  id: string;
  appointment: Omit<Appointment, 'id'>;
}
