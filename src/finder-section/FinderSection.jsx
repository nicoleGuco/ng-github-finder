import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import githubLogo from '../assets/logos/GitHub-Mark-120px-plus.png';
import SearchInput from './SearchInput.jsx';

function FinderSection() {
  const octokit = new Octokit();
  const [users, setUsers] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const closeFinderSection = () => {
    setSearchValue('');
    setUsers(null);
    setIsOpen(false);
  };

  const closeIconOnClickHandler = () => {
    closeFinderSection();
  };

  const inputChageHandler = async (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchValue && searchValue.length) {
        const queryString = `${searchValue} in:login`;
        const { data } = await octokit.request('GET /search/users', {
          q: queryString,
          per_page: 10,
        });
        setUsers(data.items);
        setIsOpen(true);
      }
    }, 700);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  useEffect(() => {
    const onClick = (event) => {
      const searchInput = document.getElementsByClassName('search-input')[0];
      if (!searchInput) return;
      const targetInSearchInput = searchInput.contains(event.target);
      const targetIsSearchInput = searchInput === event.target;
      if (targetInSearchInput || targetIsSearchInput) return;

      closeFinderSection();
    };

    window.addEventListener('click', onClick, false);

    return () => window.removeEventListener('click', onClick, false);
  }, []);

  return (
    <section className={`finder-section ${isOpen ? 'finder-section--open' : ''}`}>
      <img className="finder-section__title__logo" src={githubLogo} alt="github logo" />
      <div className="finder-section__title">
        GitHub User Finder
      </div>
      <SearchInput
        searchValue={searchValue}
        inputChageHandler={inputChageHandler}
        closeIconOnClickHandler={closeIconOnClickHandler}
        users={users}
      />
    </section>
  );
}
export default FinderSection;
