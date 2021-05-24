import { Admin } from "../../../entities/Admin";

export interface IUpdateAdminRequestDTO {
  id: string;
  admin: Omit<Admin, 'id'>;
}
