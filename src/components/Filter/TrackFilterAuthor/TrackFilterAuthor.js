import * as S from "./styles";
import { useGetAllTracksQuery } from "../../../services/tracks";
import { useDispatch } from "react-redux";
import React from "react";
import { setFilterAuthors } from "../../../redux/slices/filterSlice";

const TrackFilterAuthor = ({ filtersState, setOpenFilter }) => {
  const { data, isLoading } = useGetAllTracksQuery();
  const dispatch = useDispatch();

  const arrayAuthors = [...new Set(data && data.map((track) => track.author))];

  const handleClickAddAuthor = (author) => {
    const newArrayAuthors = [...filtersState.author, author];
    dispatch(setFilterAuthors(newArrayAuthors));
    setOpenFilter(false);
  };
  const handleClickDeleteAuthor = (author) => {
    const newArrayAuthors = [...filtersState.author];
    const authorIndex = newArrayAuthors.indexOf(author);
    newArrayAuthors.splice(authorIndex, 1);
    const updateFilters = [...newArrayAuthors];
    dispatch(setFilterAuthors(updateFilters));
    setOpenFilter(false);
  };
  return (
    <S.FilterUlAuthor>
      {isLoading ? (
        <p>Загружаем ...</p>
      ) : data ? (
        arrayAuthors.map((author, index) => (
          <div key={index}>
            {filtersState.author.includes(author) ? (
              <S.FilterLiActive onClick={() => handleClickDeleteAuthor(author)}>
                {author}
              </S.FilterLiActive>
            ) : (
              <S.FilterLi onClick={() => handleClickAddAuthor(author)}>
                {author}
              </S.FilterLi>
            )}
          </div>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </S.FilterUlAuthor>
  );
};

export default TrackFilterAuthor;
