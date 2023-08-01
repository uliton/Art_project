import React from "react";
import DATA from "../../DATA.json";
import DATA_test from "../../DATA_test.json";
import { Artwork } from "../../components/Artwork";
import { useParams } from "react-router-dom";
import './Artworks.scss';
import Masonry from 'react-masonry-css';

export const Artworks: React.FC = () => {
  const { filter } = useParams();

  const breakpointColumnsObj = {
    default: 5,
    1280: 4,
    1024: 3,
    768: 2,
  };

  return (
    <div className="artworks container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {DATA.map((dataArt) => (
          <React.Fragment key={dataArt.id}>
            <Artwork dataArt={dataArt} />
          </React.Fragment>
        ))}
      </Masonry>
    </div>
  );
};
