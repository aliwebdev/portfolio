import React, { useEffect, useState, useRef } from "react";
import "./scrollup.css";
import music from "../../assets/playing.mp3";

const Scrollup = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button href="#!" className="scrollUp" onClick={toggleAudio}>
      <i className={isPlaying ? "uil uil-music-tune-slash scrollUp-icon" : "uil uil-music scrollUp-icon"}></i>
    </button>
  );
};

export default Scrollup;
