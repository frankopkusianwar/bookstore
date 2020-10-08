import React from 'react';
import { connect } from 'react-redux'

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
            <tr>
              <td>book1</td>
              <td>book2</td>
              <td>book3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
