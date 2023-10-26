import SidebarPersonal from "../SidebarPersonal/SidebarPersonal";
import SidebarPlaylist from "../SidebarPlaylist/SidebarPlaylist";
import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlaylist />
    </S.MainSidebar>
  );
};

export default Sidebar;
