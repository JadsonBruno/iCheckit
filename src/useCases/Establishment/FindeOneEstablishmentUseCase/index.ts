import { postgresEstablishmentRepository }  from "../index";
import { FindOneEstablishmentUseCase } from "./FindOneEstablishmentUseCase";
import { FindOneEstablishmentController } from "./FindOneEstablishmentController";

const findOneEstablishmentUseCase = new FindOneEstablishmentUseCase(
  postgresEstablishmentRepository,
);

const findOneEstablishmentController = new FindOneEstablishmentController(
  findOneEstablishmentUseCase
);

export { findOneEstablishmentUseCase, findOneEstablishmentController }
