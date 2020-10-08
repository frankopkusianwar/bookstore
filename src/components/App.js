import React from 'react';
import BooksList from '../containers/BookList'
import BooksForm from '../containers/BookForm'

const App = () => {
  return (
    <div id="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App
