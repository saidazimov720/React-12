import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/App.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState<any[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA',
        },
      };
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/account/21588823/watchlist/movies?language=en-US&page=1',
          options
        );
        setWatchlist(response.data.results);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="container">
      <h1>Your Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
