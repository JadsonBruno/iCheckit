import { postgresServiceRepository }  from "../index";
import { FindAllServiceUseCase } from "./FindAllServiceUseCase";
import { FindAllClientController } from "./FindAllServiceController";

const findAllClientUseCase = new FindAllServiceUseCase(
  postgresServiceRepository,
);

const findAllClientController = new FindAllClientController(
  findAllClientUseCase
);

export { findAllClientUseCase, findAllClientController }
