import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: 'cOcZoYKHk',
      title: 'Ngugi Wa Thiongo',
      category: 'Learning',
    },
    {
      id: 'cOcZuOKHk',
      title: 'Biological Science',
      category: 'Learning',
    },
    {
      id: 'cOcZoOKHf',
      title: 'Romeo and Juliet',
      category: 'Learning',
    },
  ],
};

const store = createStore(
  rootReducer, initialState,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
