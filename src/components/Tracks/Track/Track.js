import * as S from "./styles";
import { Link } from "react-router-dom";
import { timer } from "../../../utils/timer";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTrack,
  setIsPlaying,
  setVisiblePlayer,
} from "../../../redux/slices/playerSlice";
import {
  addToFavoritesPlaylist,
  deleteFromFavoritesPlaylist,
  setFavoritesPlaylist,
} from "../../../redux/slices/favoritesSlice";
import React from "react";
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesPlaylistQuery,
} from "../../../services/tracks";
import {
  getLocalStorage,
  getRefreshTokenLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../../localStorage";
import { updateToken } from "../../../API";
import { UserContext } from "../../../App";

const Track = ({ track }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const { setUser } = React.useContext(UserContext);

  const currentID = currentTrack ? currentTrack.id : null;

  const onChangeTrack = () => {
    if (currentTrack !== track) {
      dispatch(setCurrentTrack(track));
      dispatch(setIsPlaying(true));
    } else {
      dispatch(setIsPlaying(false));
    }
    dispatch(setVisiblePlayer(true));
  };

  const { data } = useGetFavoritesPlaylistQuery();

  const [addToFavorites, { error: errorLike }] = useAddToFavoritesMutation();
  const [deleteFromFavorites, { error: errorDislike }] =
    useDeleteFromFavoritesMutation();

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(data));
  }, [dispatch, data]);

  const playlistFavorites = useSelector((state) => state.favorites.playlist);
  const isLike = playlistFavorites?.some((item) => item.id === track.id);

  const handleClickLike = (id) => {
    console.log("LIKE добавляем трек с id", id);
    addToFavorites(id);
    dispatch(addToFavoritesPlaylist(track));
  };
  const handleClickDislike = (id) => {
    console.log("DISLIKE удаляем трек с id", id);
    deleteFromFavorites(id);
    dispatch(deleteFromFavoritesPlaylist(track));
  };

  React.useEffect(() => {
    const errorStateDislike = errorDislike;
    const errorStateLike = errorLike;

    if (errorStateDislike?.status === 401 || errorStateLike?.status === 401) {
      const fetchUpdateToken = async () => {
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
    <S.PlaylistTrack>
      <S.TrackTitle onClick={onChangeTrack}>
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
        {isLike ? (
          <S.TrackLike
            onClick={() => handleClickDislike(track.id)}
            className="_btn-icon-like"
          >
            <S.TrackLikeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackLikeSvg>
          </S.TrackLike>
        ) : (
          <S.TrackLike
            onClick={() => handleClickLike(track.id)}
            className="_btn-icon"
          >
            <S.TrackLikeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackLikeSvg>
          </S.TrackLike>
        )}
        <S.TrackTimeText>{timer(track.duration_in_seconds)}</S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  );
};

export default Track;
