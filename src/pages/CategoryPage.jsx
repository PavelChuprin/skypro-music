import { useParams } from "react-router-dom";
import { CATEGORYS } from "../constants";
import TrackTitle from "../components/Tracks/TrackTitle/TrackTitle";
import * as S from "./styles/Favorites.styles";
import TrackSearch from "../components/Tracks/TrackSearch/TrackSearch";
import SidebarPersonal from "../components/Bar/SidebarPersonal/SidebarPersonal";
import { useGetSelectionByIdQuery } from "../services/tracks";

const CategoryPage = () => {
  const params = useParams();

  const category = CATEGORYS.find(
    (category) => category.id === Number(params.id)
  );

  const { data } = useGetSelectionByIdQuery();
  console.log("data", data);

  return (
    <>
      <S.MainCenterblock>
        <TrackSearch />
        <S.CenterblockH2>{category.title}</S.CenterblockH2>
        <S.CenterblockContent>
          <TrackTitle />
          <p>В этом плейлисте нет треков</p>
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.SidebarPersonalBlock>
        <SidebarPersonal />
      </S.SidebarPersonalBlock>
    </>
  );
};

export { CategoryPage };
