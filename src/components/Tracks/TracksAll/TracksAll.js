import { useDispatch, useSelector } from "react-redux";
import Track from "../Track/Track";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import { setPlaylist } from "../../../redux/slices/playerSlice";
import {
  useGetAllTracksQuery,
  useGetFavoritesPlaylistQuery,
} from "../../../services/tracks";
import React from "react";
import { setFavoritesPlaylist } from "../../../redux/slices/favoritesSlice";

const TracksAll = () => {
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const { currentData } = useGetFavoritesPlaylistQuery();
  const { isLoading, data, error } = useGetAllTracksQuery();

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(currentData));
  }, [currentData, dispatch]);

  React.useEffect(() => {
    dispatch(setPlaylist(data));
  }, [dispatch, data]);

  const skeletons = [...new Array(10)].map((_, index) => (
    <TrackSkeleton key={index} />
  ));

  return (
    <S.ContentPlaylist>
      {isLoading ? (
        skeletons
      ) : data ? (
        data
          .filter((track) => {
            if (track.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            } else {
              return false;
            }
          })
          .map((track) => <Track key={track.id} track={track} />)
      ) : (
        <S.ErrorMessage>
          Не удалось загрузить плейлист, попробуйте позже.{" "}
          <span>{error.error}</span>
        </S.ErrorMessage>
      )}
    </S.ContentPlaylist>
  );
};

export default TracksAll;
