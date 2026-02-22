import React from 'react';
import '../Styles/searchBar.css';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
  return (
   <div className='search-container'>
      <div className='search-card'>
        {/* Box 1: Search Input */}
        <div className='field-box search-box-main'>
          <span className="search-icon"><SearchIcon /></span>
          <input 
            type="text" 
            placeholder='Search courses, instructors...' 
            className='search-input'
          />
        </div>

        {/* Box 2: Placeholder Filter */}
        <div className='field-box filter-placeholder small' ></div>

        {/* Box 3: Placeholder Filter */}
        <div className='field-box filter-placeholder large'></div>
      </div>
    </div>
  );
}

export default SearchBar;


