import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  console.log('hello source map')
  return (<h1>Hello world</h1>)
}

ReactDOM.render(<App />, document.getElementById('root'));

