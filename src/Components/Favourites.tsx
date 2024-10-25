import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/App.css';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI2NTI1OTM3YzM5MjY2MmI1NmYyOGFhNmRjZTQ0ZSIsIm5iZiI6MTcyOTc0ODY5NC4yODU1NDMsInN1YiI6IjY3MTlkMzA1Yzc4MDJjYzUwMzU5YzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dYiqsbwVY-IRKkofcOADhGTveYnRJlg45iIXSNJdlfA',
        },
      };
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/account/21588823/favorite/movies?language=en-US&page=1&sort_by=created_at.asc',
          options
        );
        setFavorites(response.data.results);
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="container">
      <h1>Your Favorite Movies</h1>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
