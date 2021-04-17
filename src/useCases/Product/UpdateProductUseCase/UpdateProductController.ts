import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(
    private updateProductUseCase: UpdateProductUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, name, value } = request.body;
    const { id } = request.params;

    try {
      await this.updateProductUseCase.execute({
        id,
        product: {
          description, name, value
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
