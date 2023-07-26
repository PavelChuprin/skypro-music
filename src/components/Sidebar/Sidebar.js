import SidebarPersonal from "../SidebarPersonal/SidebarPersonal";
import SidebarPlaylist from "../SidebarPlaylist/SidebarPlaylist";
import * as S from "./styles"

const Sidebar = ({ isLoading }) => {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlaylist isLoading={isLoading} />
    </S.MainSidebar>
  );
};

export default Sidebar;
