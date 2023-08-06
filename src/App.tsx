import { Route, Routes} from 'react-router-dom';


// import { ArtistsPage } from './pages/ArtistsPage';
import { Artworks } from './pages/Artworks/Artworks';
import { MainLayout } from './pages/MainLayout';
import { Artwork } from './components/Artwork';
import { Artists } from './components/Artists';
// import Checkout from './pages/Checkout';
// import Favorites from './pages/Favorites';
// import IndividualArtistPage from './pages/IndividualArtistPage';
// import ArtWorkPage from './pages/ArtworkPage';
// import IndividualArtwork from './components/IndividualArtwork';

import PageNotFound from './pages/PageNotFound';


export const App = () => {
  return (
    <>
      {/* <Tools /> */}

      <main>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Artworks />} />
            <Route path='artworks' element={<Artworks />} />
            {/* <Route path='artists' element={<Artists />} /> */}
            
            <Route path="*" element={<PageNotFound />} />
          </Route>


          
          {/* <Route path="artworks/:filter" element={<Artworks />} /> */}
          {/* <Route path="checkout" element={<Checkout />} /> */}
          {/* <Route path="favourites" element={<Favorites />} /> */}
          {/* <Route path="artist/:artistId" element={<IndividualArtistPage />}/> */}
          {/* <Route path="artwork/:artworkName" element={<ArtWorkPage />} /> */}
          {/* <Route path="/register" element={<RegistrationModal modalType="register" setModal={modal} />}/> */}
          {/* <Route path="/login" element={<LoginModal modalType="login" setModal={modal} />}/> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
};
