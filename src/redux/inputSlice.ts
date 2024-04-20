import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputState {
  text: string;
}

const initialState: InputState = {
  text: ''
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { setText } = inputSlice.actions;

export default inputSlice.reducer;
