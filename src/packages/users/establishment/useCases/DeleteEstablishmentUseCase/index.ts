
import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";
import { DeleteEstablishmentController } from "./DeleteEstablishmentController";
import { postgresEstablishmentRepository } from "..";


const createUserUseCase = new DeleteEstablishmentUseCase(
  postgresEstablishmentRepository,
);

const deleteEstablishmentController = new DeleteEstablishmentController(
  createUserUseCase
);

export { createUserUseCase, deleteEstablishmentController }
