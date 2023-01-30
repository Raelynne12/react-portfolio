import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import YoutubeHeader from "./YoutubeHeader";
import GotoVideo from "./GotoVideo";
import PopularList from "./PopularList";

export default function YoutubeMain() {
  const api = process.env.REACT_APP_YOUTUBE_API;
  const showMain = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&regionCode=KR&videoCategoryId=10&key=${api}`
      )
      .then((res) => {
        setVideos(res.data.items);
        setIsDetail(false);
      });
  };

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    showMain();
  }, []);

  const [isDetail, setIsDetail] = useState(false);

  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    setVideoInfo({
      id: "zuoSn3ObMz4",
      title: "NCT Dream - Candy",
      description: "Repackage Album",
    });
  }, []);
  const selectVideo = (videoInfo) => {
    setVideoInfo({
      id: videoInfo.id.videoId ? videoInfo.id.videoId : videoInfo.id,
      title: videoInfo.title,
      description: videoInfo.description,
    });
    setIsDetail(true);
  };

  const onSearch = (searchText) => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&language=ko-KR&key=${api}&maxResults=6&order=rating&q=${searchText}&regionCode=KR`
      )
      .then((res) => setVideos(res.data.items));
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      <YoutubeHeader onSearch={onSearch} showMain={showMain}></YoutubeHeader>
      {isDetail && (
        <GotoVideo
          id={videoInfo.id}
          title={videoInfo.title}
          description={videoInfo.description}
        ></GotoVideo>
      )}
      <PopularList
        videos={videos}
        selectVideo={selectVideo}
        scrollTop={scrollTop}
      ></PopularList>
    </Container>
  );
}

const Container = styled.div`
  .main {
    width: 2300px;
    margin: auto;
    .detail {
      iframe {
        width: 100%;
        font-size: 34px;
        font-size: 30px;
        margin-bottom: 10px;
      }
      p {
        color: #fff;
        line-height: 1.5;
      }
    }
    &.detail-view {
      display: flex;
      .container {
        margin-top: 0;
      }
      .detail {
        width: 70%;
        flex-shrink: 0;
        iframe {
          width: 100%;
          height: calc() (1400px * 0.7 * 9/16);
        }
      }
    }
  }
`;
