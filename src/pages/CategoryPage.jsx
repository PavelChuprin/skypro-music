import { useParams } from "react-router-dom";
import { CATEGORYS } from "../constants";
import TrackTitle from "../components/Tracks/TrackTitle/TrackTitle";
import * as S from "./styles/Favorites.styles";
import TrackSearch from "../components/Tracks/TrackSearch/TrackSearch";
import SidebarPersonal from "../components/Bar/SidebarPersonal/SidebarPersonal";
import TracksAllCategory from "../components/Tracks/TracksAllCategory/TracksAllCategory";
import { useGetSelectionByIdQuery } from "../services/tracks";

const CategoryPage = () => {
  const params = useParams();

  const category = CATEGORYS.find(
    (category) => category.id === Number(params.id)
  );

  const { isLoading, data, error } = useGetSelectionByIdQuery(
    Number(params.id)
  );

  return (
    <>
      <S.MainCenterblock>
        <TrackSearch />
        <S.CenterblockH2>
          {category.title}{" "}
          {!error && (
            <S.CategoryCount>
              {isLoading ? "..." : data && data.items.length}
            </S.CategoryCount>
          )}
        </S.CenterblockH2>
        <S.CenterblockContent>
          <TrackTitle />
          <TracksAllCategory />
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.SidebarPersonalBlock>
        <SidebarPersonal />
      </S.SidebarPersonalBlock>
    </>
  );
};

export { CategoryPage };
