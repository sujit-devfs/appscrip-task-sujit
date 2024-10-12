import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ isFilterVisible, setFilterVisible, filters, setFilters }) => {
  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });
  };

  return (
    <>
      <div className="filter-section">
        <button onClick={toggleFilter} className="filter-toggle">Toggle Filter</button>
        <select className="sort-dropdown">
          <option>Recommended</option>
          <option>Newest First</option>
          <option>Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {isFilterVisible && (
        <aside className="filter-sidebar">
          <div className="filter-group">
            <h3>Ideal For</h3>
            <label>
              <input type="checkbox" name="men" checked={filters.men} onChange={handleFilterChange} />
              Men
            </label>
            <label>
              <input type="checkbox" name="women" checked={filters.women} onChange={handleFilterChange} />
              Women
            </label>
            <label>
              <input type="checkbox" name="kids" checked={filters.kids} onChange={handleFilterChange} />
              Baby & Kids
            </label>
            <button className="unselect-all">Unselect All</button>
          </div>
          {/* Other filters go here */}
        </aside>
      )}
    </>
  );
};

export default Filter;
