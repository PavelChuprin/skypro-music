import TracksAll from "../../Tracks/TracksAll/TracksAll";
import TrackFilter from "../../Filter/TrackFilter/TrackFilter";
import TrackSearch from "../../Tracks/TrackSearch/TrackSearch";
import TrackTitle from "../../Tracks/TrackTitle/TrackTitle";
import * as S from "./styles";

const TrackList = () => {
  return (
    <S.MainCenterblock>
      <TrackSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <TrackFilter />
      <S.CenterblockContent>
        <TrackTitle />
        <TracksAll />
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};

export default TrackList;
