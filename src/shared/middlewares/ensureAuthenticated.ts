/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/appError";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { UserTokensRepository } from "@modules/accounts/repositories/implementations/UserTokensRepository";
import { authItems } from "@config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing!", 401);
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(token, authItems.secretToken) as IPayload;

    request.user = {
      id: user_id
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}