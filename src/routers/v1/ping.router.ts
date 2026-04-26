import express from 'express';
import { pingHandler, pingHandler2 } from '../../controllers/ping.controller';
import { validationRequestBody } from '../../validators/index';
import { requestBodySchema } from '../../validators/ping.schema';

const pingRouter = express.Router();

pingRouter.get('/ping',pingHandler);
pingRouter.get('/ping2',pingHandler2);

export default pingRouter;