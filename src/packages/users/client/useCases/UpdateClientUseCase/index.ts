import { postgresClientRepository }  from "../index";
import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { UpdateClientController } from "./UpdateClientController";

const updateClientUseCase = new UpdateClientUseCase(
  postgresClientRepository,
);

const updateClientController = new UpdateClientController(
  updateClientUseCase
);

export { updateClientUseCase, updateClientController }
