import express from  'express';
const app = new express();

app.get('/', async (_req, res) => {
  res.send(`<h1>React!</h1>`);
});

app.listen(3000);
console.info('server running!');

