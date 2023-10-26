import { useState } from "react";
import NavMenuList from "../NavMenuList/NavMenuList";
import * as S from "./styles";

const NavMenuBurger = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function switchBurgerButton() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      {openMenu ? (
        <S.CloseSvg onClick={switchBurgerButton}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.CloseSvg>
      ) : (
        <S.NavBurger onClick={switchBurgerButton}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
      )}
      {openMenu && <NavMenuList />}
    </>
  );
};

export default NavMenuBurger;
