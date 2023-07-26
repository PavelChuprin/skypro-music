import * as S from "./styles";

const TrackSearch = () => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.SearchText>
    </S.CenterblockSearch>
  );
};

export default TrackSearch;
