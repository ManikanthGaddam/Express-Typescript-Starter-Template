import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validationRequestBody = (schema : z.ZodTypeAny) => {
        return async (req:Request,res:Response,next:NextFunction) => {
            try {
                await schema.parseAsync(req.body);
                console.log('Request body is valid');
                next();
            } catch (error) {
                res.status(400).json({
                    message:"Bad request"
                });
            }
        }
}