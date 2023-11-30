import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { User } from "./models/user.model";

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  createUser(userDto: Partial<User>): Promise<User> {
    return this.userRepository.create(userDto);
  }

  findUserByPK(userID: number): Promise<User | null> {
    return this.userRepository.findByPK(userID);
  }

  deleteUser(userID: number): Promise<number> {
    return this.userRepository.delete(userID);
  }
}
