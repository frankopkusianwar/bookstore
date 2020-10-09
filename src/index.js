import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Ngugi Wa Thiongo',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Biological Science',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Romeo and Juliet',
      category: 'Learning',
    },
  ],
};

const store = createStore(
  rootReducer, initialState,
);
console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
