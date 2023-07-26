import * as S from "./styles";

const AudioPlayerTrack = ({ isLoading }) => {
  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        {isLoading ? (
          <img
            alt="Skeleton AudioPlayer"
            src="img/Skeleton AudioPlayer.png"
          ></img>
        ) : (
          <>
            <S.TrackPlayImage>
              <S.TrackPlaySvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackPlaySvg>
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
              <S.TrackPlayAuthorLink href="http://">
                Ты та...
              </S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
              <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
          </>
        )}
      </S.TrackPlayContain>

      <S.TrackPlayLikeDislike>
        <S.TrackPlayLike className="_btn-icon">
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike className="_btn-icon">
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDislike>
    </S.PlayerTrackPlay>
  );
};

export default AudioPlayerTrack;
