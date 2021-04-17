import { postgresAppointmentRepository }  from "../index";
import { FindOneAppointmentUseCase } from "./FindOneAppointmentUseCase";
import { FindOneAppointmentController } from "./FindOneAppointmentController";

const findOneAppointmentUseCase = new FindOneAppointmentUseCase(
  postgresAppointmentRepository,
);

const findOneAppointmentController = new FindOneAppointmentController(
  findOneAppointmentUseCase
);

export { findOneAppointmentUseCase, findOneAppointmentController }
