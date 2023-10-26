import { configureStore } from "@reduxjs/toolkit";
import audioplayer from "./slices/playerSlice";
import favorites from "./slices/favoritesSlice";
import filter from "./slices/filterSlice";
import { apiTracks } from "../services/tracks";

export const store = configureStore({
  reducer: {
    audioplayer,
    favorites,
    filter,
    [apiTracks.reducerPath]: apiTracks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTracks.middleware),
});
