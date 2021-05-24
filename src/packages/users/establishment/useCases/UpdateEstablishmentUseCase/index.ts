import { postgresEstablishmentRepository } from "../index";
import { UpdateEstablishmentUseCase } from "./UpdateEstablishmentUseCase";
import { UpdateEstablishmentController } from "./UpdateEstablishmentClientController";

const updateEstablishmentUseCase = new UpdateEstablishmentUseCase(
  postgresEstablishmentRepository,
);

const updateEstablishmentController = new UpdateEstablishmentController(
  updateEstablishmentUseCase
);

export { updateEstablishmentUseCase, updateEstablishmentController }
