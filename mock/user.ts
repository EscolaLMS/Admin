import { Request, Response } from 'express';

export default {
  'POST /api/auth/login': (req: Request, res: Response) =>
    res.json(require('./responses/login.json')),
  'GET /api/profile/me': (req: Request, res: Response) =>
    res.json(require('./responses/profileMe.json')),
};
