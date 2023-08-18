import { CATEGORYS } from "../../constants";
import SidebarPersonal from "../SidebarPersonal/SidebarPersonal";
import SidebarPlaylist from "../SidebarPlaylist/SidebarPlaylist";
import * as S from "./styles";
import { UserContext } from "../../App";

const Sidebar = ({ isLoading, setUser }) => {
  return (
    <S.MainSidebar>
      <UserContext.Consumer>
        {(user) => <SidebarPersonal user={user} setUser={setUser} />}
      </UserContext.Consumer>
      <SidebarPlaylist categorys={CATEGORYS} isLoading={isLoading} />
    </S.MainSidebar>
  );
};

export default Sidebar;
