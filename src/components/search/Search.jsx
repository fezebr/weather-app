import React from 'react';
import './search.css'

const Search = ({search,query,setQuery}) => {
     return (
          <div className="search-box">
               <input
                    placeholder="search"
                    type="text"
                    className="search-bar"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
               />
          </div>
     );
}

export default Search;
