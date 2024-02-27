'use client';

import classes from './searchBar.module.css';
export default function SearchBar() {
    const handleSearch = (event) => {
      const value = event.target.value.toLowerCase();
      const items = document.querySelectorAll('.search-item'); 
      items.forEach(item => {
        const isVisible = item.textContent.toLowerCase().includes(value);
        item.style.display = isVisible ? 'block' : 'none';
      });
    };
  
    return (
      <div className={classes.main}>
        <input className={classes.searchInput}
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    );
  }
  
  