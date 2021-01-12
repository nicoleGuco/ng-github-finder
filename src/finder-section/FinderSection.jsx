import React from 'react';
import githubLogo from '../assets/logos/GitHub-Mark-120px-plus.png';
import SearchInput from './SearchInput.jsx';

function FinderSection() {
  return (
    <section className="finder-section">
      <div className="finder-section__title">
        Github User Finder
        <img className="finder-section__title__logo" src={githubLogo} alt="github logo" />
      </div>
      <SearchInput />
    </section>
  );
}
export default FinderSection;
