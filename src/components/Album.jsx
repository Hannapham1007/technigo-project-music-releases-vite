import React from 'react';
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";
import { ReleaseDate } from "./ReleaseDate.jsx";

export const Album = ({albumData}) => {
    return (
      <>
          {albumData.map((item) => (
            <div key={item.id} className="album">
              <CoverImage coverImage={item} />
              <ReleaseDate releaseDate={item.release_date} />
              <AlbumName albumName={item} />
              <ArtistName  artistsArray={item.artists} />
            </div>
          ))}
      </>
      );
    }