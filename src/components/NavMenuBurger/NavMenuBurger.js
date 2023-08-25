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
      <S.NavBurger onClick={switchBurgerButton}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {openMenu && <NavMenuList />}
    </>
  );
};

export default NavMenuBurger;
