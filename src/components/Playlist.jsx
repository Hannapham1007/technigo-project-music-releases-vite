import React from 'react';
import "../styles/Playlist.css";
import { AlbumName } from "./AlbumName.jsx";
import { CoverImage } from "./CoverImage.jsx";
import { Description } from "./Description.jsx";

export const Playlist = ({playlistData}) => {
    return (
      <>
          {playlistData.playlists.items.map((item) => (
            <div key={item.id} className="playlist">
                <AlbumName albumName={item} />
                <CoverImage coverImage={item} />
                <Description playlistDesc={item} />
            </div>
          ))}
      </>
      );
    }