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
  deleteFromFavoritesPlaylist,
  selectPlaylistFavorites,
  setFavoritesPlaylist,
  toggleFavorites,
} from "../../../redux/slices/favoritesSlice";
import React from "react";
import {
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

const TrackFavorite = ({ favTrack }) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.audioplayer.track);
  const isPlaying = useSelector((state) => state.audioplayer.playing);
  const { setUser } = React.useContext(UserContext);

  const currentID = currentTrack ? currentTrack.id : null;

  const onChangeTrack = () => {
    if (currentTrack !== favTrack) {
      dispatch(setCurrentTrack(favTrack));
      dispatch(setIsPlaying(true));
    } else {
      dispatch(setIsPlaying(false));
    }
    dispatch(setVisiblePlayer(true));
  };

  const [deleteFromFavorites, { error: errorDislike }] =
    useDeleteFromFavoritesMutation();

  const handleClickDislike = (id) => {
    console.log("DISLIKE удаляем трек с id =>", id);
    deleteFromFavorites(id);
    dispatch(deleteFromFavoritesPlaylist(favTrack));
  };

  React.useEffect(() => {
    const errorStateDislike = errorDislike;

    if (errorStateDislike?.status === 401) {
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
  }, [dispatch, errorDislike]);

  return (
    <S.PlaylistTrack>
      <S.TrackTitle onClick={onChangeTrack}>
        <S.TrackTitleImage>
          {currentID === favTrack.id ? (
            <S.TrackTitleCurrent $isPlaying={isPlaying}></S.TrackTitleCurrent>
          ) : (
            <S.TrackTitleSvg alt={favTrack.name}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          )}
        </S.TrackTitleImage>
        <S.TrackTitleText>
          <Link to="/">
            <S.TrackTitleLink>
              {favTrack.name} <S.TrackTitleSpan></S.TrackTitleSpan>
              <S.TrackTitleSpan>{favTrack.subname}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </Link>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor>
        <Link to="/">
          <S.TrackAuthorLink>{favTrack.author}</S.TrackAuthorLink>
        </Link>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <Link to="/">
          <S.TrackAlbumLink>{favTrack.album}</S.TrackAlbumLink>
        </Link>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackLike
          onClick={() => handleClickDislike(favTrack)}
          className="_btn-icon-like"
        >
          <S.TrackLikeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackLikeSvg>
        </S.TrackLike>
        <S.TrackTimeText>{timer(favTrack.duration_in_seconds)}</S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  );
};

export default TrackFavorite;
