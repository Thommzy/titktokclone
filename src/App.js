import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video/Video";
import db from "./Firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("tiktokvideos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, share, message, likes, song, channel, description }) => (
            <Video
              key={url}
              share={share}
              message={message}
              likes={likes}
              song={song}
              channel={channel}
              description={description}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
