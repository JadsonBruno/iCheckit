import {postgresAppointmentRepository} from '../index';
import { CreateAppointmentUseCase } from "./CreateAppointmentUseCase";
import { CreateAppointmentController } from "./CreateAppointmentController";

const createUserUseCase = new CreateAppointmentUseCase(
  postgresAppointmentRepository,
);

const createAppointmentController = new CreateAppointmentController(
  createUserUseCase
);

export { createUserUseCase, createAppointmentController }
