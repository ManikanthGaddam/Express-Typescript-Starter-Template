import { Request, Response } from "express";

export const pingHandler = (req:Request,res:Response) => {
    console.log('inside controller');
    res.send('pong');
}