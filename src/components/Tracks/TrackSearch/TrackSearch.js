import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import React from "react";
import { setSearch } from "../../../redux/slices/filterSlice";

const TrackSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.search);

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
        onChange={(event) => dispatch(setSearch(event.target.value))}
      ></S.SearchInput>
      {searchValue && (
        <S.CloseSvg onClick={() => dispatch(setSearch(""))}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.CloseSvg>
      )}
    </S.CenterblockSearch>
  );
};

export default TrackSearch;
