import * as S from "./styles";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setIsLike } from "../../redux/slices/favoritesSlice";

const AudioPlayerTrack = ({ currentTrack }) => {
  // const dispatch = useDispatch();
  // const isLike = useSelector((state) => state.favorites.isLike);

  // const handleIsLike = () => {
  //   dispatch(setIsLike(!isLike));
  // };

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <Link to="/">
            <S.TrackPlayAuthorLink href="http://">
              {currentTrack.name}
            </S.TrackPlayAuthorLink>
          </Link>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <Link to="/">
            <S.TrackPlayAlbumLink href="http://">
              {currentTrack.author}
            </S.TrackPlayAlbumLink>
          </Link>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDislike>
        <S.TrackPlayLike
          // onClick={handleIsLike}
          // className={isLike ? "_btn-icon-like" : "_btn-icon"}
        >
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
      </S.TrackPlayLikeDislike>
    </S.PlayerTrackPlay>
  );
};

export default AudioPlayerTrack;
