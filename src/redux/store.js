import { configureStore } from "@reduxjs/toolkit";
import audioplayer from "./slices/playerSlice";
import favorites from "./slices/favoritesSlice";
import { apiTracks } from "../services/tracks";

export const store = configureStore({
  reducer: {
    audioplayer,
    favorites,
    [apiTracks.reducerPath]: apiTracks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTracks.middleware),
});
