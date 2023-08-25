import * as S from "./styles";
import { Link } from "react-router-dom";
import { timer } from "../../utils/timer";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTrack, setIsPlaying } from "../../redux/slices/playerSlice";

const Track = ({ track, setVisibleAudioPlayer }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);

  const currentID = currentTrack ? currentTrack.id : null;

  const onChangeTrack = () => {
    if (currentTrack !== track) {
      dispatch(setCurrentTrack(track));
      dispatch(setIsPlaying(true));
    } else {
      dispatch(setIsPlaying(false));
    }
    setVisibleAudioPlayer(true);
  };

  return (
    <S.PlaylistTrack onClick={onChangeTrack}>
      <S.TrackTitle>
        <S.TrackTitleImage>
          {currentID === track.id ? (
            <S.TrackTitleCurrent $isPlaying={isPlaying}></S.TrackTitleCurrent>
          ) : (
            <S.TrackTitleSvg alt={track.name}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          )}
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
        <S.TrackTimeText>{timer(track.duration_in_seconds)}</S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  );
};

export default Track;
