import * as S from "./styles";

const TrackFilterAuthor = ({ tracks }) => {
  return (
    <S.FilterUlAuthor>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.author}</S.FilterLi>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlAuthor>
  );
};

export default TrackFilterAuthor;
