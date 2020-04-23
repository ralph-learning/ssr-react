import express from  'express';
import { readFileSync } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server'

import { App } from '../client/App.jsx';

const app = new express();

const data = {
  questions: [{
    id: 'q1',
    content: 'What is your name?'
  }],
  answers: [{
    id: 'a1',
    questionId: 'q1',
    content: 'My name is Ralph',
    upvotes: 2
  }, {
    id: 'a2',
    questionId: 'q1',
    content: 'My name is John',
    upvotes: 0
  }]
}

app.use(express.static('dist'));

app.get('/data', async (_req, res) => {
  res.json(data);
});

app.get('/', async (_req, res) => {
  const index = readFileSync('public/index.html', 'utf8');
  const rendered = renderToString(<App questions={data.questions} answers={data.answers} />);

  res.send(index.replace('{{rendered}}', rendered));
});

app.listen(3000);
console.info('server running!');

