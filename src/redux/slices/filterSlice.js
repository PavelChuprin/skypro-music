import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  author: [],
  genre: [],
  years: "По умолчанию",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterAuthor: (state, action) => {
      state.author = action.payload;
    },
    setFilterGenre: (state, action) => {
      state.genre = action.payload;
    },
    setFilterYears: (state, action) => {
      state.years = action.payload;
    },
  },
});

export const { setSearch, setFilterAuthor, setFilterGenre, setFilterYears } =
  filterSlice.actions;

export default filterSlice.reducer;
