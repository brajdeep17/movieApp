import { createSlice } from "@reduxjs/toolkit";

const movieIdSlice = createSlice({
  name: "movieId",
  initialState: {
    id: null,
  },
  reducers: {
    changeMovieId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { changeMovieId } = movieIdSlice.actions;

export default movieIdSlice.reducer;
