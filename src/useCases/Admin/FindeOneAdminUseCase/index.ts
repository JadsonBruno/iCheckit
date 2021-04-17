import { postgresAdminRepository }  from "../index";
import { FindOneAdminUseCase } from "./FindOneAdminUseCase";
import { FindOneAdminController } from "./FindOneAdminController";

const findOneAdminUseCase = new FindOneAdminUseCase(
  postgresAdminRepository,
);

const findOneAdminController = new FindOneAdminController(
  findOneAdminUseCase
);

export { findOneAdminUseCase, findOneAdminController }
