import React from 'react';
import propTypes from 'prop-types';

const CategoryFilter = ({ changeFilter }) => {

  const handleFilter = ({ target }) => {
    changeFilter(target.value);
  };

  return (
    <form>
      <select name="category" onChange={handleFilter}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  )
}

CategoryFilter.propTypes = {
  changeFilter: propTypes.func.isRequired,
};

export default CategoryFilter;
