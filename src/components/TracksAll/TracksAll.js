import Track from "../Track/Track";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";

const TracksAll = ({
  isLoading,
  tracks,
  setVisibleAudioPlayer,
  getTracksError,
}) => {
  if (getTracksError) {
    return (
      <S.ContentPlaylist>
        <p>Не удалось загрузить плейлист, попробуйте позже. {getTracksError}</p>
      </S.ContentPlaylist>
    );
  } else {
    return (
      <S.ContentPlaylist>
        {isLoading
          ? [...new Array(10)].map((_, index) => <TrackSkeleton key={index} />)
          : tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                setVisibleAudioPlayer={setVisibleAudioPlayer}
              />
            ))}
      </S.ContentPlaylist>
    );
  }
};

export default TracksAll;
