import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../interfaces/movies";

const API = './api/db.json';

export const fetchMovies = createAsyncThunk(
  'movies',
  async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data.movies;
  }
)

export interface MovieState {
  movies: Movie[];
}

export const initialState: MovieState = {
  movies: [],
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie:Movie = action.payload;
      state.movies = [newMovie, ...state.movies];
    },

    removeMovie:(state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },

    updateMovie: (state, action) => {
      const updatedMovie: Movie = action.payload;
      state.movies = state.movies.map(movie =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      );
    },  

  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    })
  }
})

export const {
  addMovie,
  removeMovie,
  updateMovie
} = movieSlice.actions;

export default movieSlice.reducer;