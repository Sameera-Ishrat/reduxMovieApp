import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

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

    let renderShows = "";
    renderShows = shows.Response === "True" ? (
     shows.Search.map((movie , index) => {
      return <MovieCard 
      key={index} 
      data = {movie} />
     })

    ) : (<div className = "error"> {shows.Error}</div>)

   
  return (<div className="movies-wrapper">
<div className="movie-list">
  <h2>Movies</h2>
  <div className="movie-container">
    {renderMovies}
  </div>
</div>
<div className="show-list">
  <h2>Shows</h2>
  <div className="movie-container">
    {renderShows}
  </div>
</div>
  </div>)

};

export default MovieListing;
