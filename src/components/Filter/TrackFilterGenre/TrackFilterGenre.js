import * as S from "./styles";
import { useGetAllTracksQuery } from "../../../services/tracks";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilterGenres } from "../../../redux/slices/filterSlice";

const TrackFilterGenre = ({ filtersState, setOpenFilter }) => {
  const { data, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();

  const arrayGenres = [...new Set(data && data.map((track) => track.genre))];

  const handleClickAddGenre = (genre) => {
    const newArrayGenres = [...filtersState.genre, genre];
    dispatch(setFilterGenres(newArrayGenres));
    setOpenFilter(false);
  };
  const handleClickDeleteGenre = (genre) => {
    const newArrayGenres = [...filtersState.genre];
    const genreIndex = newArrayGenres.indexOf(genre);
    newArrayGenres.splice(genreIndex, 1);
    const updateFilters = [...newArrayGenres];
    dispatch(setFilterGenres(updateFilters));
    setOpenFilter(false);
  };

  return (
    <S.FilterUlGenre>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        arrayGenres.map((genre, index) => (
          <div key={index}>
            {filtersState.genre.includes(genre) ? (
              <S.FilterLiActive onClick={() => handleClickDeleteGenre(genre)}>
                {genre}
              </S.FilterLiActive>
            ) : (
              <S.FilterLi onClick={() => handleClickAddGenre(genre)}>
                {genre}
              </S.FilterLi>
            )}
          </div>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlGenre>
  );
};

export default TrackFilterGenre;
