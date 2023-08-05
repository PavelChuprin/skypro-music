import * as S from "./styles";
import { Link } from "react-router-dom";

const Track = ({ track, isLoading }) => {
  return (
    <S.PlaylistItem>
      {isLoading ? (
        <img src="/img/Skeleton Track.png" alt="Skeleton Track"></img>
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="{track.name}">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <Link to="/">
                <S.TrackTitleLink>
                  {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                  <S.TrackTitleSpan>{track.subname}</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </Link>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <Link to="/">
              <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
            </Link>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Link to="/">
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </Link>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{track.time}</S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      )}
    </S.PlaylistItem>
  );
};

export default Track;
