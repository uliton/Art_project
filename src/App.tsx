import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Tools } from './components/Tools';

import { ArtistsPage } from './pages/ArtistsPage';
import { Artworks } from './pages/Artworks/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import IndividualArtistPage from './pages/IndividualArtistPage';
import ArtWorkPage from './pages/ArtworkPage';
// import IndividualArtwork from './components/IndividualArtwork';

import PageNotFound from './pages/PageNotFound';

export const App = () => {
  return (
    <>
      <Header />

      <Tools />

      {/* <main>
        <div>
          <Routes>
            <Route path="/" element={<Artworks />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path="artworks/:filter" element={<Artworks />} />

            <Route path="artists" element={<ArtistsPage />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="favourites" element={<Favorites />} />

            <Route path="artist/:artistId" element={<IndividualArtistPage />}/>

            <Route path="artwork/:artworkName" element={<ArtWorkPage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main> */}

      {/* <Footer /> */}
    </>
  );
};
