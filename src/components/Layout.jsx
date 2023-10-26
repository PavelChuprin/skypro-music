import React from "react";
import NavMenu from "./Nav/NavMenu/NavMenu";
import AudioPlayer from "../components/Player/AudioPlayer/AudioPlayer";
import * as S from "../stylesApp";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const visiblePlayer = useSelector((state) => state.audioplayer.visiblePlayer);
  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        <Outlet />
      </S.Main>
      {visiblePlayer && <AudioPlayer />}
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export { Layout };
