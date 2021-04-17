import { postgresProductRepository }  from "../index";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { DeleteClientController } from "./DeleteClientController";

const deleteClientUseCase = new DeleteClientUseCase(
  postgresProductRepository,
);

const deleteClientController = new DeleteClientController(
  deleteClientUseCase
);

export { deleteClientUseCase, deleteClientController }
