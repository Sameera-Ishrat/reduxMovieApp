import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
    return response.data;
  }
);

const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addmovies: (state, { payload }) => {
    //   state.movies = payload;
    // }
},
    
    extraReducers : {
       [fetchAsyncMovies.pending]:() => {
        console.log("Request pending");
       },
       [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
      },
        
    }

});
//export const { addmovies } = movieSlice.actions;
export default movieSlice.reducer;
