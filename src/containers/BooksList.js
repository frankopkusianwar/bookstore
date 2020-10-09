import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
              <Book book={book} key={book.id} />
            ))
          }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
};

const BooksListConnected = connect(mapStateToProps)(BooksList);

export default BooksListConnected;
