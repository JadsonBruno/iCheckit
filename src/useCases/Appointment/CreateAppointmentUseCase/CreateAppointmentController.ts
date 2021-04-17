import { Request, Response } from "express";
import { CreateAppointmentUseCase } from "./CreateAppointmentUseCase";

export class CreateAppointmentController {
  constructor(
    private createAppointmentUseCase: CreateAppointmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { clientID, date, service } = request.body;

    try {
      const createdUser = await this.createAppointmentUseCase.execute({
        clientID,
        date,
        service
      });

      return response.status(201).json(createdUser);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
