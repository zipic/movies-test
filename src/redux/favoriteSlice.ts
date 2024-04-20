import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../interfaces/movies";

export interface FavoriteMoviesState {
  favoriteMovies: Movie[]
}

export const initialState: FavoriteMoviesState = {
  favoriteMovies: []
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state: FavoriteMoviesState, action: PayloadAction<Movie>) => {
      const existingId = state.favoriteMovies.findIndex(movie => movie.id === action.payload.id);
      if (existingId !== -1) {
        state.favoriteMovies.splice(existingId, 1);
      } else {
        state.favoriteMovies.push(action.payload);
      }
    }
  }
})

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
