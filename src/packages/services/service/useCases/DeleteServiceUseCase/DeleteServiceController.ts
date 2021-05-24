import { Request, Response } from "express";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

export class DeleteClientController {
  constructor(
    private deleteServiceUseCase: DeleteServiceUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteServiceUseCase.execute({
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
