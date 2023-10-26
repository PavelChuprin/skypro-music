import React from "react";
import { UserContext } from "../../../App";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesPlaylistQuery,
} from "../../../services/tracks";
import {
  addToFavoritesPlaylist,
  deleteFromFavoritesPlaylist,
} from "../../../redux/slices/favoritesSlice";
import {
  getLocalStorage,
  getRefreshTokenLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../../localStorage";
import { updateToken } from "../../../API";

const AudioPlayerTrack = ({ currentTrack }) => {
  const dispatch = useDispatch();
  const { setUser } = React.useContext(UserContext);

  const [addToFavorites, { error: errorLike }] = useAddToFavoritesMutation();
  const [deleteFromFavorites, { error: errorDislike }] =
    useDeleteFromFavoritesMutation();

  const { data } = useGetFavoritesPlaylistQuery();

  const isLike = data?.some((item) => item.id === currentTrack.id);

  const handleClickLike = (id) => {
    addToFavorites(id);
    dispatch(addToFavoritesPlaylist(currentTrack));
  };
  const handleClickDislike = (id) => {
    deleteFromFavorites(id);
    dispatch(deleteFromFavoritesPlaylist(currentTrack));
  };

  React.useEffect(() => {
    const errorStateDislike = errorDislike;
    const errorStateLike = errorLike;

    if (errorStateDislike?.status === 401 || errorStateLike?.status === 401) {
      const fetchUpdateToken = async () => {
        alert("NEW TOKEN");
        const userData = getLocalStorage();
        try {
          const newToken = await updateToken(getRefreshTokenLocalStorage());
          const newUser = {
            ...userData,
            accessToken: {
              access: newToken.access,
              refresh: userData.accessToken.refresh,
            },
          };
          setLocalStorage(newUser);

          window.location.reload();
        } catch {
          setUser(null);
          removeLocalStorage();
        }
      };

      fetchUpdateToken();
    }
  }, [dispatch, errorDislike, errorLike]);

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
        {isLike ? (
          <S.TrackPlayLike
            onClick={() => handleClickDislike(currentTrack.id)}
            className="_btn-icon-like"
          >
            <S.TrackPlayLikeSvg alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackPlayLikeSvg>
          </S.TrackPlayLike>
        ) : (
          <S.TrackPlayLike
            onClick={() => handleClickLike(currentTrack.id)}
            className="_btn-icon"
          >
            <S.TrackPlayLikeSvg alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackPlayLikeSvg>
          </S.TrackPlayLike>
        )}
      </S.TrackPlayLikeDislike>
    </S.PlayerTrackPlay>
  );
};

export default AudioPlayerTrack;
