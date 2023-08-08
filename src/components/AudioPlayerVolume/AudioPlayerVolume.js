import * as S from "./styles";

const AudioPlayerVolume = ({ setVisibleAudioPlayer }) => {
  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress className="_btn">
          <S.VolumeProgressLine
            className="_btn"
            type="range"
            name="range"
          ></S.VolumeProgressLine>
        </S.VolumeProgress>
      </S.VolumeContent>
      <S.ClosePlayer
        onClick={() => setVisibleAudioPlayer(false)}
        className="_btn"
      >
        ✖
      </S.ClosePlayer>
    </S.BarVolumeBlock>
  );
};

export default AudioPlayerVolume;
