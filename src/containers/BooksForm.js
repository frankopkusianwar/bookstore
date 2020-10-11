import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import propTypes from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const book = {
      id: shortid.generate(),
      title,
      category,
    };
    if (title && category) {
      createBook(book);
    }
    e.target.reset();
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input placeholder="Book Title" type="text" id="title" name="title" onChange={this.handleChange} />
        <select name="category">
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BookForm.propTypes = {
  createBook: propTypes.func.isRequired,
};

const BookFormConnected = connect(null, mapDispatchToProps)(BookForm);

export default BookFormConnected;
