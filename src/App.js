import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavMenu from "./components/NavMenu/NavMenu";
import Sidebar from "./components/Sidebar/Sidebar";
import TrackList from "./components/TrackList/TrackList";
import React from "react";
import * as S from "./stylesApp";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </S.Main>
        <AudioPlayer isLoading={isLoading} />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
