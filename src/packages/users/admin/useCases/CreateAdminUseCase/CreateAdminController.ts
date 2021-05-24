import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

export class CreateAdminController {
  constructor(
    private createAdminUseCase: CreateAdminUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, corporateName } = request.body;

    try {
      const createdUser = await this.createAdminUseCase.execute({
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
