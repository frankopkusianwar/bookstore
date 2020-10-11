import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div className="bookList">
      <CategoryFilter filter={changeFilter} />
      {books
        .filter(book => (filter === 'All' ? true : book.category === filter))
        .map(book => (
          <Book book={book} key={book.id} removeBook={handleRemoveBook} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

BooksList.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
  removeBook: propTypes.func.isRequired,
  changeFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
