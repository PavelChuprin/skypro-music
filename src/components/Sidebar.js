import SidebarPersonal from "./SidebarPersonal";
import SidebarPlaylist from "./SidebarPlaylist";
import "../styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarPlaylist />
    </div>
  );
};

export default Sidebar;
