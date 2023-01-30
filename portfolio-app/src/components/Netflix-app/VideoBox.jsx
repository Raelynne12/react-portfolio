import React from "react";
import styled from "styled-components";

export default function VideoBox({ viewChange, videoId }) {
  if (videoId) {
    return (
      <Container className="video-box">
        <iframe
          width="100vw"
          height="100vh"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button
          onClick={() => {
            viewChange(false);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </Container>
      //매개변수 있을 때만 ()호출
    );
  } else {
    return (
      <Container>
        <div className="notfound">
          <h2>there is no video to play</h2>
        </div>
        ``
        <button onClick={() => viewChange(false)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </Container>
    );
  }
}
const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.553);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  iframe {
    width: 1020px;
    height: calc(1020px * (9 / 16));
  }
  button {
    position: absolute;
    right: 150px;
    top: 80px;
    i {
      color: #fff;
      font-size: 60px;
    }
  }
  .notfound {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #111;
    justify-content: center;
    align-items: center;
    h2 {
      color: #fff;
      font-size: 5rem;
      font-weight: 500;
    }
  }
`;
