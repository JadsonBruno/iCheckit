import { IClientRepository } from "../../repositories/IClientRepository";

export class FindAllClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
    ) { }

    async execute() {
        return await this.clientRepository.findAll();
    }
}
