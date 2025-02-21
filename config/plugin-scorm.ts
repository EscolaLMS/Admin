import { IApi } from 'umi';

export default (api: IApi) => {
  api.addBeforeMiddlewares(() => [
    (req, res, next) => {
      if (req.url.startsWith('/courses/scorms/preview/__scorm__/')) {
        res.statusCode = 404;
        res.end('Not found (blocked by scormIntercept plugin)');
        return;
      }
      next();
    },
  ]);
};
