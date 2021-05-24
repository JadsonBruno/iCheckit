
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CreateProductController } from "./CreateProductController";
import { postgresProductRepository } from "..";


const createUserUseCase = new CreateProductUseCase(
  postgresProductRepository,
);

const createAdminController = new CreateProductController(
  createUserUseCase
);

export { createUserUseCase, createAdminController }
