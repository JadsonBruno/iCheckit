import { postgresProductRepository } from "../index";
import { DeleteClientUseCase } from "./DeleteProductUseCase";
import { DeleteClientController } from "./DeleteProductController";

const deleteClientUseCase = new DeleteClientUseCase(
  postgresProductRepository,
);

const deleteClientController = new DeleteClientController(
  deleteClientUseCase
);

export { deleteClientUseCase, deleteClientController }
