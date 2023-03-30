import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from './MovieData.json';

const movieData = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(movieData);

  const cellStyle = {
    color: '#8e3c1d', // Set the background color to bacon color
  };

  return (
    <>
      <div className="nav">
        <Link to="/" style={{ color: '#8e3c1d' }}>
          Home
        </Link>
        <Link to="/podcast" style={{ color: '#8e3c1d' }}>
          Podcasts
        </Link>
      </div>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th style={cellStyle}>Title</th>
              <th style={cellStyle}>Year</th>
              <th style={cellStyle}>Director</th>
              <th style={cellStyle}>Rating</th>
              <th style={cellStyle}>Category</th>
              <th style={cellStyle}>Edited</th>
            </tr>
          </thead>
          <tbody className="words">
            {listOfMovies.map((m) => (
              <tr>
                <td style={cellStyle}>{m.Title}</td>
                <td style={cellStyle}>{m.Year}</td>
                <td style={cellStyle}>{m.Director}</td>
                <td style={cellStyle}>{m.Rating}</td>
                <td style={cellStyle}>{m.Category}</td>
                {m.Edited ? (
                  <td style={cellStyle}>{m.Edited}</td>
                ) : (
                  <td style={cellStyle}>No</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={cellStyle}>Boo!</p>
      </div>
    </>
  );
}

export default MovieList;
