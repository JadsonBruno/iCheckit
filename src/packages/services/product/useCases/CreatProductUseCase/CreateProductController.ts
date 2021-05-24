import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name, value } = request.body;

    try {
      await this.createProductUseCase.execute({
        description,
        name,
        value
      })

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
