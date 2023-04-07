import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TopBanner from './TopBanner';
import MovieList from './movie/MovieList';
import Podcast from './Podcast';

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<TopBanner />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/podcast" element={<Podcast />} />
    </Routes>
  </main>
);

export default Main;
