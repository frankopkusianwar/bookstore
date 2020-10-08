import React from 'react';
import { connect } from 'react-redux'
import Book from '../components/Book'

export default class BooksList extends React.Component {
  render(){
    return (
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
            <Book />
          </tbody>
        </table>
      </div>
    );
  }
}
