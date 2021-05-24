import { Request, Response } from "express";
import { CreateEstablishmentUseCase } from "./CreateEstablishmentUseCase";

export class CreateEstablishmentController {
  constructor(
    private createEstablishmentUseCase: CreateEstablishmentUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, corporateName, location } = request.body;

    try {
      const createdUser = await this.createEstablishmentUseCase.execute({
        location,
        email,
        password,
        corporateName
      });

      return response.status(201).json(createdUser);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
