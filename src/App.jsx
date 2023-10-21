import data from "./data.json";
import playlistdata from "./stretched-goal.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";
import { Playlist } from "./components/Playlist.jsx";

// Separate albums and singles
let albumData = new Array();
let singleData = new Array();
data.albums.items.forEach(item => {
  if(item.album_type === "album") {
    albumData.push(item);
  }else {
    singleData.push(item);
  }
});

export const App = () => {
  return (
    <div className="page-container">
      <div className="menu-container">
        <div className="left-container">
          <Header />
          <h3 className="section">Singles</h3>
          <div className="album-container">
            <Album albumData={singleData} />
          </div>
          <h3 className="section">Albums</h3>
          <div className="album-container">
            <Album albumData={albumData} />
          </div>
        </div>
        <div className="right-container">
          <div className="sidebar-container">
            <h3 className="section">Playlists</h3>
            <Playlist playlistData={playlistdata} />
          </div>
        </div>
      </div>
    </div>
  );
};
