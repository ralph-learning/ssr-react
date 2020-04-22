const express = require('express');
const app = new express();

app.get('/', (_req, res) => {
  res.send(`<h1>React!</h1>`);
});

app.listen(3000);
console.info('server running!');

