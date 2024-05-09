import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DataSource } from "typeorm";
import { UserRegistrationDto } from "./dtos/sigup.dto";
import { AuthService } from "./services/auth.service";
import { LoginUserDto } from "./dtos/login.dto";
import { connectDB } from "./config/db";
import { loggingMiddleware, verifyUser } from "./middleware/middleware";


const app = express();
const PORT = 3000;

//all middlewares are called here
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(loggingMiddleware);


//routes//

//signup
app.post('/auth/signup', async (req, res) => {
    const userData: UserRegistrationDto = req.body;
    const newUSer = await AuthService.signUp(userData);
    res.json(newUSer);
})

//signin
app.post('/auth/signin', async (req, res) => {
    const userData: LoginUserDto = req.body;
    const newUser = await AuthService.signIn(userData, res)
    res.json(newUser);
})

//signout
app.get('/auth/signout', verifyUser, async (req, res) => {
    const msg = await AuthService.signout(res)
    res.json(msg);
})

//dashboard
app.get('/dashboard', verifyUser, async (req, res) => {
    res.json("hello from dashboard")
})


app.listen(PORT, async () => {
    //connecting with database
    await connectDB();
    console.log(`Application running on ${PORT}`);
});

export {app}