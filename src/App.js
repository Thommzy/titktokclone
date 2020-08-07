import React from "react";
import "./App.css";
import Video from "./Video/Video";

const messagesconst = 16;
const shareconst = 232;
const likesconst = 303;
const channelconst = "koredebello";
const descriptionconst = "why you gon do like dat!";
const songconst = "like dat ∏";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/dc2fdeadb048a7380969b854c40fc310/5f2e686f/video/tos/useast2a/tos-useast2a-ve-0068c001/6ec6fe2b3cc347828ebd6551d2555d37/?a=1233&br=1660&bt=830&cr=0&cs=0&dr=0&ds=3&er=&l=202008060855100101901851372200CC42&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3A3czVyOnNndDMzNjczM0ApNzQ2ZjgzZ2Q7Nzs2O2ZkN2dhMnMwbDBeYG9fLS1eMTZzcy8tLzItXy4zYDRiYWNjYC46Yw%3D%3D&vl=&vr="
          share={shareconst}
          messages={messagesconst}
          likes={likesconst}
          song={songconst}
          channel={channelconst}
          description={descriptionconst}
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
