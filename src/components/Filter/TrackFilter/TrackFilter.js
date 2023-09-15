import * as S from "./styles";
import { useState } from "react";
import TrackFilterAuthor from "../../Filter/TrackFilterAuthor/TrackFilterAuthor";
import TrackFilterYear from "../../Filter/TrackFilterYear/TrackFilterYear";
import TrackFilterGenre from "../../Filter/TrackFilterGenre/TrackFilterGenre";
import React from "react";

const TrackFilter = () => {
  const [filter, setFilter] = useState("");

  function switchFilter(state) {
    if (state === filter) {
      setFilter();
    } else {
      setFilter(state);
    }
  }

  const filterRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(filterRef.current)) {
        setFilter(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <S.CenterblockFilter ref={filterRef}>
      <S.BlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("author")}
          $active={filter === "author" ? true : false}
        >
          исполнителю
        </S.FilterButton>
        <S.PositionPopup>
          {filter === "author" && <TrackFilterAuthor />}
        </S.PositionPopup>

        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("genre")}
          $active={filter === "genre" ? true : false}
        >
          жанру
        </S.FilterButton>
        <S.PositionPopup>
          {filter === "genre" && <TrackFilterGenre />}
        </S.PositionPopup>
      </S.BlockFilter>

      <S.BlockFilter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterButton
          className="_btn-text"
          onClick={() => switchFilter("year")}
          $active={filter === "year" ? true : false}
        >
          По умолчанию
        </S.FilterButton>
        <S.PositionPopup>
          {filter === "year" && <TrackFilterYear />}
        </S.PositionPopup>
      </S.BlockFilter>
    </S.CenterblockFilter>
  );
};

export default TrackFilter;
