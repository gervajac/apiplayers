import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("soy el log");
    res.send("DESDE MIDDLEWARE");
    next();
}

export {logMiddleware}