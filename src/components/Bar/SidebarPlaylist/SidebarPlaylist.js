import * as S from "./styles";
import { Link } from "react-router-dom";
import { CATEGORYS } from "../../../constants";
import { useGetSelectionQuery } from "../../../services/tracks";
import BarSkeleton from "./BarSkeleton";

const SidebarPlaylist = () => {
  const skeletons = [...new Array(3)].map((_, index) => (
    <BarSkeleton key={index} />
  ));

  const { isLoading, error } = useGetSelectionQuery();

  const handleClickSelector = (id) => {
    console.log(id);
  };

  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {isLoading ? (
          skeletons
        ) : CATEGORYS ? (
          CATEGORYS.map((category) => (
            <S.SidebarItem key={category.id}>
              <Link to={`/selection/${category.id}`}>
                <S.SidebarLink onClick={() => handleClickSelector(category.id)}>
                  <S.SidebarImg
                    src={`${category.image}`}
                    alt={`${category.title}`}
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
