import React, {useState, useRef } from 'react';
import "./Button.css";
import wave from "./media/sound-wave.png";

type ButtonProps = {
    imagesrc: string;
    audiosrc: string;
    isPlaying: boolean;
    audioRef: any;
    setIsPlaying: any;
}

function Button({imagesrc, audiosrc, isPlaying, audioRef, setIsPlaying}: ButtonProps) {
    
    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            setIsPlaying(true)
        }

        audioRef.current = new Audio(audiosrc)
        audioRef.current.play()

    }

    return (<div className="center">
        <img onClick={handleClick} src={imagesrc}>
        </img>
    </div>);
}

export default Button;