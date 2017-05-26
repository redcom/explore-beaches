import express from 'express';

const Router = express.Router();

export const testPost = (req, res) => {
  res.json({
    test: 'ok',
  });
};

const ApiV1 = () => {
  Router.post('/test', testPost);

  return Router;
};

export default ApiV1();
