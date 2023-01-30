import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import requests from "../../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  EffectCube,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import "../css/pagination.css";
import MovieItem from "./MovieItem";

export default function MainVisual({ showVideo }) {
  const [movie, setMovie] = useState([]);
  //const[img, setImg] = useState("")
  useEffect(() => {
    loadMovieData();
  }, []);

  const loadMovieData = async () => {
    const result = await api.get(requests.fetchNowPlaying);
    //console.log(result.data.results[0].backdrop_path)
    setMovie(result.data.results);
    console.log(result.data.results);
  };

  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };

  return (
    <Container>
      <Swiper
        modules={[EffectFade, EffectCube, Autoplay, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
      >
        {movie
          .filter((item, idx) => {
            if (idx < 10) {
              return true;
            }
          })
          .map((item, idx) => {
            return (
              <SwiperSlide>
                <MovieItem
                  title={item.title}
                  src={item.backdrop_path}
                  overview={ellipsis(item.overview, 150)}
                  type="main"
                  id={item.id}
                  showVideo={showVideo}
                ></MovieItem>
              </SwiperSlide>
            );
          })}
        <div className="prev nav">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="next nav">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 300px;
  .main {
    height: 100vh;
    text-align: left;
    .img {
      position: relative;
      :before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .info {
      padding-left: 250px;
      color: #fff;
      position: absolute;
      top: 60%;
      transform: translateY(-50%);
      left: 0px;
      h2 {
        font-size: 30px;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }
      .btns {
        margin: 20px 0;
        button {
          cursor: pointer;
          padding: 5px;
          background-color: #9e1111;
          color: #fff;
          font-size: 15px;
          border-radius: 5px;
          margin-right: 5px;
          text-transform: uppercase;
          font-weight: 500;
        }
      }
      p {
        line-height: 2;
        padding-top: 10px;
        max-width: 500px;
        font-size: 15px;
        font-family: PuradakGentleGothicR;
        word-break: keep-all;
      }
    }
  }
  height: 100vh;
  overflow: hidden;
  .nav {
  }
  .prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
    z-index: 2;
    color: #fff;
    i {
      font-size: 46px;
    }
  }
  .next {
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    z-index: 2;
    color: #fff;
    i {
      font-size: 46px;
    }
  }
  .swiper-pagination {
    bottom: 50px !important;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    opacity: 1;
    background: none;
    border: 2px solid #fff;
    border-radius: 100px;
    transition: all 0.25 ease;
  }
  .swiper-pagination-bullet-active {
    width: 70px;
    background-color: #fff;
  }
`;
