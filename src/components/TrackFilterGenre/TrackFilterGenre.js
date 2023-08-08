import * as S from "./styles";

const TrackFilterGenre = ({ tracks }) => {
  return (
    <S.FilterUlGenre>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.genre}</S.FilterLi>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlGenre>
  );
};

export default TrackFilterGenre;
