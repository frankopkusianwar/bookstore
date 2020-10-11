import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td><button type="submit" className="remove" onClick={() => removeBook(book)}>Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
  removeBook: propTypes.func.isRequired,
};

export default Book;
