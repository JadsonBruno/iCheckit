import { Service } from "../../../entities/Service";

export interface IUpdateClientRequestDTO {
  id: string;
  service: Omit<Service, 'id'>;
}
