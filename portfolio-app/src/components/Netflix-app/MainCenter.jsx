import React, { useState } from "react";
import MainContent from "./MainContent";
import MainVisual from "./MainVisual";
import VideoBox from "./VideoBox";
import styled from "styled-components";

export default function MainCenter() {
  const [view, setView] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const viewChange = (isView) => {
    setView(isView);
  };

  const showVideo = (id) => {
    setView(true);
    setVideoId(id);
  };

  return (
    <Entire>
      <MainVisual showVideo={showVideo}></MainVisual>
      <MainContent showVideo={showVideo}></MainContent>
      {view && <VideoBox viewChange={viewChange} videoId={videoId}></VideoBox>}
    </Entire>
  );
}
const Entire = styled.div`
  width: 100%;
`;
