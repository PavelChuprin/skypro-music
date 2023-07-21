import "../styles/TrackFilter.css";
import { useState } from "react";
import TrackFilterAuthor from "./TrackFilterAuthor";
import TrackFilterYear from "./TrackFilterYear";
import TrackFilterGenre from "./TrackFilterGenre";

const TrackFilter = () => {
  const [filter, setFilter] = useState("");

  function switchFilter(state) {
    if (state === filter) {
      setFilter();
    } else {
      setFilter(state);
    }
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div
        onClick={() => switchFilter("author")}
        className={
          filter === "author"
            ? "active-filter filter__button button-author"
            : "filter__button button-author btn-text"
        }
      >
        исполнителю
      </div>
      <div className="position-popup">
        {filter === "author" && <TrackFilterAuthor />}
      </div>

      <div
        onClick={() => switchFilter("year")}
        className={
          filter === "year"
            ? "active-filter filter__button button-year"
            : "filter__button button-year btn-text"
        }
      >
        году выпуска
      </div>
      <div className="position-popup">
        {filter === "year" && <TrackFilterYear />}
      </div>

      <div
        onClick={() => switchFilter("genre")}
        className={
          filter === "genre"
            ? "active-filter filter__button button-genre"
            : "filter__button button-genre btn-text"
        }
      >
        жанру
      </div>
      <div className="position-popup">
        {filter === "genre" && <TrackFilterGenre />}
      </div>
    </div>
  );
};

export default TrackFilter;
