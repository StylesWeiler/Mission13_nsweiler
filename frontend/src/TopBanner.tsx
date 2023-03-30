import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="nav">
        <Link to="/podcast" style={{ color: '#8e3c1d' }}>
          Podcasts
        </Link>
        <Link to="/movies" style={{ color: '#8e3c1d' }}>
          Movie Collection
        </Link>
      </div>
      <div>
        <h1>Welcome to Joel Hilton's Movie Site (now in React!)</h1>
      </div>
    </>
  );
}

export default TopBanner;
