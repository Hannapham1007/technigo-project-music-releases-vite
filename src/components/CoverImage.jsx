import React from 'react';
import "../styles/CoverImage.css";


export const CoverImage = ({coverImage}) => {

return (
    <div className="cover-image">
        <img src={coverImage.images[1].url}></img> 
    </div>
  );
 }


  