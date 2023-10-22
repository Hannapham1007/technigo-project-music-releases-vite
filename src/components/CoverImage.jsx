import React, { useState } from 'react';
import "../styles/CoverImage.css";
import dotsIcon from "../assets/icons/dots.svg";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";

export const CoverImage = ({coverImage}) => {
    const [isHidden, setIsHidden] = useState(true)

    const styleIsHidden = {visibility: isHidden ? 'hidden' : 'visible'}

    return (
        <div className="cover-image" onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}>
            <span className="icons-container" style={styleIsHidden}>
                <img src={heartIcon} alt="heart icon" className="icon"/>
                <img src={playIcon} alt="play icon" className="icon"/>
                <img src={dotsIcon} alt="dots icon" className="icon"/>
            </span>
            <img src={coverImage.images[0].url} />
        </div>
    );
}


  