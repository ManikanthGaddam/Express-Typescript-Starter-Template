import { NextFunction, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { asyncLocalStorage } from "../utils/helpers/correlationid.helper";

export const attachCorrelationId = (req:Request, res:Response,next:NextFunction) => {
    const correlationId = uuidV4();

    req.headers['x-correlation-id'] = correlationId;

    asyncLocalStorage.run({correlationId: correlationId},()=>{
        next();
    })
}