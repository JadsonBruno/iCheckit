import { Request, Response } from "express";
import { FindAllAdminUseCase } from "./FindAllAdminUseCase";

export class FindAllAdminsController {
  constructor(
    private findAllAdminUseCase: FindAllAdminUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const admins = await this.findAllAdminUseCase.execute();
  
      return response.status(200).json(admins);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
