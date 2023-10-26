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
import { sortYears } from "../../../utils/sort";
import { setFilterPlaylist } from "../../../redux/slices/filterSlice";

const TracksAll = () => {
  const searchValue = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();
  const initialPlaylist = useSelector((state) => state.audioplayer.playlist);
  const filtersState = useSelector((state) => state.filter);
  let filterPlaylist = useSelector((state) => state.filter.filterPlaylist);

  const { currentData } = useGetFavoritesPlaylistQuery();
  const { isLoading, data, error } = useGetAllTracksQuery();

  const skeletons = [...new Array(10)].map((_, index) => (
    <TrackSkeleton key={index} />
  ));

  React.useEffect(() => {
    dispatch(setFavoritesPlaylist(currentData));
  }, [currentData, dispatch]);

  React.useEffect(() => {
    dispatch(setPlaylist(data));
  }, [dispatch, data]);

  React.useEffect(() => {
    dispatch(setFilterPlaylist(initialPlaylist));
  }, [dispatch, initialPlaylist]);

  const filterFunction = () => {
    if (filtersState.author.length && filtersState.genre.length) {
      filterPlaylist = [
        ...filterPlaylist?.filter((track) =>
          filtersState.author.includes(track.author)
        ),
      ];
      filterPlaylist = [
        ...filterPlaylist?.filter((track) =>
          filtersState.genre.includes(track.genre)
        ),
      ];
    } else if (filtersState.author.length) {
      filterPlaylist = [
        ...filterPlaylist?.filter((track) =>
          filtersState.author.includes(track.author)
        ),
      ];
    } else if (filtersState.genre.length) {
      filterPlaylist = [
        ...filterPlaylist?.filter((track) =>
          filtersState.genre.includes(track.genre)
        ),
      ];
    }
  };

  filterFunction();

  React.useEffect(() => {
    if (initialPlaylist) {
      let filterPlaylist = [...initialPlaylist];
      if (filtersState.years === "Сначала новые") {
        filterPlaylist.sort((a, b) =>
          sortYears(b.release_date, a.release_date)
        );
      } else if (filtersState.years === "Сначала старые") {
        filterPlaylist.sort((a, b) =>
          sortYears(a.release_date, b.release_date)
        );
      } else if (filtersState.years === "По умолчанию") {
        filterPlaylist.sort((a, b) => sortYears(a.id, b.id));
      }
      dispatch(setFilterPlaylist(filterPlaylist));
    }
  }, [filtersState.years]);

  return (
    <S.ContentPlaylist>
      {isLoading ? (
        skeletons
      ) : data ? (
        filterPlaylist
          ?.filter((track) => {
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
          {error && <span>{error.error}</span>}
        </S.ErrorMessage>
      )}
    </S.ContentPlaylist>
  );
};

export default TracksAll;
