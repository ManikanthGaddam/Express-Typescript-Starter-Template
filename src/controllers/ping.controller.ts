import { NextFunction, Request, Response } from "express";
import fs from "fs/promises"
import { AppError, BadRequest, InternalServerError } from "../utils/app.error";

export const pingHandler = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const data = await fs.readFile("./src/sample1.txt", "utf-8");
        res.status(200).json({
            success:true,
            message:data
        });
    } catch (error) {
        throw new InternalServerError("something went wrong");
    }
}

export const pingHandler2 = async(req:Request,res:Response,next:NextFunction) => {
    try {   
        const data = await fs.readFile("./src/sample1.txt", "utf-8");
        res.status(200).json({
            success:true,
            message:data
        });
    } catch (error) {
        throw new BadRequest("Request not valid");
    }
}