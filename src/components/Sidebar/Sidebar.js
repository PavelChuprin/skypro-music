import { CATEGORYS } from "../../constants";
import { useUserContext } from "../../hooks/useUserContext";
import SidebarPersonal from "../SidebarPersonal/SidebarPersonal";
import SidebarPlaylist from "../SidebarPlaylist/SidebarPlaylist";
import * as S from "./styles";

const Sidebar = ({ isLoading, setUser }) => {
  const user = useUserContext();
  return (
    <S.MainSidebar>
      <SidebarPersonal user={user} setUser={setUser} />
      <SidebarPlaylist categorys={CATEGORYS} isLoading={isLoading} />
    </S.MainSidebar>
  );
};

export default Sidebar;
