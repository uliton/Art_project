import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import DATA from '../../DATA.json';

import './Tools.scss';
import { FilterIcon } from '../../ui/FilterIcon/FilterIcon';
import { Filters } from '../Filters';
import { Link } from 'react-router-dom';

export const Tools: React.FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>(['All media']);
  const [selectedCategory, setSelectedCategory] = useState<string>(allCategories[0]);
  const [filtersIsOpen, setFiltersIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const categories: string[] = [];
    DATA.forEach((item: Data) => {
      if (!categories.includes(item.medium)) {
        categories.push(item.medium);
      }
    });
    setAllCategories([...allCategories, ...categories]);
  }, []);

  const handlAddFilter = () => {
    setFiltersIsOpen(true);
  }

  const handlChooseCategory = (category: string) => {
    setSelectedCategory(category);
  }

  return (
    <div className='tools container'>
      <Filters
        filtersStatus = {filtersIsOpen}
        filtersCloser = {setFiltersIsOpen}
      />

      <button
        type='button'
        className='tools__button'
        onClick={handlAddFilter}
      >
        <FilterIcon />
        Filters
      </button>

      {/* <div className="tools__category category">
        <ul className='category__list'>
          {allCategories.length && allCategories.map((category, i) => (
              <li
                key={i}
                className={classNames('category__item', {
                  'category__item--active': selectedCategory === category,
                })}
                onClick={() => handlChooseCategory(category)}
              >
                <Link
                  to={category === allCategories[0] ? 'artworks/' : `artworks/${category.toLowerCase()}/`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {category}
                </Link>
              </li>
            )
          )}
        </ul>
      </div> */}
    </div>
  );
};