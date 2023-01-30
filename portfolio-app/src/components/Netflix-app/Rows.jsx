import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Rows({ title, fetchURL, type, showNum, showVideo }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(fetchURL);
    setMovies(result.data.results);
  };

  return (
    <Container>
      <div className="wrapper">
        <h2>{title}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={showNum ? showNum : 5}
          spaceBetween={20}
          initialSlide={6}
          pagination={{ clickable: true }}
          speed={1000}
          effect="fade"
          slidesPerGroup={3}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
        >
          {movies.map((item, idx) => {
            return (
              <div className="swiper">
                <SwiperSlide>
                  <MovieItem
                    title={item.title ? item.title : item.name}
                    src={item.poster_path}
                    overview={item.overview}
                    type={type}
                    id={item.id}
                    showVideo={showVideo}
                  ></MovieItem>
                </SwiperSlide>
              </div>
            );
          })}
          <div className="prev nav">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="next nav">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Swiper>
      </div>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  margin: 100px auto 150px;
  padding-bottom: 80px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
  .wrapper {
    width: 1400px;
    margin: auto;
  }
  .swiper {
    overflow: visible;
    width: 1400px;
  }
  h2 {
    font-size: 30px;
    margin-bottom: 50px;
    text-transform: capitalize;
    color: #f2f677;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    color: #fff;

    i {
      font-size: 40px;
    }
  }
  .prev {
    left: 10px;
  }
  .next {
    left: 92%;
  }
  .swiper-pagination {
    bottom: -80px !important;
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    opacity: 1;
    background: none;
    position: static;
    border: 2px solid #fff;
    border-radius: 100px;
    transition: all 0.25s ease;
  }
  .swiper-pagination-bullet-active {
    width: 40px;
    background-color: #fff;
  }
`;
