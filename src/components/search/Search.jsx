import React from 'react';
import './search.css'

const Search = () => {
     return (
          <div className="search-box">
               <input
                    placeholder="search"
                    type="text"
                    className="search-bar"
               />
          </div>
     );
}

export default Search;
