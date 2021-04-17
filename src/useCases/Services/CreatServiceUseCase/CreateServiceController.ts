import { Request, Response } from "express";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

export class CreateServiceController {
  constructor(
    private createServiceUseCase: CreateServiceUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, establishmentID, value, date } = request.body;

    try {
      await this.createServiceUseCase.execute({
        title, establishmentID, value, date 
      })

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
