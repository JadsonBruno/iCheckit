import { postgresAppointmentRepository }  from "../index";
import { DeleteAppointmentUseCase } from "./DeleteAppointmentUseCase";
import { DeleteAppointmentController } from "./DeleteAppointmentController";

const deleteAppointmentUseCase = new DeleteAppointmentUseCase(
  postgresAppointmentRepository,
);

const deleteAppointmentController = new DeleteAppointmentController(
  deleteAppointmentUseCase
);

export { deleteAppointmentUseCase, deleteAppointmentController }
