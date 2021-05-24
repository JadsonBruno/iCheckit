import { Request, Response } from "express";
import { FindOneServiceUseCase } from "./FindOneServiceUseCase";

export class FindOneClientController {
  constructor(
    private findOneClientUseCase: FindOneServiceUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.params;

    const dateProp = new Date(date);

    try {
      const service = await this.findOneClientUseCase.execute({
        date: dateProp
      });

      return response.status(200).json(service);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
