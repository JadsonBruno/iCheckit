import { postgresProductRepository }  from "../index";
import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { UpdateProductController } from "./UpdateProductController";

const updateClientUseCase = new UpdateProductUseCase(
  postgresProductRepository,
);

const updateClientController = new UpdateProductController(
  updateClientUseCase
);

export { updateClientUseCase, updateClientController }
