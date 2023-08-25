import React from "react";
import AudioPlayerControls from "../AudioPlayerControls/AudioPlayerControls";
import AudioPlayerTrack from "../AudioPlayerTrack/AudioPlayerTrack";
import AudioPlayerVolume from "../AudioPlayerVolume/AudioPlayerVolume";
import * as S from "./styles";
import { timer } from "../../utils/timer";

const AudioPlayer = ({ currentTrack, setVisibleAudioPlayer }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [volume, setVolume] = React.useState(50);
  const [isRepeat, setIsRepeat] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const handlePlayingAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
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

  const handleNextPrev = () => {
    alert("Еще не реализовано");
  };

  const handleShuffle = () => {
    alert("Еще не реализовано");
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
      ></audio>
      <S.BarContent>
        <S.Timer>
          <span>{timer(currentTime)} / </span>
          <span>{timer(duration)}</span>
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
              handleNextPrev={handleNextPrev}
              handleShuffle={handleShuffle}
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
