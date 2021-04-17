import { postgresClientRepository }  from "../index";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { DeleteClientController } from "./DeleteClientController";

const deleteClientUseCase = new DeleteClientUseCase(
  postgresClientRepository,
);

const deleteClientController = new DeleteClientController(
  deleteClientUseCase
);

export { deleteClientUseCase, deleteClientController }
