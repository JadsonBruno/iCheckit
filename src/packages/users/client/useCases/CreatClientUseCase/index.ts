
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateAdminController } from "./CreateClientController";
import { postgresClientRepository } from "..";


const createUserUseCase = new CreateClientUseCase(
  postgresClientRepository,
);

const createAdminController = new CreateAdminController(
  createUserUseCase
);

export { createUserUseCase, createAdminController }
