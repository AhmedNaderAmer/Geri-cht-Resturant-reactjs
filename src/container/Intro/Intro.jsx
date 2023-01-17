/** @format */

import React from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
} from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] =
    React.useState(false);

  const videoRef = React.useRef();
  const playHandler = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <div className='app__video '>
      <video
        src={meal}
        type='video/mp4'
        loop
        muted
        controls={false}
        ref={videoRef}
      />
      <div
        className='app__video-overlay flex__center'
        style={
          !playVideo
            ? { background: " rgb(0, 0, 0, 0.6)" }
            : { background: "rgb(0, 0, 0, 0)" }
        }>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={playHandler}>
          {playVideo ? (
            <BsPauseFill
              size={27}
              color='white'
            />
          ) : (
            <BsFillPlayFill
              size={27}
              color='white'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
