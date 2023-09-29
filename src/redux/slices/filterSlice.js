import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  author: [],
  genre: [],
  years: "По умолчанию",
  filterPlaylist: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterAuthors: (state, action) => {
      state.author = action.payload;
    },
    setFilterGenres: (state, action) => {
      state.genre = action.payload;
    },
    setFilterYears: (state, action) => {
      state.years = action.payload;
    },
    setFilterPlaylist: (state, action) => {
      state.filterPlaylist = action.payload;
    },
  },
});

export const {
  setSearch,
  setFilterAuthors,
  setFilterGenres,
  setFilterYears,
  setFilterPlaylist,
} = filterSlice.actions;

export default filterSlice.reducer;
