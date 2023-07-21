import { useState } from "react";
import NavMenuList from "./NavMenuList";
import "../styles/NavBurger.css";

const NavMenuBurger = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function switchBurgerButton() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div onClick={switchBurgerButton} className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {openMenu && <NavMenuList />}
    </>
  );
};

export default NavMenuBurger;
