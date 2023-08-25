import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playing: false,
  playlist: [],
  track: null,
  shuffle: false,
  shufflePlaylist: [],
};

const playerSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.track = action.payload;
      state.playing = false;
    },
    setIsPlaying(state) {
      state.playing = !state.playing;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload;
    },
    setIsShuffle(state) {
      state.shuffle = !state.shuffle;
    },
  },
});

export const { setCurrentTrack, setIsPlaying, setPlaylist, setIsShuffle } =
  playerSlice.actions;

export default playerSlice.reducer;
