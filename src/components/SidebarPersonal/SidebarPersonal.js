import * as S from "./styles";
import { Link } from "react-router-dom";
import { removeLocalStorage } from "../../localStorage";
import React from "react";
import { UserContext } from "../../App";

const SidebarPersonal = () => {
  const { user, setUser } = React.useContext(UserContext);
  const handleClickLogout = () => {
    setUser(null);
    removeLocalStorage();
  };
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <Link to="/login">
        <S.SidebarLogout onClick={handleClickLogout} className="_btn">
          <use xlinkHref="img/icon/sprite.svg#icon-exit"></use>
        </S.SidebarLogout>
      </Link>
    </S.SidebarPersonal>
  );
};

export default SidebarPersonal;
