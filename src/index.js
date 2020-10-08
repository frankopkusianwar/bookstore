import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld() {
  return (
    <div>
      <div>
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root'),
);
