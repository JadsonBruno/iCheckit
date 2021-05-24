import { postgresAppointmentRepository }  from "../index";
import { FindAllAppointmentUseCase } from "./FindAllAppointmentUseCase";
import { FindAllAppointmentController } from "./FindAllAppointmentontroller";

const findAllAppointmentsUseCase = new FindAllAppointmentUseCase(
  postgresAppointmentRepository,
);

const findAllAppointmentController = new FindAllAppointmentController(
  findAllAppointmentUseCase
);

export { findAllAppointmentUseCase, findAllAppointmentController }
