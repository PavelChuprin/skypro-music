import { useState } from "react";
import NavMenuList from "../NavMenuList/NavMenuList";
import * as S from "./styles";

const NavMenuBurger = ({ setUser }) => {
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
      {openMenu && <NavMenuList setUser={setUser} />}
    </>
  );
};

export default NavMenuBurger;
