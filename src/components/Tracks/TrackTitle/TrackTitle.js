import * as S from "./styles";

const TrackTitle = () => {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
      <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
      <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
      <S.PlaylistTitleCol4>
        <S.PlaylistTitleSvg title="Продолжительность" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol4>
    </S.ContentTitle>
  );
};

export default TrackTitle;
