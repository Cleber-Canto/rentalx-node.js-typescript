/* eslint-disable prettier/prettier */
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "@modules/accounts/entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, password, email, driver_license, id, avatar }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, password, email, driver_license, id, avatar });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async updatePassword(id: string, password: string): Promise<void> {
    await this.repository.createQueryBuilder().update(User).set({ password }).where("id = :id", { id }).execute();
  }
}

export { UsersRepository };