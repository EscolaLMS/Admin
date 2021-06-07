import { Request, Response } from 'express';

export default {
  'GET /api/categories/tree': (req: Request, res: Response, u: string) =>
    res.json(require('./responses/categoriesTree.json')),
  'GET /api/categories': (req: Request, res: Response, u: string) =>
    res.json(require('./responses/categoriesTree.json')),
};
