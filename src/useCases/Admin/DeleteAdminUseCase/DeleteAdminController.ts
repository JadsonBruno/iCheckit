import { Request, Response } from "express";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

export class DeleteAdminController {
  constructor(
    private deleteAdminUseCase: DeleteAdminUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteAdminUseCase.execute({
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
