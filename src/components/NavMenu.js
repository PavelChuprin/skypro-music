import NavMenuBurger from "./NavMenuBurger";
import "../styles/NavMenu.css";

const NavMenu = () => {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <NavMenuBurger />
    </nav>
  );
};

export default NavMenu;
