import { Establishment } from "../entities/Establishment";

export interface IEstablishmentRepository {
  findByEmail(email: string): Promise<Establishment>;
  save(user: Establishment): Promise<Establishment>;
  findAll(): Promise<Establishment[]>;
  updateUser(id: string, user: Omit<Establishment, 'id'>): Promise<Establishment>;
  deleteUser(id: string): Promise<void>;
}
