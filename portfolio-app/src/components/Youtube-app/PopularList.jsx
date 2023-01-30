import React from "react";
import styled from "styled-components";
import PopularVideo from "./PopularVideo";

export default function PopularList({ videos, selectVideo, scrollTop }) {
  return (
    <Container>
      <ul className="video-list">
        {videos.map((item, idx) => {
          return (
            <PopularVideo
              id={item}
              key={idx}
              selectVideo={selectVideo}
              scrollTop={scrollTop}
            ></PopularVideo>
          );
        })}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  ul {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 50px 0 50px;
  }
`;
