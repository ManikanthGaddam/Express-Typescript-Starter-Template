import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app.error";

export const genericErrorHandler = (err:AppError,req:Request,res:Response,next:NextFunction) => {
    console.log(err);

    res.status(err.statusCode).json({
        message:err.message,
        success:false,
        name:err.name
    });
}