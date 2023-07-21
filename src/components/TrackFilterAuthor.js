import { tracks } from "../tracks.data";

const TrackFilterAuthor = () => {
  return (
    <ul className="filter__ul author">
      {tracks.length ? (
        tracks.map((track) => (
          <li key={track.id} className="filter__li">
            {track.author}
          </li>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </ul>
  );
};

export default TrackFilterAuthor;
