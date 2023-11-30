import { Injectable } from "@nestjs/common";
import { User } from "./models/user.model";
import { InjectModel } from "@nestjs/sequelize";


@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly repository: typeof User
  ) {}

  async create(userDto: Partial<User>): Promise<User> {
    return await this.repository.create({
      username: userDto.username,
      email: userDto.email,
    }, {fields: ['username', 'email']});
  }

  async findByPK(userID: number): Promise<User | null> {
    return await this.repository.findByPk(userID);
  }

  async delete(userID: number): Promise<number> {
    return await this.repository.destroy({
      where: {
        id: userID,
      },
    });
  }
}
