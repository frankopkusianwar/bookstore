import React from 'react';

const BookForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
  return(
    <form>
      <input placeholder="Book Title" type="text" />
      <select>
        { categories.map(category => (
            <option key={category}>{ category }</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default BookForm;
