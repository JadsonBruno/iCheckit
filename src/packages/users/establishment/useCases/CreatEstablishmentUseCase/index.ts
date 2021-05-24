
import { CreateEstablishmentUseCase } from "./CreateEstablishmentUseCase";
import { CreateEstablishmentController } from "./CreatEstablishmentController";
import { postgresEstablishmentRepository } from "..";


const createUserUseCase = new CreateEstablishmentUseCase(
    postgresEstablishmentRepository,
);

const createEstablishmentController = new CreateEstablishmentController(
  createUserUseCase
);

export { createUserUseCase, createEstablishmentController }
