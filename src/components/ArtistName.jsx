import React from "react";
import "../styles/ArtistName.css";

export const ArtistName = ({ artistsArray }) => {
  // TODO: Link artist name, Hanna
  return (
    <div className="artist-name">
      {artistsArray.map((artist, index) => {
        return (
          <a key={artist.id} href={artist.external_urls.spotify}>
           <p className="single-artist">{artist.name}</p> 
           {/*if the current artist is not the last one in the array, then adds the comma */}
           {index < artistsArray.length - 1 && <span>, </span>}
          </a>
        );
      })}
    </div>
  );
};
