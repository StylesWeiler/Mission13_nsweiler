import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { useEffect, useState } from 'react';
import '../styles.css';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // first scenario if there is no data then we are going to fetch it
      const response = await fetch('https://localhost:4000/movie');
      const temp = await response.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []); // second scenario we are just going to return an empty array

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
      <div className="row">
        <h1>Joel's Movies</h1>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody className="words">
          {movieData
            .filter((m) => m.edited === 'Yes')
            .map((m) => (
              <tr key={m.movieId}>
                <td>{m.category}</td>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
