import { Product } from "../../../entities/Product";

export interface IUpdateClientRequestDTO {
  id: string;
  product: Omit<Product, 'id'>;
}
