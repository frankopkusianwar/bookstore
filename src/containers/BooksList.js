import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
              books.map(book => (
                <Book book={book} key={book.id} removeBook={handleRemoveBook} />
              ))
            }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

BooksList.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
  removeBook: propTypes.func.isRequired,
};

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
