import React from 'react';

const BookForm = () => {
  return (
    <form>
      <input placeholder="Book Title" type="text"/>
      <select>
        <option>Action</option>
        <option>Biography</option>
        <option>History</option>
        <option>Horror</option>
        <option>Kids</option>
        <option>Learning</option>
        <option>Sci-Fi</option>
      </select> 
      <button type="submit">Submit</button>
    </form> 
  );
}

export default BookForm
