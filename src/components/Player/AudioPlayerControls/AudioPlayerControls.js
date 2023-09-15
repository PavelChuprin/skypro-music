import * as S from "./styles";
import React from "react";

const AudioPlayerControls = ({
  handlePlayingAudio,
  isPlaying,
  handleRepeat,
  isRepeat,
  handlePrevTrack,
  handleNextTrack,
  handleShuffle,
  isShuffle,
}) => {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev className="_btn">
        <S.PlayerBtnPrevSvg onClick={handlePrevTrack} alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay onClick={handlePlayingAudio} className="_btn">
        <S.PlayerBtnPlaySvg alt="play">
          <use
            xlinkHref={`img/icon/sprite.svg#icon-${
              isPlaying ? "pause" : "play"
            }`}
          ></use>
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext className="_btn">
        <S.PlayerBtnNextSvg onClick={handleNextTrack} alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat
        onClick={handleRepeat}
        className={isRepeat ? "_btn-icon-active" : "_btn-icon"}
      >
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle
        onClick={handleShuffle}
        className={isShuffle ? "_btn-icon-active" : "_btn-icon"}
      >
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
};

export default AudioPlayerControls;
