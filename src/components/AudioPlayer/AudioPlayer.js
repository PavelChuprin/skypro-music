import React from "react";
import AudioPlayerControls from "../AudioPlayerControls/AudioPlayerControls";
import AudioPlayerTrack from "../AudioPlayerTrack/AudioPlayerTrack";
import AudioPlayerVolume from "../AudioPlayerVolume/AudioPlayerVolume";
import * as S from "./styles";
import { timer } from "../../utils/timer";
import {
  setIsPlaying,
  setCurrentTrack,
  setIsShuffle,
} from "../../redux/slices/playerSlice";
import { useSelector, useDispatch } from "react-redux";

const AudioPlayer = ({ setVisibleAudioPlayer }) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [volume, setVolume] = React.useState(50);
  const [isRepeat, setIsRepeat] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef(null);

  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const currentPlaylist = useSelector((state) => state.audioplayer.playlist);
  const isShuffle = useSelector((state) => state.audioplayer.shuffle);
  const indexCurrentTrack = currentPlaylist.indexOf(currentTrack);

  React.useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlayingAudio = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const handleLoadStart = () => {
    const src = currentTrack.track_file;
    const audio = new Audio(src);
    audio.onloadedmetadata = function () {
      if (audio.readyState > 0) {
        setDuration(audio.duration);
      }
    };
  };

  const hundleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    setCurrentTime(currentTime);
  };

  const changeCurrentTime = (e) => {
    const currentTime = Number(e.target.value);
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  };

  const handleRepeat = () => {
    if (isRepeat) {
      audioRef.current.loop = false;
      setIsRepeat(false);
    } else {
      audioRef.current.loop = true;
      setIsRepeat(true);
    }
  };

  const handlePrevTrack = () => {
    if (indexCurrentTrack > 0) {
      const prevTrack = currentPlaylist[indexCurrentTrack - 1];
      dispatch(setCurrentTrack(prevTrack));
      if (isShuffle) {
        dispatch(setCurrentTrack(getRandomCurrentTrack()));
      }
    }
    dispatch(setIsPlaying(true));
  };

  const handleNextTrack = () => {
    if (indexCurrentTrack < currentPlaylist.length - 1) {
      const nextTrack = currentPlaylist[indexCurrentTrack + 1];
      dispatch(setCurrentTrack(nextTrack));
      if (isShuffle) {
        dispatch(setCurrentTrack(getRandomCurrentTrack()));
      }
    } else {
      dispatch(setCurrentTrack(0));
    }
    dispatch(setIsPlaying(true));
  };

  const handleShuffle = () => {
    dispatch(setIsShuffle(!isShuffle));
  };

  const getRandomCurrentTrack = () => {
    const indexRandomTrack = Math.floor(
      Math.random() * (currentPlaylist.length - 1)
    );
    return currentPlaylist[indexRandomTrack];
  };

  const trackEnding = () => {
    const nextTrack = currentPlaylist[indexCurrentTrack + 1];
    dispatch(setCurrentTrack(nextTrack));
    dispatch(setIsPlaying(true));
  };

  return (
    <S.Bar>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        controls
        autoPlay
        hidden
        onLoadStart={handleLoadStart}
        onTimeUpdate={hundleTimeUpdate}
        onEnded={trackEnding}
      ></audio>
      <S.BarContent>
        <S.Timer>
          <span>{timer(currentTime)}</span>/<span>{timer(duration)}</span>
        </S.Timer>
        <S.BarPlayerProgress
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={changeCurrentTime}
          $color="#D9D9D9"
        ></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls
              handlePlayingAudio={handlePlayingAudio}
              isPlaying={isPlaying}
              handleRepeat={handleRepeat}
              isRepeat={isRepeat}
              handlePrevTrack={handlePrevTrack}
              handleNextTrack={handleNextTrack}
              handleShuffle={handleShuffle}
              isShuffle={isShuffle}
            />
            <AudioPlayerTrack currentTrack={currentTrack} />
          </S.BarPlayer>
          <AudioPlayerVolume
            setVisibleAudioPlayer={setVisibleAudioPlayer}
            setVolume={setVolume}
            volume={volume}
          />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};

export default AudioPlayer;
