import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';
import inputReducer from './inputSlice';
import favoriteReducer from './favoriteSlice';
import addOrEditReducer from './addOrEditSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    input: inputReducer,
    favorite: favoriteReducer,
    addOrEdit: addOrEditReducer
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store;