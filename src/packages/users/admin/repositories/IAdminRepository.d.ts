import { Admin } from "../entities/Admin";

export interface IAdminsRepository {
  findByEmail(email: string): Promise<Admin>;
  save(user: Admin): Promise<Admin>;
  findAll(): Promise<Admin[]>;
  updateUser(id: string, user: Omit<Admin, 'id'>): Promise<Admin>;
  deleteUser(id: string): Promise<void>;
}
