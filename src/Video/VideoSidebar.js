import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const initialState = false;

function VideoSidebar({ likes, share, messages }) {
  const [liked, setLike] = useState(initialState);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLike(initialState)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLike(!initialState)} />
        )}
        <p>{likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{share}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
