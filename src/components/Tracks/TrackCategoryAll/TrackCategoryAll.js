import { useDispatch, useSelector } from "react-redux";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import {
  useGetFavoritesPlaylistQuery,
  useGetSelectionByIdQuery,
} from "../../../services/tracks";
import React from "react";
import { useParams } from "react-router-dom";
import {
  setFavoritesPlaylist,
  setSelectionPlaylist,
} from "../../../redux/slices/favoritesSlice";
import TrackSelection from "../Track/TrackSelection/TrackSelection";

const TracksCategoryAll = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchValue = useSelector((state) => state.filter.search);

  const { isLoading, data, error } = useGetSelectionByIdQuery(
    Number(params.id)
  );
  const { currentData } = useGetFavoritesPlaylistQuery();

  React.useEffect(() => {
    dispatch(setSelectionPlaylist(data));
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
          .map((track) => <TrackSelection key={track.id} track={track} />)
      ) : (
        <S.ErrorMessage>
          Не удалось загрузить плейлист, попробуйте позже.{" "}
          <span>{error.error}</span>
        </S.ErrorMessage>
      )}
    </S.ContentPlaylist>
  );
};

export default TracksCategoryAll;
