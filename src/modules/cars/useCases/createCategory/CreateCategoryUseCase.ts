/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new AppError("Category already exists", 400);
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };