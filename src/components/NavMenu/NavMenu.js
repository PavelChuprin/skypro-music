import { Link } from "react-router-dom";
import NavMenuBurger from "../NavMenuBurger/NavMenuBurger";
import * as S from "./styles";

const NavMenu = ({ setUser }) => {
  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage>
        </Link>
      </S.NavLogo>
      <NavMenuBurger setUser={setUser} />
    </S.MainNav>
  );
};

export default NavMenu;
