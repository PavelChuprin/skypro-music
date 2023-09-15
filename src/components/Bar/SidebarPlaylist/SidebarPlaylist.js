import * as S from "./styles";
import { Link } from "react-router-dom";
import { useGetSelectionQuery } from "../../../services/tracks";
import BarSkeleton from "./BarSkeleton";

const SidebarPlaylist = () => {
  const { isLoading, data, error } = useGetSelectionQuery();

  const skeletons = [...new Array(3)].map((_, index) => (
    <BarSkeleton key={index} />
  ));

  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {isLoading ? (
          skeletons
        ) : data ? (
          data.map((category) => (
            <S.SidebarItem key={category.id}>
              <Link to={`/selection/${category.id}`}>
                <S.SidebarLink>
                  <S.SidebarImg
                    src={`${category.image}`}
                    alt={`${category.owner.username}`}
                  ></S.SidebarImg>
                </S.SidebarLink>
              </Link>
            </S.SidebarItem>
          ))
        ) : (
          <S.SidebarItem>
            Не удалось загрузить подборки, попробуйте позже.
            <span>{error.error}</span>
          </S.SidebarItem>
        )}
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export default SidebarPlaylist;
