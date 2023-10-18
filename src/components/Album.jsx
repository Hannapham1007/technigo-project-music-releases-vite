import React from 'react';
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";
import { CoverImage } from "./CoverImage.jsx";

export const Album = (props) => {
    return <div>
        <CoverImage />
        <AlbumName key={props.albumName} name={props.albumName} />
        <ArtistName key={props.artistName} name={props.artistName} />
    </div>
}