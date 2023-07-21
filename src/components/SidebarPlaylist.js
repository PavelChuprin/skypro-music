import "../styles/SidebarPlaylist.css";

const SidebarPlaylist = ({ isLoading }) => {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <div className="sidebar__item">
          <a className="sidebar__link" href="http://">
            {isLoading ? (
              <img
                className="sidebar__img"
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              ></img>
            ) : (
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              ></img>
            )}
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="http://">
            {isLoading ? (
              <img
                className="sidebar__img"
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              ></img>
            ) : (
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              ></img>
            )}
          </a>
        </div>
        <div className="sidebar__item">
          <a className="sidebar__link" href="http://">
            {isLoading ? (
              <img
                className="sidebar__img"
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              ></img>
            ) : (
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              ></img>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarPlaylist;
