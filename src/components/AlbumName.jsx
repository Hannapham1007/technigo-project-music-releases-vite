import React from "react";
import "./AlbumName.css";

export const AlbumName = ({albumName}) => {
  // TODO: Link album name, Hanna
  return (
    <div className="album-name">
      <a href={albumName.external_urls.spotify}>{albumName.name}</a>
    </div>
  );
};
