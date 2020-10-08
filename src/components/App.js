import React from 'react';
import BooksList from '../containers/BookList'
import BooksForm from '../containers/BookForm'

const App = () => {
  return (
    <div id="App">
      <h1>BOOK STORE</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App
