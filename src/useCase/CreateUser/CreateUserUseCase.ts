import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRquestDTO } from "./CrateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUsersRepository
    ){}

    async execute(data:ICreateUserRquestDTO){
       const userAlreadyExists = await this.userRepository.findByEmail(data.email)

       if(userAlreadyExists){
        throw new Error('User already exists')
       }
       const user = new User(data)
       await  this.userRepository.save(user)
    }
}