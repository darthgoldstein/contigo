import express from 'express';

export const createApp = () => {
  const app = express();

  app.listen(3000, () => {
    console.log('server operating');
  });
};
