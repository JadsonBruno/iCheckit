import {postgresAdminRepository} from '../index';
import { CreateAdminUseCase } from "./CreateAdminUseCase";
import { CreateAdminController } from "./CreateAdminController";

const createUserUseCase = new CreateAdminUseCase(
  postgresAdminRepository,
);

const createAdminController = new CreateAdminController(
  createUserUseCase
);

export { createUserUseCase, createAdminController }
