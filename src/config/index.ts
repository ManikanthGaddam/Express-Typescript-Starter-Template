import dotenv from 'dotenv';

type Serverconfig = {
    PORT:number
}

dotenv.config();

export const ServerConfig:Serverconfig = {
    PORT:Number(process.env.PORT) || 3001
}