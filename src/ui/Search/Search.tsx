import React, { useState } from 'react';
import './Search.scss';
import { SearchIcon } from '../SearchIcon';

type Props = {
  handleCloseMenu?: () => void;
}

export const Search: React.FC<Props> = ({ handleCloseMenu }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (handleCloseMenu) {
      handleCloseMenu();
    }

    setSearchQuery('');
  }
  return (
    <form action="" onSubmit={submitForm} className="search">
      <button
        className="search__button"
        type="submit"
      >
        <SearchIcon color='grey' />
      </button>
      
      <input
        className="search__input"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }
        }
        placeholder="Search..."
      />
    </form>
  );
};
