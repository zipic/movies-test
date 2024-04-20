import { createSlice } from "@reduxjs/toolkit";

export interface AddOrEditState {
  isAdd: boolean;
  isEdit: boolean;
  id: number;
}

export const initialState: AddOrEditState = {
  isAdd: false,
  isEdit: false,
  id: 0
}

export const addOrEditSlice = createSlice({
  name: 'addOrEdit',
  initialState,
  reducers: {
    setAdd: (state, action) => {
      state.isAdd = action.payload;
      state.isEdit = false;
    },

    setEdit: (state, action) => {
      state.isEdit = action.payload;
      state.isAdd = false;
    },

    setMovieId: (state, action) => {
      state.id = action.payload;
    }
  }
});

export const { 
  setAdd, 
  setEdit,
  setMovieId 
} = addOrEditSlice.actions;

export default addOrEditSlice.reducer;