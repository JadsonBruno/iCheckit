import { Request, Response } from "express";
import { FindOneClientUseCase } from "./FindOneClientUseCase";

export class FindOneClientController {
  constructor(
    private findOneClientUseCase: FindOneClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const client = await this.findOneClientUseCase.execute({
        email
      });

      return response.status(200).json(client);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
