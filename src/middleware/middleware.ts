//all the middlewares are written in this file

import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";

//this middleware is used to log HTTP method, URL and current time
export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

//this middleware is used to check whether user is logged in or not
export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["token"]
    if (token) {
        next();
    } else {
        return res.status(401).json({ message: "Unauthorized - Please log in first" });
    }
};

