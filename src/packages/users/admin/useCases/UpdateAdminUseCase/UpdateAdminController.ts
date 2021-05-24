import { Request, Response } from "express";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";

export class UpdateAdminController {
  constructor(
    private createAdminUseCase: UpdateAdminUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, corporateName } = request.body;
    const { id } = request.params;

    try {
      await this.createAdminUseCase.execute({
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
