import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Importing our component
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=6ada626d';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. The Fetch Logic (The "Apps Script" equivalent)
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  // 2. The Trigger (Runs once when the app opens)
  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      <h1>Movie Search Tool</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;