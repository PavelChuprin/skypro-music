import * as S from "./styles";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setIsPlaying,
  setCurrentTrack,
  setVisiblePlayer,
} from "../../../redux/slices/playerSlice";

const AudioPlayerVolume = ({ setVolume, volume }) => {
  const dispatch = useDispatch();

  const handleClosePlayer = () => {
    dispatch(setVisiblePlayer(false));
    dispatch(setCurrentTrack(null));
    dispatch(setIsPlaying(false));
  };

  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg
            onClick={() => setVolume((value) => (value > 0 ? 0 : 50))}
            alt="volume"
          >
            <use
              xlinkHref={
                volume === 0
                  ? "img/icon/sprite.svg#icon-sound-off"
                  : "img/icon/sprite.svg#icon-sound-on"
              }
            ></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress className="_btn">
          <S.VolumeProgressLine
            className="_btn"
            type="range"
            name="range"
            value={volume}
            $color="#D9D9D9"
            onChange={(e) => setVolume(e.target.value)}
          ></S.VolumeProgressLine>
        </S.VolumeProgress>
      </S.VolumeContent>
      <S.CloseSvg onClick={handleClosePlayer} className="_btn">
        <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
      </S.CloseSvg>
    </S.BarVolumeBlock>
  );
};

export default AudioPlayerVolume;
