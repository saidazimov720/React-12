import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA',
        },
      };
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const addToFavorites = async (movieId: number) => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA',
      },
      data: {
        media_type: 'movie',
        media_id: movieId,
        favorite: true,
      },
    };

    try {
      const response = await axios.post(
        'https://api.themoviedb.org/3/account/21588823/favorite',
        options
      );
      console.log('Added to favorites:', response.data);
    } catch (error) {
      console.error('Error adding to favorites:', error);
    }
  };

  const addToWatchlist = async (movieId: number) => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA',
      },
      data: {
        media_type: 'movie',
        media_id: movieId,
        watchlist: true,
      },
    };

    try {
      const response = await axios.post(
        'https://api.themoviedb.org/3/account/21588823/watchlist',
        options
      );
      console.log('Added to watchlist:', response.data);
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="button-group">
          <button onClick={() => addToFavorites(movie.id)}>Add to Favorites</button>
          <button onClick={() => addToWatchlist(movie.id)}>Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
