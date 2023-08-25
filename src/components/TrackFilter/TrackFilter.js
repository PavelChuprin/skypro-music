import * as S from "./styles";
import { useState } from "react";
import TrackFilterAuthor from "../TrackFilterAuthor/TrackFilterAuthor";
import TrackFilterYear from "../TrackFilterYear/TrackFilterYear";
import TrackFilterGenre from "../TrackFilterGenre/TrackFilterGenre";

const TrackFilter = ({ tracks }) => {
  const [filter, setFilter] = useState("");

  function switchFilter(state) {
    if (state === filter) {
      setFilter();
    } else {
      setFilter(state);
    }
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton
        className="_btn-text"
        onClick={() => switchFilter("author")}
        $active={filter === "authors" ? true : false}
      >
        исполнителю
      </S.FilterButton>
      <S.PositionPopup>
        {filter === "author" && <TrackFilterAuthor tracks={tracks} />}
      </S.PositionPopup>

      <S.FilterButton
        className="_btn-text"
        onClick={() => switchFilter("year")}
        $active={filter === "year" ? true : false}
      >
        году выпуска
      </S.FilterButton>
      <S.PositionPopup>
        {filter === "year" && <TrackFilterYear tracks={tracks} />}
      </S.PositionPopup>

      <S.FilterButton
        className="_btn-text"
        onClick={() => switchFilter("genre")}
        $active={filter === "genre" ? true : false}
      >
        жанру
      </S.FilterButton>
      <S.PositionPopup>
        {filter === "genre" && <TrackFilterGenre tracks={tracks} />}
      </S.PositionPopup>
    </S.CenterblockFilter>
  );
};

export default TrackFilter;
