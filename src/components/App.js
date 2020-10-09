import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div id="App">
    <h1>BOOK STORE</h1>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
