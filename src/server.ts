import express from "express";
import { ServerConfig } from "./config/index";
import router from "./routers/ping.router";


const app = express();

app.use(router);

app.listen(ServerConfig.PORT, ()=>{
    console.log('Server running on :',ServerConfig.PORT);
})