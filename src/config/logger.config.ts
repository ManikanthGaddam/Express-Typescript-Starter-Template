import winston from "winston";
import { getCorrelationId } from "../utils/helpers/correlationid.helper";


const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format:"YYYY-MM-DD HH-mm-ss"}),
        winston.format.json(),
        winston.format.printf(({level,message,timestamp,...data}) => {
            const output = {
                level,
                message,
                timestamp,
                correlationId : getCorrelationId(),
                data
            };
            return JSON.stringify(output)
        })
    ),
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({filename: "logs/app.log"})
    ]
})

export default logger;