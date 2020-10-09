import React from 'react';
import propTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td><button type="submit" onSubmit={this.handleSubmit}>Submit</button></td>
  </tr>
);

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default Book;
