import React, { useRef, useState } from "react";
import "./Videos.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, message, share }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} share={share} message={message} />
    </div>
  );
}

export default Video;
