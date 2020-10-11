import React from 'react';
import propTypes from 'prop-types';
import sixtyfour from '../assets/sixtyfour.PNG'

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div>
      <small className="category1">{ book.category }</small>
      <h3 className="book-tt">{ book.title }</h3>
      <small className="author">Suzanne Collins</small>
      <div className="buttons">
        <a href="#">Comments</a>
        <a href="#" className="remove" onClick={() => removeBook(book)}>Remove</a>
        <a href="#">Edit</a>
      </div>
    </div>
    <div className="percent">
      <div><img src={sixtyfour} alt="percentage"/></div>
      <div className="percent-text">
        <small>64%</small>
        <p>Completed</p>
      </div>
    </div>
    <div className="chapter">
      <small>CURRENT CHAPTER</small>
      <p>Chapter 17</p>
      <button type='subit'>UPDATE PROGRESS</button>
    </div>
  </div>
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
