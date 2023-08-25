import * as S from "./styles";
import { Link } from "react-router-dom";
import { removeLocalStorage } from "../../localStorage";

const NavMenuList = ({ setUser }) => {
  const handleClickLogout = () => {
    setUser(null);
    removeLocalStorage();
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
            <S.MenuLink onClick={handleClickLogout}>Выйти</S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
};

export default NavMenuList;
