import { postgresClientRepository } from "../index";
import { FindAllClientUseCase } from "./FindAllClientUseCase";
import { FindAllClientController } from "./FindAllClientController";

const findAllClientUseCase = new FindAllClientUseCase(
    postgresClientRepository,
);

const findAllClientController = new FindAllClientController(
    findAllClientUseCase
);

export { findAllClientUseCase, findAllClientController }
