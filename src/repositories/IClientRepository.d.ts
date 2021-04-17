import { Client } from "../entities/Client";

export interface IClientRepository {
  findByEmail(email: string): Promise<Client>;
  save(user: Client): Promise<Client>;
  findAll(): Promise<Client[]>;
  updateUser(id: string, user: Omit<Client, 'id'>): Promise<Client>;
  deleteUser(id: string): Promise<void>;
}
