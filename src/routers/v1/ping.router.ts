import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import { validationRequestBody } from '../../validators/index';
import { requestBodySchema } from '../../validators/ping.schema';

const pingRouter = express.Router();

pingRouter.get('/ping',pingHandler);

export default pingRouter;