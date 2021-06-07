import { Request, Response } from 'express';

function getCourses(req: Request, res: Response, u: string) {
  const result = require('./responses/courses.json');
  return res.json(result);
}

export default {
  'GET /api/tags': (req: Request, res: Response, u: string) =>
    res.json(require('./responses/tags.json')),
  'GET /api/tags/unique': (req: Request, res: Response, u: string) =>
    res.json(require('./responses/tagsUnique.json')),
};
