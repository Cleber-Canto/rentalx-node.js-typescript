/* eslint-disable prettier/prettier */
import { container } from "tsyringe";
import "@shared/lib/container";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/repositories/implementations/CarsRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImageRepository";
import { CarsImagesRepository } from "@modules/cars/repositories/implementations/CarsImagesRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { RentalsRepository } from "@modules/rentals/repositories/implementations/RentalsRepository";
import { IUserTokensRepository } from "@modules/accounts/repositories/IUserTokensRepository";
import { UserTokensRepository } from "@modules/accounts/repositories/implementations/UserTokensRepository";

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", CarsImagesRepository);
container.registerSingleton<IRentalsRepository>("RentalsRepository", RentalsRepository);
container.registerSingleton<IUserTokensRepository>("UserTokensRepository", UserTokensRepository);