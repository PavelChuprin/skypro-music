import NavMenuList from "./NavMenuList";
import "../styles/NavMenu.css";

const NavMenu = () => {
	return <nav className="main__nav nav">
	<div className="nav__logo logo">
		<img className="logo__image" src="img/logo.png" alt="logo"></img>
	</div>
	<div className="nav__burger burger">
		<span className="burger__line"></span>
		<span className="burger__line"></span>
		<span className="burger__line"></span>
	</div>
		<NavMenuList />
</nav>
}

export default NavMenu;