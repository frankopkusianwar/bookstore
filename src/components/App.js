import React from 'react';
import Header from '../components/Header'
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import profile from '../assets/profile.PNG'

const App = () => (
  <div id="App">
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
