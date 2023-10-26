import React from "react";
import { useGetAllTracksQuery } from "../../../services/tracks";
import * as S from "./styles";
import { setFilterYears } from "../../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const TrackFilterYear = ({ setOpenFilter, filtersState }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllTracksQuery();

  const handleFilter = (state) => {
    dispatch(setFilterYears(state));
    setOpenFilter(null);
  };

  return (
    <S.FilterUlYear>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        <>
          {filtersState.years === "По умолчанию" ? (
            <S.FilterLiActive>По умолчанию</S.FilterLiActive>
          ) : (
            <S.FilterLi onClick={() => handleFilter("По умолчанию")}>
              По умолчанию
            </S.FilterLi>
          )}
          {filtersState.years === "Сначала старые" ? (
            <S.FilterLiActive>Сначала старые</S.FilterLiActive>
          ) : (
            <S.FilterLi onClick={() => handleFilter("Сначала старые")}>
              Сначала старые
            </S.FilterLi>
          )}
          {filtersState.years === "Сначала новые" ? (
            <S.FilterLiActive>Сначала новые</S.FilterLiActive>
          ) : (
            <S.FilterLi onClick={() => handleFilter("Сначала новые")}>
              Сначала новые
            </S.FilterLi>
          )}
        </>
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlYear>
  );
};

export default TrackFilterYear;
