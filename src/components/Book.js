import React from 'react';
import propTypes from 'prop-types';
import sixtyfour from '../assets/sixtyfour.PNG'

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div>
      <small>{ book.category }</small>
      <h3>{ book.title }</h3>
      <small>Suzanne Collins</small>
      <button type="submit" className="remove" onClick={() => removeBook(book)}>Remove Book</button>
      <div>
        <small>Comments</small>
        <small>Remove</small>
        <small>Edit</small>
      </div>
    </div>
    <div>
      <img src={sixtyfour} alt="percentage"/>
      <div>
        <p>64%</p>
        <small>Completed</small>
      </div>
    </div>
    <div>
      <p>CURRENT CHAPTER</p>
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
