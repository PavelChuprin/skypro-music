import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import NavMenu from "../components/NavMenu/NavMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import TrackList from "../components/TrackList/TrackList";
import * as S from "../stylesApp";
import { getTracksAll } from "../API";

const HomePage = () => {
	const [tracks, setTracks] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [visibleAudioPlayer, setVisibleAudioPlayer] = React.useState(false);
	const [currentTrack, setCurrentTrack] = React.useState(null);
	const [getTracksError, setGetTracksError] = React.useState(null);

	React.useEffect(() => {
		const fetchData = async () => {
			try{
				const data = await getTracksAll();
				setTracks(data);
			}	
			catch(error) {
				setGetTracksError(error.message);
			}
			finally{
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<S.Container>
			<S.Main>
				<NavMenu />
				<TrackList 
				isLoading={isLoading} 
				tracks={tracks}
				setCurrentTrack={setCurrentTrack} 
				setVisibleAudioPlayer={setVisibleAudioPlayer}
				getTracksError = {getTracksError}/>
				<Sidebar isLoading={isLoading}/>
			</S.Main>
			{visibleAudioPlayer && <AudioPlayer 
				isLoading={isLoading} 
				currentTrack={currentTrack} 
				setVisibleAudioPlayer={setVisibleAudioPlayer}/>}
			<S.Footer></S.Footer>
		</S.Container>
	)
}
export { HomePage };
