import React from 'react';
import './Search.scss';
import { SearchIcon } from '../SearchIcon';

export const Search: React.FC = () => {
  const test = () => {
    alert('cucu');
  }
  return (
    <form action="" onSubmit={test} className="search">
      <button
        className="search__button"
        type="submit"
      >
        <SearchIcon color='grey' />
      </button>
      
      <input
        className="search__input"
        type="text"
        placeholder="Search..."
      />
    </form>
  );
};
