import TrackFavorite from "../TrackFavorite/TrackFavorite";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import { useGetFavoritesPlaylistQuery } from "../../../services/tracks";
import React from "react";
import { setFavoritesPlaylist } from "../../../redux/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const TracksAllFavorites = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useGetFavoritesPlaylistQuery();

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(data));
  }, [dispatch, data]);

  const playlistFavorites = useSelector((state) => state.favorites.playlist);

  const skeletons = [...new Array(10)].map((_, index) => (
    <TrackSkeleton key={index} />
  ));

  return (
    <S.ContentPlaylist>
      {error ? (
        <S.ErrorMessage>
          Не удалось загрузить плейлист, попробуйте позже.{" "}
          <span>{error.error}</span>
        </S.ErrorMessage>
      ) : isLoading ? (
        skeletons
      ) : playlistFavorites ? (
        playlistFavorites.map((favTrack) => (
          <TrackFavorite key={favTrack.id} favTrack={favTrack} />
        ))
      ) : (
        <p>Список пуст *_*</p>
      )}
    </S.ContentPlaylist>
  );
};

export default TracksAllFavorites;
