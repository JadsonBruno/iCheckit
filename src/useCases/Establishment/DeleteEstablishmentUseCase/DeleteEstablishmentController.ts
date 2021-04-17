import { Request, Response } from "express";
import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";

export class DeleteEstablishmentController {
  constructor(
    private deleteEstablishmentUseCase: DeleteEstablishmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteEstablishmentUseCase.execute({
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
