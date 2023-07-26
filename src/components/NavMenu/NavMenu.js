import NavMenuBurger from "../NavMenuBurger/NavMenuBurger";
import * as S from "./styles"

const NavMenu = () => {
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <NavMenuBurger />
    </S.MainNav>
  );
};

export default NavMenu;
