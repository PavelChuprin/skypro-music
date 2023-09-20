import { useDispatch } from "react-redux";
import Track from "../Track/Track";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import { setPlaylist } from "../../../redux/slices/playerSlice";
import { useGetSelectionByIdQuery } from "../../../services/tracks";
import React from "react";

const TracksCategoryAll = () => {
  const dispatch = useDispatch();
  // const params = React.useParams();

  const { isLoading, data, error } = useGetSelectionByIdQuery();
  // const { isLoading, data, error } = useGetSelectionByIdQuery(Number(params.id));

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
        data.map((track) => <Track key={track.id} track={track} />)
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
