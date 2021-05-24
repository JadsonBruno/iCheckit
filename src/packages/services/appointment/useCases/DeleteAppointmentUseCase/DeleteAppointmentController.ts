import { Request, Response } from "express";
import { DeleteAppointmentUseCase } from "./DeleteAppointmentUseCase";

export class DeleteAppointmentController {
  constructor(
    private deleteAppointmentUseCase: DeleteAppointmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteAppointmentUseCase.execute({
        id
      });
  
      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
