import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entity/Client";

export class PostgresClientRepository implements IClientRepository {
    private users: Client[] = [];

    async findByEmail(email: string): Promise<Client> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: Client): Promise<Client> {
        this.users.push(user);

        return user;
    }

    async deleteUser(id: string): Promise<void> {
        const index = this.users.findIndex(user => user.id === id);

        if (index === -1) {
            throw new Error('User not found.');
        }

        this.users.splice(index, 1);
    }

    async findAll(): Promise<Client[]> {
        return this.users;
    }

    async updateUser(id: string, user: Client): Promise<Client> {
        const index = this.users.findIndex(user => user.id === id);

        if (index === -1) {
            throw new Error('User not found.');
        }

        const actualUser = this.users[index];

        this.users[index] = {
            ...actualUser,
            ...user
        };

        return this.users[index];
    }
}
