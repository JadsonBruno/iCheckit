import { IClientRepository } from "../../repositories/IClientRepository";
import { IDeleteClientRequestDTO } from "./DeleteClientDTO";

export class DeleteClientUseCase {
    constructor(
        private adminsRepository: IClientRepository,
    ) { }

    async execute(data: IDeleteClientRequestDTO) {
        await this.adminsRepository.deleteUser(data.id);
    }
}
