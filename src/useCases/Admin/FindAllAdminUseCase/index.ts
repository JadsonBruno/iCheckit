import { postgresAdminRepository }  from "../index";
import { FindAllAdminUseCase } from "./FindAllAdminUseCase";
import { FindAllAdminsController } from "./FindAllAdminController";

const findAllAdminsUseCase = new FindAllAdminUseCase(
  postgresAdminRepository,
);

const findAllAdminsController = new FindAllAdminsController(
  findAllAdminsUseCase
);

export { findAllAdminsUseCase, findAllAdminsController }
