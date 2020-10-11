import React from 'react';
import propTypes from 'prop-types';

const CategoryFilter = ({ filter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilter = ({ target }) => {
    filter(target.value);
  };

  return (
    <div>
      <select name="category" onChange={handleFilter}>
        <option value="All" key="All">
          All
        </option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: propTypes.func.isRequired,
};

export default CategoryFilter;
