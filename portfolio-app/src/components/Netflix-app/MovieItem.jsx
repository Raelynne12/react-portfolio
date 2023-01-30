import React from "react";
import styled from "styled-components";
import api from "../../api/api";
import requests from "../../api/requests";

export default function MovieItem({
  title,
  src,
  overview,
  type,
  id,
  showVideo,
}) {
  return (
    <Container>
      <div className={type}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/original/${src}`} alt="" />
        </div>
        <div className="info">
          <h2>{title}</h2>
          <div className="btns">
            <button
              className="play"
              onClick={() => {
                //console.log(id)
                api
                  .get(`${requests.fetchMovie}/${id}`, {
                    params: {
                      append_to_response: "videos", //이렇게 하면 비디오가 넘어옴
                    },
                  })
                  .then((res) => {
                    const videos = res.data.videos.results;
                    console.log(videos);
                    if (videos.length > 0)
                      showVideo(res.data.videos.results[0].key);
                    else showVideo(null);
                  })
                  .catch((err) => showVideo(null));
              }}
            >
              play
            </button>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .banner {
    height: auto;
    text-align: left;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .img {
      position: relative;
    }
    img {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      vertical-align: top;
    }
    .info {
      background-color: #fff;
      color: #000;
      box-sizing: border-box;
      padding: 10px;
      padding-bottom: 30px;
      width: 100%;
      h2 {
        border-top: 3px dashed #000;
        padding-top: 14px;
        font-size: 15px;
        font-weight: 500;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        line-height: 1.5;
        height: 3em;
        color: #000;
        overflow: hidden;
        margin-bottom: -15px;
      }
      .btns {
        margin: 20px 0;
        button {
          cursor: pointer;
          padding: 5px;
          background-color: #fff;
          font-size: 10px;
          border-radius: 5px;
          margin-right: 5px;
          text-transform: uppercase;
          font-weight: 500;
          background-color: #9e1111;
          color: #fff;
        }
      }
      p {
        //width: 80%;
        line-height: 1.5;
        height: 4.5em;
        font-family: face;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 11px;
        word-break: keep-all;
      }
    }
  }
`;
