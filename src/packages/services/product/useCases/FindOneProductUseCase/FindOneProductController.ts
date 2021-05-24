import { Request, Response } from "express";
import { FindOneProductUseCase } from "./FindOneProductUseCase";

export class FindOneClientController {
  constructor(
    private findOneClientUseCase: FindOneProductUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const product = await this.findOneClientUseCase.execute({
        id
      });

      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
