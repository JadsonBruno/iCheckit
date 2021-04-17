
import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";
import { DeleteEstablishmentController } from "./DeleteEstablishmentController";
import { postgresEstablishmentRepository } from "..";


const createUserUseCase = new DeleteEstablishmentUseCase(
    postgresEstablishmentRepository,
);

const createEstablishmentController = new DeleteEstablishmentController(
  createUserUseCase
);

export { createUserUseCase, DeleteEstablishmentController }
