import { tracks } from "../tracks.data";
import "../styles/Track.css";

const Track = () => {
  return (
    <div className="content__playlist playlist">
      {tracks.length ? (
        tracks.map((track) => (
          <div key={track.id} className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="{track.name}">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    {track.name} <span className="track__title-span"></span>
                    <span className="track__title-span">{track.subname}</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  {track.author}
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  {track.album}
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">{track.time}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </div>
  );
};

export default Track;
