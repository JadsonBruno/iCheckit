import { postgresServiceRepository }  from "../index";
import { UpdateServiceUseCase } from "./UpdateServiceUseCase";
import { UpdateServiceController } from "./UpdateServiceController";

const updateServiceUseCase = new UpdateServiceUseCase(
  postgresServiceRepository,
);

const updateServiceController = new UpdateServiceController(
  updateServiceUseCase
);

export { updateServiceUseCase, updateServiceController }
