import React from 'react';
import './SearchBox.css'

const SearchBox = ({handleInputChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event)=> handleInputChange(event.target.value)
           } placeholder="Type some key words" className="search-input"></input>
        </div>
    );
    
};

export default SearchBox;