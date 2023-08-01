import React from 'react';
import { Link } from 'react-router-dom';

import './DefaultFilters.scss';

export const DefaultFilters: React.FC = () => {
  const colorsArr = (): number[] => {
    const arr = [];
    for (let i = 0; i < 16; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className='defaultFilters'>
      <div className="defaultFilters__color defaultFilters__section">
        <h3 className='defaultFilters__color__title'>
          Color
        </h3>

        <ul className="defaultFilters__color__list">
          {colorsArr().map(color => (
            <li
              key={color}
              className="defaultFilters__color__item"
            >
              <Link
                to={`/colors:${color}`}
                className="defaultFilters__color__link"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="defaultFilters__orientation defaultFilters__section">
        <h3 className='defaultFilters__orientation__title'>
          Orientation
        </h3>

        <div className="defaultFilters__orientation__list">
          <Link
            to='/artworks/horizontal'
            className="defaultFilters__orientation__link defaultFilters__orientation__link--horizontal"
          />
          <Link
            to='/artworks/vertical'
            className="defaultFilters__orientation__link defaultFilters__orientation__link--vertical"
          />
          <Link
            to='/artworks/square'
            className="defaultFilters__orientation__link defaultFilters__orientation__link--square"
          />
        </div>
      </div>

      <div className="defaultFilters__category defaultFilters__section">
        <h3 className='defaultFilters__category__title'>
          Category
        </h3>

        <div className="defaultFilters__category__list">
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            All
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Painting
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Photography
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Sculpture
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Prints
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Work on paper
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Design
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Graphic design
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Collages
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__category__link"
          >
            Illustration
          </Link>
        </div>
      </div>

      <div className="defaultFilters__region defaultFilters__section">
        <h3 className='defaultFilters__region__title'>
          Artist from
        </h3>

        <div className="defaultFilters__region__list">
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            All
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Belgium
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Canada
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Croatia
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Germany
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Ireland
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            The Netherlands
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            Ukraine
          </Link>
          <Link
            to='/artworks'
            className="defaultFilters__region__link"
          >
            United States
          </Link>
          
        </div>
      </div>

      <div className="defaultFilters__price defaultFilters__section">
        <h3 className='defaultFilters__price__title'>
          Price
        </h3>
        
        <div className="defaultFilters__price__limits">
          <input
            type="text"
            className='defaultFilters__price__limits__input defaultFilters__price__limits__input--min'
            placeholder='Min ($)'
          />
          {'-'}
          <input
            type="text"
            className='defaultFilters__price__limits__input defaultFilters__price__limits__input--max'
            placeholder='Max ($)'
          />
        </div>

        <div className="defaultFilters__price__list">
          <Link
            to='/price:-500'
            className='defaultFilters__price__link'
          >
            Under $500</Link>
          <Link
            to='/price:500-1000'
            className='defaultFilters__price__link'
          >
            $500 - $1.000</Link>
          <Link
            to='/price:1000-2000'
            className='defaultFilters__price__link'
          >
            $1.000 - $2.000</Link>
          <Link
            to='/price:2000-5000'
            className='defaultFilters__price__link'
          >
            $2.000 - $5.000</Link>
          <Link
            to='/price:5000-10000'
            className='defaultFilters__price__link'
          >
            $5.000 - $10.000</Link>
          <Link
            to='/price:10000-'
            className='defaultFilters__price__link'
          >
            Over $10.000</Link>
        </div>
      </div>
    </div>
  );
};
