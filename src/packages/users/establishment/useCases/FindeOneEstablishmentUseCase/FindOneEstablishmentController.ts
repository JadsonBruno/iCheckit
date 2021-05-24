import { Request, Response } from "express";
import { FindOneEstablishmentUseCase } from "./FindOneEstablishmentUseCase";

export class FindOneEstablishmentController {
  constructor(
    private findOneEstablishmentUseCase: FindOneEstablishmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const client = await this.findOneEstablishmentUseCase.execute({
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
