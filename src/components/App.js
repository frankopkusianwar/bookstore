import React from 'react';
import BooksList from '../containers/BookList'

export default class App extends React.Component {
  render(){
    return (
      <div id="App">
        <BooksList />
        <BooksForm />
      </div>
    );
  }
}
