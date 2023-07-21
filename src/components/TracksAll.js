import { tracks } from "../tracks.data";
import "../styles/TracksAll.css";
import Track from "./Track";

const TracksAll = ({ isLoading }) => {
  return (
    <div className="content__playlist playlist">
      {tracks.length ? (
        tracks.map((track) => (
          <Track key={track.id} track={track} isLoading={isLoading} />
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </div>
  );
};

export default TracksAll;
