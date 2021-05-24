import { Appointment } from "../entities/Appointment";

export interface IAppointmentRepository {
  findByDate(date: Date): Promise<Appointment>;
  save(user: Appointment): Promise<Appointment>;
  findAll(): Promise<Appointment[]>;
  updateUser(id: string, user: Omit<Appointment, 'id'>): Promise<Appointment>;
  deleteUser(id: string): Promise<void>;
}
