import React from 'react';
import img from './user_icon.png';

import './Artwork.scss';
import { Link } from 'react-router-dom';

type Props = {
  dataArt: Data,
}

export const Artwork: React.FC<Props> = ({ dataArt }) => {
  return (
    <div className='artwork'>
      <Link to='' className='artwork__img'>
        <img
          src={dataArt.image}
          // src={dataArt.image.placeholder}
          // data-src={dataArt.image.origin}
          alt="Опис зображення"
          loading="lazy"
        />
      </Link>

      <Link to='' className="artwork__artist">
        <img
          src={img}
          alt="img"
          className='artwork__artist__img'
        />

        <p className="artwork__artist__text">
          {dataArt.artist}
        </p>
      </Link>
    </div>
  );
};
