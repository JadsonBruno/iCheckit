import { Request, Response } from "express";
import { FindOneAdminUseCase } from "./FindOneAdminUseCase";

export class FindOneAdminController {
  constructor(
    private findOneAdminUseCase: FindOneAdminUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    try {
      const admin = await this.findOneAdminUseCase.execute({
        email
      });

      return response.status(200).json(admin);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
