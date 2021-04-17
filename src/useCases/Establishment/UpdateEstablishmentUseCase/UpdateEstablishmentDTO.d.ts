import { Establishment } from "../../../entities/Establishment";

export interface IUpdateEstablishmentRequestDTO {
  id: string;
  admin: Omit<Establishment, 'id'>;
}
