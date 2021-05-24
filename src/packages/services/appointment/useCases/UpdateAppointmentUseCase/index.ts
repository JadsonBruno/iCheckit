import { postgresAppointmentRepository }  from "../index";
import { UpdateAppointmentUseCase } from "./UpdateAppointmentUseCase";
import { UpdateAppointmentController } from "./UpdateAppointmentController";

const updateAppointmentUseCase = new UpdateAppointmentUseCase(
  postgresAppointmentRepository,
);

const updateAppointmentController = new UpdateAppointmentController(
  updateAppointmentUseCase
);

export { updateAppointmentUseCase, updateAppointmentController }
