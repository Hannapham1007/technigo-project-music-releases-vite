import React from 'react';
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = ({albumData}) => {
    return (
        <div className="album-container">
          {albumData.albums.items.map((item) => (
            <div key={item.id} className="album">
              <CoverImage coverImage={item} />
              <AlbumName albumName={item} />
              <ArtistName  artistsArray={item.artists} />
            </div>
          ))}
        </div>
      );
    }