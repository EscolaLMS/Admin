import { Request, Response } from 'express';

export default {
  'GET /api/courses': (req: Request, res: Response, u: string) =>
    res.json(require('./responses/courses.json')),
};
