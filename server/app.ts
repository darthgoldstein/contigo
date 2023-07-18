import express from 'express';
import path from 'path';

export const startApp = () => {
  const app = express();

  app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'web', 'index.html'));
  });

  app.listen(3000, () => {
    console.log('server operating');
  });
};
