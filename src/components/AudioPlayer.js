import AudioPlayerControls from "./AudioPlayerControls";
import AudioPlayerTrack from "./AudioPlayerTrack";
import AudioPlayerVolume from "./AudioPlayerVolume";
import "../styles/AudioPlayer.css";

const AudioPlayer = () => {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <AudioPlayerControls />
            <AudioPlayerTrack />
          </div>
          <AudioPlayerVolume />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
