import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import NavMenu from "./components/NavMenu";
import Sidebar from "./components/Sidebar";
import TrackList from "./components/TrackList";
import React from "react";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </main>
        <AudioPlayer isLoading={isLoading} />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
