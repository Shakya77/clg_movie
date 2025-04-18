import React, { useState } from 'react';
import Card from '../card/Card';
import useFetchMovies from '../services/fetchData';

const Home = ({ searchTerm }) => {
  const [favorites, setFavorites] = useState([]);
  const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const { data: movieData, isLoading } = useFetchMovies(url)
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=e6d9d2b0d6c4e1e5c6a5d1c0c2b1d3a4&language=en-US&page=1&query=${searchTerm}&sort_by=popularity.desc`;
  const { data: searchData } = useFetchMovies(urlSearch);

  const handleFavorite = (movie) => {
    let updatedFavorites;
    const isMovieFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isMovieFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id); // remove from favorites
    } else {
      updatedFavorites = [...favorites, movie]; // add to favorites
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  if (isLoading) {
    return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className='display-card'>
      {!searchTerm ? (
        movieData.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            id={movie.id}
            content={movie.overview}
            genre={movie.release_date}
            addFavourite={() => handleFavorite(movie)}
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        ))
      ) : (
        searchData.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            id={movie.id}
            content={movie.overview}
            genre={movie.release_date}
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        ))
      )}
    </div>
  );
};

export default Home;
