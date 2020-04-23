import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';

let state = undefined;
fetch('http://localhost:3000/data')
  .then(data => data.json())
  .then(json => {
    state = json;
    render();
  })

function handlerModifyAnswerVotes(answerId, increase) {
  state.answers = state.answers.map(answer => {
    if(answer.id !== answerId) {
      return answer;
    } else {
      return {
        ...answer, upvotes: answer.upvotes + increase
      };
    }
  });

  render();
}

function render() {
  ReactDOM.hydrate(<App {...state} handlerModifyAnswerVotes={handlerModifyAnswerVotes} />, document.getElementById('root'));
}

