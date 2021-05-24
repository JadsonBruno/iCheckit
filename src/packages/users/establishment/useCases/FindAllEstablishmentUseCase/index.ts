import { postgresEstablishmentRepository } from "../index";
import { FindAllEstablishmentUseCase } from "./FindAllEstablishmentUseCase";
import { FindAllEstablishmentController } from "./FindAllEstablishmentController";

const findAllEstablishmentUseCase = new FindAllEstablishmentUseCase(
  postgresEstablishmentRepository,
);

const findAllEstablishmentController = new FindAllEstablishmentController(
  findAllEstablishmentUseCase
);

export { findAllEstablishmentUseCase, findAllEstablishmentController }
