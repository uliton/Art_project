import { Route, Routes, useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Tools } from './components/Tools';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationModal';
import { useState } from 'react';

// import { ArtistsPage } from './pages/ArtistsPage';
// import { Artworks } from './pages/Artworks/Artworks';
// import Checkout from './pages/Checkout';
// import Favorites from './pages/Favorites';
// import IndividualArtistPage from './pages/IndividualArtistPage';
// import ArtWorkPage from './pages/ArtworkPage';
// import IndividualArtwork from './components/IndividualArtwork';

// import PageNotFound from './pages/PageNotFound';


export const App = () => {
  // const navigate = useNavigate();
  // const modal = () => {
  //   navigate('/');
  // }

  return (
    <>
      <Header />

      {/* <Tools /> */}

      <main>
        <Routes>
          {/* <Route path="/" element={<Artworks />} /> */}
          {/* <Route path="artworks" element={<Artworks />} /> */}
          {/* <Route path="artworks/:filter" element={<Artworks />} /> */}

          {/* <Route path="artists" element={<ArtistsPage />} /> */}

          {/* <Route path="checkout" element={<Checkout />} /> */}

          {/* <Route path="favourites" element={<Favorites />} /> */}

          {/* <Route path="artist/:artistId" element={<IndividualArtistPage />}/> */}

          {/* <Route path="artwork/:artworkName" element={<ArtWorkPage />} /> */}

          {/* <Route path="*" element={<PageNotFound />} /> */}


          {/* <Route path="/register" element={<RegistrationModal modalType="register" setModal={modal} />}/> */}
          {/* <Route path="/login" element={<LoginModal modalType="login" setModal={modal} />}/> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
};
