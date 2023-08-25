import * as S from "./styles";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsPlaying, setCurrentTrack } from "../../redux/slices/playerSlice";

const AudioPlayerVolume = ({ setVisibleAudioPlayer, setVolume, volume }) => {
  const dispatch = useDispatch();

  const handleClosePlayer = () => {
    setVisibleAudioPlayer(false);
    dispatch(setCurrentTrack(null));
    dispatch(setIsPlaying(false));
  };
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg
            onClick={() => setVolume((value) => (value > 0 ? 0 : 100))}
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
      <S.ClosePlayer onClick={handleClosePlayer} className="_btn">
        ⨯
      </S.ClosePlayer>
    </S.BarVolumeBlock>
  );
};

export default AudioPlayerVolume;
