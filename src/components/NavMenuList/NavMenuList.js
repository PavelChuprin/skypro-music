import * as S from "./styles";
import { Link } from "react-router-dom";

const NavMenuList = () => {
  const removeLocalStorage = () => {
    localStorage.removeItem("user");
  };
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <Link to="/">
            <S.MenuLink>Главное</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/favorites">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/login">
            <S.MenuLink onClick={removeLocalStorage}>Выйти</S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
};

export default NavMenuList;
