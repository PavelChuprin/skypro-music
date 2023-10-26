import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playing: false,
  playlist: [],
  track: null,
  shuffle: false,
  shufflePlaylist: [],
  visiblePlayer: false,
};

const playerSlice = createSlice({
  name: "audioplayer",
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
    setVisiblePlayer(state, action) {
      state.visiblePlayer = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  setPlaylist,
  setIsShuffle,
  setVisiblePlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
