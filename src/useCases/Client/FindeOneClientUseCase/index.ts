import { postgresClientRepository }  from "../index";
import { FindOneClientUseCase } from "./FindOneClientUseCase";
import { FindOneClientController } from "./FindOneClientController";

const findOneAdminUseCase = new FindOneClientUseCase(
  postgresClientRepository,
);

const findOneAdminController = new FindOneClientController(
  findOneAdminUseCase
);

export { findOneAdminUseCase, findOneAdminController }
