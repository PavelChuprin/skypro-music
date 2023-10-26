import { useDispatch, useSelector } from "react-redux";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetFavoritesPlaylistQuery,
  useGetSelectionByIdQuery,
} from "../../../services/tracks";
import {
  setCategoryPlaylist,
  setFavoritesPlaylist,
} from "../../../redux/slices/favoritesSlice";
import Track from "../Track/Track";

const TracksAllCategory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchValue = useSelector((state) => state.filter.search);

  const { isLoading, data, error } = useGetSelectionByIdQuery(
    Number(params.id)
  );
  const { currentData } = useGetFavoritesPlaylistQuery();

  React.useEffect(() => {
    dispatch(setCategoryPlaylist(data));
  }, [dispatch, data]);

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(currentData));
  }, [currentData, dispatch]);

  const skeletons = [...new Array(10)].map((_, index) => (
    <TrackSkeleton key={index} />
  ));

  return (
    <S.ContentPlaylist>
      {isLoading ? (
        skeletons
      ) : data ? (
        data.items
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

export default TracksAllCategory;
