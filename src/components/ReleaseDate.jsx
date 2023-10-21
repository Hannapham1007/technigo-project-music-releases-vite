import React from "react";
import "../styles/ReleaseDate.css";

export const ReleaseDate = ({releaseDate}) => {
  // TODO: Link album name, Hanna
  return (
    <div className="release-date">
      <p>{releaseDate.split('-')[0]}</p>
    </div>
  );
};