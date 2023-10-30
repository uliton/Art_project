import React, { useEffect, useState } from 'react';
import './Artists.scss';
import { getAllArtists } from '../../api/artists';

export const Artists: React.FC = () => {
  const [allArtists, setAllArtists] = useState<Artist[] | []>([]);

  useEffect(() => {
    getAllArtists().then(res => {
      setAllArtists(res.results);
    })
  }, []);

  console.log(allArtists);

    return (
      <div className='container'>
        <div className='grid-container'>
        {allArtists.map(artist => (
          <div key={artist.id} className='grid-item'>
            <div className="artist">
              <a href={`artist/${artist.id}`} className="artist__linkImg">
                {/* problem with img */}
                <img className='artist__img' src={"https://placehold.co/600x400" || artist.image} alt="" />
              </a>
              <a href="#/" className="artist__link">
                <p className="artist__name">{artist.fullname}</p>
                <p className="artist__info">{artist.bio}</p>
              </a>
            </div>
          </div>
        ))}
        </div>
       
      </div>
    );
};
