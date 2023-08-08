import TracksAll from "../TracksAll/TracksAll";
import TrackFilter from "../TrackFilter/TrackFilter";
import TrackSearch from "../TrackSearch/TrackSearch";
import TrackTitle from "../TrackTitle/TrackTitle";
import * as S from "./styles";

const TrackList = ({
  isLoading,
  tracks,
  setCurrentTrack,
  setVisibleAudioPlayer,
  getTracksError,
}) => {
  return (
    <S.MainCenterblock>
      <TrackSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <TrackFilter tracks={tracks} />
      <S.CenterblockContent>
        <TrackTitle />
        <TracksAll
          isLoading={isLoading}
          tracks={tracks}
          setCurrentTrack={setCurrentTrack}
          setVisibleAudioPlayer={setVisibleAudioPlayer}
          getTracksError={getTracksError}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

export default TrackList;
