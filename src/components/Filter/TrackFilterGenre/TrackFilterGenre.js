import * as S from "./styles";
import { useGetAllTracksQuery } from "../../../services/tracks";

const TrackFilterGenre = () => {
  const { data, isLoading } = useGetAllTracksQuery();

  return (
    <S.FilterUlGenre>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        data.map((track) => (
          <S.FilterLi key={track.id}>{track.genre}</S.FilterLi>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlGenre>
  );
};

export default TrackFilterGenre;
