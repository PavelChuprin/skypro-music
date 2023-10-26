import * as S from "./styles";
import { timer } from "../../../utils/timer";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTrack,
  setIsPlaying,
  setVisiblePlayer,
} from "../../../redux/slices/playerSlice";
import { deleteFromFavoritesPlaylist } from "../../../redux/slices/favoritesSlice";
import React from "react";
import { useDeleteFromFavoritesMutation } from "../../../services/tracks";
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

  const handleClickDislike = (event, id) => {
    event.stopPropagation();
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
          <S.TrackTitleLink>{favTrack.name}</S.TrackTitleLink>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink>{favTrack.author}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink>{favTrack.album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackLike
          onClick={(event) => handleClickDislike(event, favTrack.id)}
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
