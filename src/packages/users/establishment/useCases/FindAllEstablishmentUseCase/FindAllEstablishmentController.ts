import { Request, Response } from "express";
import { FindAllEstablishmentUseCase } from "./FindAllEstablishmentUseCase";

export class FindAllEstablishmentController {
  constructor(
    private findAllEstablishmentUseCase: FindAllEstablishmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const admins = await this.findAllEstablishmentUseCase.execute();
  
      return response.status(200).json(admins);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
