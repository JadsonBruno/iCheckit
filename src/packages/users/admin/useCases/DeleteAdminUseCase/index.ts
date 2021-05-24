import { postgresAdminRepository } from "../index";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";
import { DeleteAdminController } from "./DeleteAdminController";

const deleteAdminUseCase = new DeleteAdminUseCase(
  postgresAdminRepository,
);

const deleteAdminController = new DeleteAdminController(
  deleteAdminUseCase
);

export { deleteAdminUseCase, deleteAdminController }
