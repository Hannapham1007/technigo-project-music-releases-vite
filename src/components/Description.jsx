import React from "react";
import "../styles/Description.css";

export const Description = ({playlistDesc}) => {
  // TODO: Link album name, Hanna
  return (
      <p>{playlistDesc.description}</p>
  );
};