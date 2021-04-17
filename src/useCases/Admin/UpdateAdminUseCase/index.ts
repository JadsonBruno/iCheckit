import { postgresAdminRepository }  from "../index";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";
import { UpdateAdminController } from "./UpdateAdminController";

const updateAdminUseCase = new UpdateAdminUseCase(
  postgresAdminRepository,
);

const updateAdminController = new UpdateAdminController(
  updateAdminUseCase
);

export { updateAdminUseCase, updateAdminController }
