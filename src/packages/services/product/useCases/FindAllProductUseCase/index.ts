import { postgresProductRepository } from "../index";
import { FindAllProductUseCase } from "./FindAllProductUseCase";
import { FindAllClientController } from "./FindAllProductController";

const findAllClientUseCase = new FindAllProductUseCase(
  postgresProductRepository,
);

const findAllClientController = new FindAllClientController(
  findAllClientUseCase
);

export { findAllClientUseCase, findAllClientController }
