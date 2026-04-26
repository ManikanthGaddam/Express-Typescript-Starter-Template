import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"
import { AppError } from "../utils/app.error";

export const pingHandler = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const data = await fs.readFile("./src/sample1.txt", "utf-8");
        res.status(200).json({
            success:true,
            message:data
        });
    } catch (error) {
        const err : AppError = {
            statusCode : 500,
            message : "something went wrong",
            name:"internal server error"
        }
        throw err;
    }
}