import { IAppointmentRepository } from "../IAppointmentRepository";
import { Appointment } from "../../entity/Appointment";

export class PostgresAppointmentRepository implements IAppointmentRepository {
  private users: Appointment[] = [];

  async findByDate(date: Date): Promise<Appointment> {
    const user = this.users.find(user => user.date === date);

    return user;
  }

  async save(user: Appointment): Promise<Appointment> {
    this.users.push(user);

    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error('User not found.');
    }

    this.users.splice(index, 1);
  }

  async findAll(): Promise<Appointment[]> {
    return this.users;
  }

  async updateUser(id: string, user: Appointment): Promise<Appointment> {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error('User not found.');
    }

    const actualUser = this.users[index];

    this.users[index] = {
      ...actualUser,
      ...user
    };

    return this.users[index];
  }
}
