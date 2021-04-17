import { IServiceRepository } from "../IServiceRepository";
import { Service } from "../../entities/Service";

export class PostgresServiceRepository implements IServiceRepository {
  private services: Service[] = [];

  async findByDate(date: Date): Promise<Service> {
    const product = this.services.find(product => product.date === date);

    return product;
  }

  async save(service: Service): Promise<Service> {
    this.services.push(service);

    return service;
  }

  async deleteService(id: string): Promise<void> {
    const index = this.services.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error('User not found.');
    }

    this.services.splice(index, 1);
  }

  async findAll() : Promise<Service[]> {
    return this.services;
  }

  async updateService(id: string, service: Service): Promise<Service> {
    const index = this.services.findIndex(service => service.id === id);

    if (index === -1) {
      throw new Error('service not found.');
    }

    const actualService = this.services[index];

    this.services[index] = {
      ...actualService,
      ...service
    };

    return this.services[index];
  }
}
