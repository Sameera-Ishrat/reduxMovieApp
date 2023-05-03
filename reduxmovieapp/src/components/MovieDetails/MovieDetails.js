import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { fetchAsyncMovieOrShowDetail} from '../../features/movies/movieSlice';
//import { useLocation } from 'react-router-dom';
// import {useParams} from "react-router";
import {useParams} from "react-router";
const MovieDetails = () => {
  const {imdbID} = useParams();

  // let imdbID = useLocation().pathname.slice(8)
  console.log(imdbID,"imdbID")
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.selectMovieOrShow);

  console.log("moviesorshows",data)
  useEffect(() => {
dispatch(fetchAsyncMovieOrShowDetail(imdbID))
  },[dispatch,imdbID])
  return (
    <div style={{fontSize:"2rem", color:"#fff"}}>
     MovieDetails
    </div>
  )
}

export default MovieDetails