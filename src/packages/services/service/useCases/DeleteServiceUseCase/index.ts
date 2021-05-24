import { postgresServiceRepository } from "../index";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";
import { DeleteClientController } from "./DeleteServiceController";

const deleteServiceUseCase = new DeleteServiceUseCase(
  postgresServiceRepository,
);

const deleteClientController = new DeleteClientController(
  deleteServiceUseCase
);

export { deleteServiceUseCase, deleteClientController }
