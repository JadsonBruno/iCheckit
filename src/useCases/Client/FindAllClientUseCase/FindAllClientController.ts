import { Request, Response } from "express";
import { FindAllClientUseCase } from "./FindAllClientUseCase";

export class FindAllClientController {
  constructor(
    private findAllClientUseCase: FindAllClientUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const admins = await this.findAllClientUseCase.execute();
  
      return response.status(200).json(admins);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
