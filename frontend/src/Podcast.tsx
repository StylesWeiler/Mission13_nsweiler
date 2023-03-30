import React from 'react';
import { Link } from 'react-router-dom';

export default function Podcast() {
  return (
    <>
      <div className="nav">
        <Link to="/" style={{ color: '#8e3c1d' }}>
          Home
        </Link>
        <Link to="/movies" style={{ color: '#8e3c1d' }}>
          Movie Collection
        </Link>
      </div>
      <h1>Podcasts Page</h1>
      <p style={{ color: '#8e3c1d' }}>Click the link:</p>
      <a href="https://www.baconsale.com" style={{ color: '#8e3c1d' }}>
        🥓Podcast🥓
      </a>
    </>
  );
}
