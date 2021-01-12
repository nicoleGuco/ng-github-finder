import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/icons/search.svg';
import Users from './Users.jsx';

function SearchInput({ users, searchValue, inputChageHandler }) {
  return (
    <div className="search-input">
      <div className="search-input__bar">
        <img className="search-input__icon" src={searchIcon} alt="search-icon" />
        <input className="search-input__input" type="text" placeholder="search for github users by username" value={searchValue} onChange={inputChageHandler} />
      </div>
      <Users users={users} />
    </div>
  );
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  inputChageHandler: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
  })),
};

SearchInput.defaultProps = {
  users: null,
};

export default SearchInput;
