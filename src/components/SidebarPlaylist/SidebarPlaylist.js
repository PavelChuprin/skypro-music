import * as S from "./styles";
import { Link } from "react-router-dom";

const SidebarPlaylist = ({ isLoading, categorys }) => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {categorys.map((category) => (
          <S.SidebarItem key={category.id}>
            <Link to={`/category/${category.id}`}>
              <S.SidebarLink>
                {isLoading ? (
                  <S.SidebarImg
                    src="img/Skeleton Sidebar.png"
                    alt="Skeleton Sidebar"
                  ></S.SidebarImg>
                ) : (
                  <S.SidebarImg
                    src={`${category.image}`}
                    alt={`${category.title}`}
                    title={`${category.description}`}
                  ></S.SidebarImg>
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        ))}
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export default SidebarPlaylist;
