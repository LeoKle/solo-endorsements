import { Request, Response } from 'express';

import config from '../config';


export function getFrontendConfig(req: Request, res: Response) {
  res.json(config().frontendSettings);
}

export default {
  getFrontendConfig,
};
