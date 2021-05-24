import { postgresServiceRepository }  from "../index";
import { FindOneServiceUseCase } from "./FindOneServiceUseCase";
import { FindOneClientController } from "./FindOneServiceController";

const findOneServiceUseCase = new FindOneServiceUseCase(
  postgresServiceRepository,
);

const findOneServiceController = new FindOneClientController(
  findOneServiceUseCase
);

export { findOneServiceUseCase, findOneServiceController }
