import AudioPlayerControls from "../AudioPlayerControls/AudioPlayerControls";
import AudioPlayerTrack from "../AudioPlayerTrack/AudioPlayerTrack";
import AudioPlayerVolume from "../AudioPlayerVolume/AudioPlayerVolume";
import * as S from "./styles";

const AudioPlayer = ({ isLoading }) => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls />
            <AudioPlayerTrack isLoading={isLoading} />
          </S.BarPlayer>
          <AudioPlayerVolume />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};

export default AudioPlayer;
