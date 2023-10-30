import React from 'react';
import img from './user_icon.png';

import './Artwork.scss';
import { Link } from 'react-router-dom';
import { UnknownUserIcon } from '../../ui/UnknownUserIcon';

type Props = {
  artwork: ArtWork,
  index?: boolean,
}

export const Artwork: React.FC<Props> = ({ artwork, index }) => {
  return (
    <div className='artwork'>
      <Link to={index ? `artworks/${artwork.id}` : `${artwork.id}`} className='artwork__img'>
        <img
          src={artwork.image_url}
          // src={dataArt.image.placeholder}
          // data-src={dataArt.image.origin}
          alt="Опис зображення"
          loading="lazy"
        />
      </Link>

      <Link
        to={`/cabinet/artist/${artwork.artist.id}`}
        className="artwork__artist"
      >
        <UnknownUserIcon />

        <p className="artwork__artist__text">
          {artwork.title}
        </p>
      </Link>
    </div>
  );
};
