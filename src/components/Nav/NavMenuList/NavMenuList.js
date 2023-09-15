import * as S from "./styles";
import { Link } from "react-router-dom";
import { removeLocalStorage } from "../../../localStorage";
import React from "react";
import { UserContext } from "../../../App";
import { useSelector } from "react-redux";
import { selectPlaylistFavorites } from "../../../redux/slices/favoritesSlice";
import { useGetFavoritesPlaylistQuery } from "../../../services/tracks";


const NavMenuList = () => {
  const { setUser } = React.useContext(UserContext);
  const handleClickLogout = () => {
    setUser(null);
    removeLocalStorage();
  };
	
	const { data } = useGetFavoritesPlaylistQuery();
	const playlistFavorites = useSelector((state) => state.favorites.playlist);

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
            {/* <S.MenuLink>Мой плейлист <span>{playlistFavorites.length ? `( ${playlistFavorites.length} )` : ''}</span></S.MenuLink> */}
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
