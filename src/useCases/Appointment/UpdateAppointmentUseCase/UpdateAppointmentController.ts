import { Request, Response } from "express";
import { UpdateAppointmentUseCase } from "./UpdateAppointmentUseCase";

export class UpdateAppointmentController {
  constructor(
    private createAppointmentUseCase: UpdateAppointmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date, clientID, stablishmentID, service } = request.body;
    const { id } = request.params;

    try {
      await this.createAppointmentUseCase.execute({
        id,
        appointment: {
          date,
          clientID,
          stablishmentID,
          service
        }
      });
  
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
