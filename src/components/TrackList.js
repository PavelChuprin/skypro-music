import TracksAll from "./TracksAll";
import TrackFilter from "./TrackFilter";
import TrackSearch from "./TrackSearch";
import TrackTitle from "./TrackTitle";
import "../styles/TrackList.css";

const TrackList = ({ isLoading }) => {
  return (
    <div className="main__centerblock centerblock">
      <TrackSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <TrackFilter />
      <div className="centerblock__content">
        <TrackTitle />
        <TracksAll isLoading={isLoading} />
      </div>
    </div>
  );
};

export default TrackList;
