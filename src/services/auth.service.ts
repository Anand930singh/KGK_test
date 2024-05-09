import { Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRegistrationDto } from "../dtos/sigup.dto";
import bcrypt from "bcryptjs";
import { LoginUserDto } from "../dtos/login.dto";
import jwt from 'jsonwebtoken';
import { Response } from "express";
import { AppSataSource } from "../config/db";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const JWTSECRET= process.env.JWTScret

export class AuthService {
  private static userRepository: Repository<User>

  static async signUp(body: UserRegistrationDto): Promise<any> {
    const myDataSource = AppSataSource;
    const userRepository = myDataSource.getRepository(User)
    const user = userRepository.create(body)
    return userRepository.save(user);
  }

  static async signIn(body: LoginUserDto, res:Response): Promise<any> {
    if (!body) {
      return {
        status: 400,
        data: {
          message: "Request body is undefined",
        },
      };
    }
    const myDataSource = AppSataSource;
    const user = await myDataSource.getRepository(User).findOne({ where: { email: body.email } });
    if (user) {
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (isMatch) {
        const token = jwt.sign({ "user":user.user, "email":user.email }, JWTSECRET||"kisuydhigwyfejwsh", { expiresIn: '1h' });
        res.cookie("token",token,{maxAge:20000, httpOnly:true})
        return {
          status: 200,
          data: {
            message: "Login Successful",
            token:token,
          },
        };
      }
      else {
        return {
          status: 400,
          data: {
            message: "Wrong Password",
          },
        };
      }
    }
    else {
      return {
        status: 400,
        data: {
          message: "User not found",
        },
      };
    }
  }

}