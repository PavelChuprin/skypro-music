import SidebarPersonal from "./SidebarPersonal";
import SidebarPlaylist from "./SidebarPlaylist";
import "../styles/Sidebar.css";

const Sidebar = ({ isLoading }) => {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarPlaylist isLoading={isLoading} />
    </div>
  );
};

export default Sidebar;
