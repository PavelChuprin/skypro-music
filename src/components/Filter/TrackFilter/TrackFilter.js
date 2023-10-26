import * as S from "./styles";
import { useState } from "react";
import TrackFilterAuthor from "../../Filter/TrackFilterAuthor/TrackFilterAuthor";
import TrackFilterYear from "../../Filter/TrackFilterYear/TrackFilterYear";
import TrackFilterGenre from "../../Filter/TrackFilterGenre/TrackFilterGenre";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterAuthors,
  setFilterGenres,
} from "../../../redux/slices/filterSlice";

const TrackFilter = () => {
  const [openFilter, setOpenFilter] = useState("");
  const dispatch = useDispatch();

  function switchFilter(state) {
    if (state === openFilter) {
      setOpenFilter();
    } else {
      setOpenFilter(state);
    }
  }

  const filterRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(filterRef.current)) {
        setOpenFilter(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const filtersState = useSelector((state) => state.filter);

  const resetFilters = () => {
    dispatch(setFilterAuthors([]));
    dispatch(setFilterGenres([]));
  };

  return (
    <S.CenterblockFilter ref={filterRef}>
      <S.BlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("author")}
          $active={openFilter === "author" ? true : false}
        >
          исполнителю
          {filtersState.author.length > 0 && (
            <S.FilterCount>{filtersState.author.length}</S.FilterCount>
          )}
        </S.FilterButton>
        <S.PositionPopup>
          {openFilter === "author" && (
            <TrackFilterAuthor
              filtersState={filtersState}
              setOpenFilter={setOpenFilter}
            />
          )}
        </S.PositionPopup>

        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("genre")}
          $active={openFilter === "genre" ? true : false}
        >
          жанру
          {filtersState.genre.length > 0 && (
            <S.FilterCount>{filtersState.genre.length}</S.FilterCount>
          )}
        </S.FilterButton>
        <S.PositionPopup>
          {openFilter === "genre" && (
            <TrackFilterGenre
              filtersState={filtersState}
              setOpenFilter={setOpenFilter}
            />
          )}
        </S.PositionPopup>

        {filtersState.genre.length || filtersState.author.length ? (
          <S.CloseSvg onClick={resetFilters}>
            <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
          </S.CloseSvg>
        ) : (
          ""
        )}
      </S.BlockFilter>

      <S.BlockFilter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("years")}
          $active={openFilter === "years" ? true : false}
        >
          {filtersState.years}
        </S.FilterButton>
        <S.PositionPopup>
          {openFilter === "years" && (
            <TrackFilterYear
              setOpenFilter={setOpenFilter}
              filtersState={filtersState}
            />
          )}
        </S.PositionPopup>
      </S.BlockFilter>
    </S.CenterblockFilter>
  );
};

export default TrackFilter;
