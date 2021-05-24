import { Service } from "../../../service/entity/Service";

export interface ICreateAppointmentRequestDTO {
  clientID: string;
  date: Date;
  service: Service;
  stablishmentID: string;
}
