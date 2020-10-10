import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter'
import { removeBook, changeFilter } from '../actions/index';

const BooksList = ({ books, removeBook, filter, changeFilter  }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div id="table">
      <CategoryFilter filter={changeFilter}/>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter(book => (filter === 'All' ? true : book.category === filter))
            .map(book => (
                <Book book={book} key={book.id} removeBook={removeBook} />
            ))
          }
        </tbody>
      </table>
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
  changeFilter: (category) => { 
    dispatch(changeFilter(category)) 
  },
});

BooksList.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
  removeBook: propTypes.func.isRequired,
  changeFilter: propTypes.func.isRequired,
};

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
