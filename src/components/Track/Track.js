import * as S from "./styles";
import { Link } from "react-router-dom";

const Track = ({ track, setCurrentTrack, setVisibleAudioPlayer }) => {
  const min = Math.floor(track.duration_in_seconds / 60);
  const sec = track.duration_in_seconds - min * 60;
  return (
    <S.PlaylistTrack
      onClick={() => {
        setCurrentTrack(track);
        setVisibleAudioPlayer(true);
      }}
    >
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TrackTitleSvg alt="track">
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
        <S.TrackTimeText>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
        </S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  );
};

export default Track;
