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
      title: 'The Hunger Games',
      category: 'Action',
    },
    {
      id: 'cOcZuOKHk',
      title: 'Dune',
      category: 'SCI-FI',
    },
    {
      id: 'cOcZoOKHf',
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
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
