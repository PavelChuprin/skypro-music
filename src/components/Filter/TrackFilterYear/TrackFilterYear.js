import React from "react";
import { useGetAllTracksQuery } from "../../../services/tracks";
import * as S from "./styles";

const TrackFilterYear = () => {
  const { data, isLoading } = useGetAllTracksQuery();
  const [filter, setFilter] = React.useState("По умолчанию");

  function handleFilter(state) {
    if (state === filter) {
      setFilter();
    } else {
      setFilter(state);
    }
  }

  return (
    <S.FilterUlYear>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        <>
          <S.FilterLi onClick={() => handleFilter("По умолчанию")}>
            По умолчанию
          </S.FilterLi>
          <S.FilterLi onClick={() => handleFilter("Сначала старые")}>
            Сначала старые
          </S.FilterLi>
          <S.FilterLi onClick={() => handleFilter("Сначала новые")}>
            Сначала новые
          </S.FilterLi>
        </>
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlYear>
  );
};

export default TrackFilterYear;
