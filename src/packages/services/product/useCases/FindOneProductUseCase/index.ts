import { postgresProductRepository }  from "../index";
import { FindOneProductUseCase } from "./FindOneProductUseCase";
import { FindOneClientController } from "./FindOneProductController";

const findOneAdminUseCase = new FindOneProductUseCase(
  postgresProductRepository,
);

const findOneAdminController = new FindOneClientController(
  findOneAdminUseCase
);

export { findOneAdminUseCase, findOneAdminController }
