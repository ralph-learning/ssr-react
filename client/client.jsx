import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { handlerModifyAnswerVotes } from '../shared/utility';

let state = undefined;
fetch('http://localhost:3000/data')
  .then(data => data.json())
  .then(json => {
    state = json;
    render();
  });

function handleVote(answerId, increase) {
  state.answers = handlerModifyAnswerVotes(state.answers, answerId, increase);

  fetch(`/vote/${answerId}?increase=${increase}`);

  render();
}

function render() {
  ReactDOM.hydrate(<App {...state} handlerModifyAnswerVotes={handleVote} />, document.getElementById('root'));
}

