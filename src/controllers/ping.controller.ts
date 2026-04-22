import { Request, Response } from "express";
import fs from "fs/promises"

export const pingHandler = async(req:Request,res:Response) => {
    try {
        const data = await fs.readFile("./src/sample.txt", "utf-8");
        res.status(200).json({
            success:true,
            message:data
        });
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            success:false
        });
    }
}