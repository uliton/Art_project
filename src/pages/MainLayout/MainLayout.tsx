import React from 'react';
import { Header } from '../../components/Header';
import { Outlet, useParams } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  const { url } = useParams();
  // console.log(url);

  return (
    <>
      <Header url={url} />

      <Outlet />

      {/* Footer */}
    </>
  );
};
