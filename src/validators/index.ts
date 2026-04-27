import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import logger from "../config/logger.config";

export const validationRequestBody = (schema : z.ZodTypeAny) => {
        return async (req:Request,res:Response,next:NextFunction) => {

                await schema.parseAsync(req.body);
                logger.info('Request body is valid');
                next();
        }
}