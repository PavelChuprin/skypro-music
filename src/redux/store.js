import { configureStore } from "@reduxjs/toolkit";
import audioplayer from "./slices/playerSlice";

export const store = configureStore({
  reducer: {
    audioplayer,
  },
});
