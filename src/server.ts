import express from "express";
import { ServerConfig } from "./config/index";
import v1Router from "./routers/v1/v1Router";


const app = express();

app.use('/api/v1',v1Router);

app.listen(ServerConfig.PORT, ()=>{
    console.log('Server running on :',ServerConfig.PORT);
})