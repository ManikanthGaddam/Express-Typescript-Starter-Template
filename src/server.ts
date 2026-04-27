import express, { urlencoded } from "express";
import { ServerConfig } from "./config/index";
import { attachCorrelationId } from "./middlewares/correlation.middleware";
import { genericErrorHandler } from "./middlewares/error.middleware";
import v1Router from "./routers/v1/v1Router";
import { validationRequestBody } from "./validators/index";
import { requestBodySchema } from "./validators/ping.schema";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(attachCorrelationId);

app.use('/api/v1',validationRequestBody(requestBodySchema),v1Router);

app.use(genericErrorHandler);

app.listen(ServerConfig.PORT, ()=>{
    console.log('Server running on :',ServerConfig.PORT);
})