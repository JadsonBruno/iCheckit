import { Admin } from "../../../entities/Admin";

export interface IUpdateClientRequestDTO {
  id: string;
  admin: Omit<Admin, 'id'>;
}
