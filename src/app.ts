import express from 'express';

const app = express();

app.get('/test', (_, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
