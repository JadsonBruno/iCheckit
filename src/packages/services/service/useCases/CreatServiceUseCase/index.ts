
import { CreateServiceUseCase } from "./CreateServiceUseCase";
import { CreateServiceController } from "./CreateServiceController";
import { postgresServiceRepository } from "..";


const createUserUseCase = new CreateServiceUseCase(
  postgresServiceRepository,
);

const createAdminController = new CreateServiceController(
  createUserUseCase
);

export { createUserUseCase, createAdminController }
