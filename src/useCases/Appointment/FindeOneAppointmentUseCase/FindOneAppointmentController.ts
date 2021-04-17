import { Request, Response } from "express";
import { FindOneAppointmentUseCase } from "./FindOneAppointmentUseCase";

export class FindOneAppointmentController {
  constructor(
    private findOneAppointmentUseCase: FindOneAppointmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;

    try {
      const Appointment = await this.findOneAppointmentUseCase.execute({
        date
      });
  
      return response.status(200).json(Appointment);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
