import { SearchContext } from "../../../App";
import * as S from "./styles";
import React from "react";

const TrackSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchInput
        type="search"
        placeholder="Поиск"
        name="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></S.SearchInput>
      {searchValue && (
        <S.CloseSvg onClick={() => setSearchValue("")}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.CloseSvg>
      )}
    </S.CenterblockSearch>
  );
};

export default TrackSearch;
