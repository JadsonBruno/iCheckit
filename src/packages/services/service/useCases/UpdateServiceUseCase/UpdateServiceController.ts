import { Request, Response } from "express";
import { UpdateServiceUseCase } from "./UpdateServiceUseCase";

export class UpdateServiceController {
  constructor(
    private updateServiceUseCase: UpdateServiceUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, establishmentID, value, date } = request.body;
    const { id } = request.params;

    const dateProp = new Date(date);

    try {
      await this.updateServiceUseCase.execute({
        id,
        service: {
          title, establishmentID, value, date: dateProp
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
