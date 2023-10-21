import React from "react";
import "../styles/ArtistName.css";

export const ArtistName = ({ artistsArray }) => {
  // TODO: Link artist name, Hanna
  return (
    <div className="artist-name">
      {artistsArray.map((artist, index) => {
        if(artistsArray.length == 1) { // If only one artist, display as usual
          return(
            <a key={artist.id} href={artist.external_urls.spotify}>
              <p className="single-artist">{artist.name}</p> 
            </a>
          );
        }else { // Else if several artists, add logic for separation text
          let lastArtist = artistsArray[artistsArray.length-1];
          return (
            <a key={artist.id} href={artist.external_urls.spotify}>
              {/* if the current artist is last one, add ampersand before */}
              <span>{ (artist.id == lastArtist.id ? '& ' : ' ') }</span>
              <p className="single-artist">{artist.name}</p> 
              {/* if the current artist is not next-to-last one in the array, add comma */}
              <span>{ (index < artistsArray.length - 2 ? ', ' : ' ') }</span>
            </a>
          );
        }
      })}
    </div>
  );
};
