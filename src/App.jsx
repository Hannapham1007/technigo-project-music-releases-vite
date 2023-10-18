import data from "./data.json";
import { Album } from "./components/Album.jsx";
import { Header } from "./components/Header.jsx";

//console.log(data);
let albums = data.albums.items;

export const App = () => {
  return(
    <>
    <Header />
    <div id="album-container">
      {
      albums.map((album) => {
        return <Album key={album.id} albumName={album.name} artistName={album.artists[0].name}/>
      })
      }
    </div>
    </>
  )
};
