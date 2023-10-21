import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

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

console.log("Albums:", albumData);

export const App = () => {
  return (
    <div className="page-container">
      <Header />
      <p className="section">Singles</p>
      <div className="album-container">
        <Album albumData={singleData} />
      </div>
      <p className="section">Albums</p>
      <div className="album-container">
        <Album albumData={albumData} />
      </div>
    </div>
  );
};
