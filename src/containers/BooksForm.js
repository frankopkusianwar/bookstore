import React from 'react';
import { createBook } from '../actions/index'

class BookForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      title: e.target.title,
      category: e.target.category,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const book = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      category: this.state.category,
    }
    createBook(book)
  }

  render() {
    return (
      <form>
        <input placeholder="Book Title" type="text" id="title" name="title" onChange={this.handleChange}/>
        <select id="category" name="category">
          <option>Action</option>
          <option>Biography</option>
          <option>History</option>
          <option>Horror</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>Sci-Fi</option>
        </select>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book))
  }
})

const BookFormConnected = connect(null, mapDispatchToProps)(BookForm);

export default BookFormConnected;
