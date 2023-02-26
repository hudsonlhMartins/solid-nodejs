import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUserRepository implements IUsersRepository{

    private users: User[] =[]

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(item => item.email == email)
        return user
    }
}