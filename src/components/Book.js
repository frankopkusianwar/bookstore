import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
  </tr>
);

Book.propTypes = {
  book: propTypes.objectOf(propTypes.book).isRequired,
};

export default Book;
