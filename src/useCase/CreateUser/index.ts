import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository"
import { CreateUserController } from "./CrateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mongoUserRepository = new MongoUserRepository()

const createUserUseCase = new CreateUserUseCase(mongoUserRepository)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserUseCase, createUserController}