import * as S from "./styles";

const TrackFilterYear = ({ tracks }) => {
  return (
    <S.FilterUlYear>
      {tracks.length ? (
        tracks.map((track) => (
          <S.FilterLi key={track.id}>{track.release_date}</S.FilterLi>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlYear>
  );
};

export default TrackFilterYear;
