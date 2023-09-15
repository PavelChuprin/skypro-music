import { useDispatch } from "react-redux";
import Track from "../Track/Track";
import { TrackSkeleton } from "../Track/TrackSkeleton";
import * as S from "./styles";
import { setPlaylist } from "../../../redux/slices/playerSlice";
import { useGetAllTracksQuery } from "../../../services/tracks";
import { SearchContext } from "../../../App";
import React from "react";

const TracksAll = () => {
  const { searchValue } = React.useContext(SearchContext);
  const dispatch = useDispatch();

  const { isLoading, data, error } = useGetAllTracksQuery();

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
