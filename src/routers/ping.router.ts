import express from 'express';
import { pingHandler } from '../controllers/ping.controller';

const router = express.Router();

router.get('/ping',pingHandler);

export default router;