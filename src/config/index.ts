import dotenv from 'dotenv';

type Serverconfig = {
    PORT:number
}

function loadEnv() {
    dotenv.config();
    console.log('Env loaded');
}

loadEnv();

export const ServerConfig:Serverconfig = {
    PORT:Number(process.env.PORT) || 3001
}