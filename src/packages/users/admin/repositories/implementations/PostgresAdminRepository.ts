import { IAdminsRepository } from "../IAdminRepository";
import { Admin } from "../../entity/Admin";

export class PostgresAdminRepository implements IAdminsRepository {
  private users: Admin[] = [];

  async findByEmail(email: string): Promise<Admin> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: Admin): Promise<Admin> {
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

  async findAll(): Promise<Admin[]> {
    return this.users;
  }

  async updateUser(id: string, user: Admin): Promise<Admin> {
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
