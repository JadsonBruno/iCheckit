import { IEstablishmentRepository } from "../IEstablishmentRepository";
import { Establishment } from "../../entities/Establishment";

export class PostgresEstablishmentRepository implements IEstablishmentRepository {
  private users: Establishment[] = [];

  async findByEmail(email: string): Promise<Establishment> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: Establishment): Promise<Establishment> {
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

  async findAll() : Promise<Establishment[]> {
    return this.users;
  }

  async updateUser(id: string, user: Establishment): Promise<Establishment> {
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
