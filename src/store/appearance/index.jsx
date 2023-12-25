import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: {
    primary: "#000",
    secondary: "#16181c",
    third: "#273340",
  },
  color: {
    primary: "#1d9bf0",
    secondary: "#8ecdf8",
  },
  fonstSize: 16,
};

const appearance = createSlice(
  {
    name: "appearance",
    initialState,
    reducers: {
      // state manüpile etme metodları.
      _setBackgroundColor: (state, action) => {
        state.backgroundColor = action.payload;
      },
      _setColor: (state, action) => {
        state.color = action.color;
      },
    },
    _setColor: (state, action) => {
      state.color = action.color;
    },
  },
  {
    _setFontSize: (state, action) => {
      state.fonstSize = action.color;
    },
  }
);

export const { _setBackgroundColor, _setColor, _setFontSize } =
  appearance.actions;
export default appearance.reducer;
