import TrackTitle from "../components/Tracks/TrackTitle/TrackTitle";
import * as S from "./styles/Favorites.styles";
import TrackSearch from "../components/Tracks/TrackSearch/TrackSearch";
import SidebarPersonal from "../components/Bar/SidebarPersonal/SidebarPersonal";
import TracksAllFavorites from "../components/Tracks/TracksAllFavorites/TracksAllFavorites";
import React from "react";

const FavoritesPage = () => {
  return (
    <>
      <S.MainCenterblock>
        <TrackSearch />
        <S.CenterblockH2>Избранное</S.CenterblockH2>
        <S.CenterblockContent>
          <TrackTitle />
          <TracksAllFavorites />
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.SidebarPersonalBlock>
        <SidebarPersonal />
      </S.SidebarPersonalBlock>
    </>
  );
};

export { FavoritesPage };
