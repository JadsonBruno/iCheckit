import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateAdminController {
    constructor(
        private createClientUseCase: CreateClientUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password, corporateName } = request.body;

        try {
            await this.createClientUseCase.execute({
                email,
                password,
                corporateName
            })

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}
