import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log("movies listed ",movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return <MovieCard 
        key={index} 
        data={movie} 
        />;
      })
    ) : (
      <div className="error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (<div className="movies-wrapper">
<div className="movie-list">
  <h2>Movies</h2>
  <div className="movie-container">
    {renderMovies}
  </div>
</div>
  </div>)

};

export default MovieListing;