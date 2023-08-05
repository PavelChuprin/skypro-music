import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import NavMenu from "../components/NavMenu/NavMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import TrackList from "../components/TrackList/TrackList";
import * as S from "../stylesApp";

const HomePage = () => {

	const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

	return (
		<S.Container>
			<S.Main>
				<NavMenu />
				<TrackList isLoading={isLoading} />
				<Sidebar isLoading={isLoading} />
			</S.Main>
			<AudioPlayer isLoading={isLoading} />
			<S.Footer></S.Footer>
		</S.Container>
	)
}
export { HomePage };
