import React, { useEffect, useState } from "react";
import DATA from "../../DATA.json";
import DATA_test from "../../DATA_test.json";
import { Artwork } from "../../components/Artwork";
import { useParams } from "react-router-dom";
import './Artworks.scss';
import Masonry from 'react-masonry-css';
import { Tools } from "../../components/Tools";
import { getAllArtworks } from "../../api/artworks";


type Props = {
  index?: boolean,
}

export const Artworks: React.FC<Props> = ({ index }) => {
  const [allArtworks, setAllArtworks] = useState<ArtWork[] | []>([])
  const { filter } = useParams();

  useEffect(() => {
    getAllArtworks().then(res => {
      setAllArtworks(res.results);
    });
    
  }, []);
  
  console.log(allArtworks);

  const breakpointColumnsObj = {
    default: 5,
    1280: 4,
    1024: 3,
    768: 2,
  };

  return (
    <div className="artworks container">
      {/* <Tools /> */}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allArtworks.length > 0 && allArtworks.map((artwork) => (
          <React.Fragment key={artwork.id}>
            <Artwork
              artwork={artwork}
              index={index}
            />
          </React.Fragment>
        ))}
      </Masonry>
    </div>
  );
};
