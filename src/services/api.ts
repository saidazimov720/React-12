import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular`, options);
};


export const fetchMovieDetails = (movieId: number) => {
  return axios.get(`${BASE_URL}/movie/${movieId}`, options);
};


export const addToFavorites = (movieId: number) => {
  return axios.post(
    `${BASE_URL}/account/21588823/favorite`,
    {
      media_type: 'movie',
      media_id: movieId,
      favorite: true,
    },
    options
  );
};

export const addToWatchlist = (movieId: number) => {
  return axios.post(
    `${BASE_URL}/account/21588823/watchlist`,
    {
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    },
    options
  );
};


export const fetchFavorites = () => {
  return axios.get(
    `${BASE_URL}/account/21588823/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
    options
  );
};


export const fetchWatchlist = () => {
  return axios.get(
    `${BASE_URL}/account/21588823/watchlist/movies?language=en-US&page=1`,
    options
  );
};
