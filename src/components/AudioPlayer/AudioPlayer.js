import AudioPlayerControls from "../AudioPlayerControls/AudioPlayerControls";
import AudioPlayerTrack from "../AudioPlayerTrack/AudioPlayerTrack";
import AudioPlayerVolume from "../AudioPlayerVolume/AudioPlayerVolume";
import * as S from "./styles";

const AudioPlayer = ({ isLoading, currentTrack, setVisibleAudioPlayer }) => {
  return (
    <S.Bar>
      <S.BarContent>
        <audio controls preload="none" src={currentTrack.track_file}></audio>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <AudioPlayerControls />
            <AudioPlayerTrack
              isLoading={isLoading}
              currentTrack={currentTrack}
            />
          </S.BarPlayer>
          <AudioPlayerVolume setVisibleAudioPlayer={setVisibleAudioPlayer} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};

export default AudioPlayer;
