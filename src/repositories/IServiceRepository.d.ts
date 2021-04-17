import { Service } from "../entities/Service";

export interface IServiceRepository {
  findByDate(date: Date): Promise<Service>;
  save(service: Service): Promise<Service>;
  findAll(): Promise<Service[]>;
  updateService(id: string, service: Omit<Service, 'id'>): Promise<Service>;
  deleteService(id: string): Promise<void>;
}
