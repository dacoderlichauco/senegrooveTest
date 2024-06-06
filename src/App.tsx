import React, {useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import wave from "./media/sound-wave.png";


function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);



  return (
    <div>
      <Button imagesrc = {wave} audiosrc={`${process.env.PUBLIC_URL}/media/meme.mp3`} isPlaying = {isPlaying} audioRef = {audioRef} setIsPlaying={setIsPlaying}/>
      <Button imagesrc = {wave} audiosrc={`${process.env.PUBLIC_URL}/media/error.mp3`} isPlaying = {isPlaying} audioRef = {audioRef} setIsPlaying={setIsPlaying}/> 
      <Button imagesrc = {wave} audiosrc={`${process.env.PUBLIC_URL}/media/bombasticSideEye.mp3`} isPlaying = {isPlaying} audioRef = {audioRef} setIsPlaying={setIsPlaying}/> 
    </div>
  );
}

export default App;
