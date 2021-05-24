import { Request, Response } from "express";
import { UpdateEstablishmentUseCase } from "./UpdateEstablishmentUseCase";

export class UpdateEstablishmentController {
  constructor(
    private updateEstablishmentUseCase: UpdateEstablishmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, corporateName, location } = request.body;
    const { id } = request.params;

    try {
      await this.updateEstablishmentUseCase.execute({
        id,
        admin: {
          email,
          password,
          corporateName,
          location
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
