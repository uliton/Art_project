import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./pages/MainLayout";
import { Artworks } from "./pages/Artworks/Artworks";
import { Artists } from "./pages/Artists";
import { Artwork } from "./components/Artwork";
import { PageNotFound } from "./pages/PageNotFound";

// import IndividualArtistPage from './pages/IndividualArtistPage';
// import ArtWorkPage from './pages/ArtworkPage';
import IndividualArtwork from './pages/IndividualArtwork';



export const App = () => {
  return (
    <>
      {/* <Tools /> */}

      <main>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Artworks index={true} />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path="artworks/:id" element={<IndividualArtwork />} />
            <Route path='artists' element={<Artists />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>

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
