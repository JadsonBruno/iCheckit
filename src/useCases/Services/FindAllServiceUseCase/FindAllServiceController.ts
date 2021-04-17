import { Request, Response } from "express";
import { FindAllServiceUseCase } from "./FindAllServiceUseCase";

export class FindAllClientController {
  constructor(
    private findAllServiceUseCase: FindAllServiceUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const admins = await this.findAllServiceUseCase.execute();
  
      return response.status(200).json(admins);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
