import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  constructor(
    private updateClientUseCase: UpdateClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, corporateName } = request.body;
    const { id } = request.params;

    try {
      await this.updateClientUseCase.execute({
        id,
        admin: {
          email,
          password,
          corporateName
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
