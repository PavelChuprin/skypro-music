import { tracks } from "../../tracks.data";
import Track from "../Track/Track";
import * as S from "./styles";

const TracksAll = ({ isLoading }) => {
  return (
    <S.ContentPlaylist>
      {tracks.length ? (
        tracks.map((track) => (
          <Track key={track.id} track={track} isLoading={isLoading} />
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.ContentPlaylist>
  );
};

export default TracksAll;
