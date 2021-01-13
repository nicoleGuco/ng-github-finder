import React from 'react';
import PropTypes from 'prop-types';
import usersPropType from '../utils/userPropType.js';
import searchIcon from '../assets/icons/search.svg';
import closeIcon from '../assets/icons/close.svg';
import Users from './Users.jsx';

function SearchInput({
  users, searchValue, inputChageHandler, closeIconOnClickHandler,
}) {
  return (
    <div className="search-input">
      <div className="search-input__bar">
        <img className="search-input__icon" src={searchIcon} alt="search-icon" />
        <input className="search-input__input" type="text" placeholder="search for github users by username" value={searchValue} onChange={inputChageHandler} />
        <button type="button" className="search-input__close-btn" onClick={closeIconOnClickHandler}>
          <img className="search-input__close-icon" src={closeIcon} alt="close-icon" />
        </button>
      </div>
      <Users users={users} />
    </div>
  );
}

SearchInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  inputChageHandler: PropTypes.func.isRequired,
  closeIconOnClickHandler: PropTypes.func.isRequired,
  users: usersPropType,
};

SearchInput.defaultProps = {
  users: null,
};

export default SearchInput;
