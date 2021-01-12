import React from 'react';
import searchIcon from '../assets/icons/search.svg';

function SearchInput() {
  return (
    <div className="search-input">
      <input className="search-input__input" type="text" placeholder="serch for github users" />
      <img className="search-input__icon" src={searchIcon} alt="search-icon" />
    </div>
  );
}
export default SearchInput;
