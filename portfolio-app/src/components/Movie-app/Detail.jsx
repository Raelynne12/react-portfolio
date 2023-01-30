import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile from "./Profile";
import "swiper/css";
import Search from "./Search";

export default function Detail() {
  const key = process.env.REACT_APP_MOVIE_API;
  const movieId = useParams().id;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState("");
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ko-KR`
      )
      .then((res) => {
        setDetail(res.data);
        setGenres(res.data.genres.map((item) => item.name).join("/"));
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`
      )
      .then((res) => {
        setCast(res.data.cast);
      });
  }, [movieId]);
  return (
    <Entire>
      <Container>
        <Search></Search>
        <h3 className="title">{detail.original_title}</h3>
        <div className="detail-box">
          <div className="img-box">
            <img
              src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`}
              alt=""
            ></img>
          </div>
          <div className="info">
            <div className="title-box">
              <p className="original-title">{detail.original_title}</p>
              <p className="open-date">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>genre</dt>
                <dd>{genres}</dd>
              </dl>
              <dl>
                <dt>time</dt>
                <dd>{detail.runtime}</dd>
              </dl>
              <dl>
                <dt>grade</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>vote</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>summary</dt>
                <dd
                  style={{
                    fontFamily: `Chosunilbo_myungjo`,
                    fontWeight: `bold`,
                    lineHeight: 1.5,
                    fontSize: `13px`,
                  }}
                >
                  {detail.overview}
                </dd>
              </dl>
              <dl>
                <dt>casting(swipe)</dt>
                <dd>
                  <Swiper
                    className="cast-list"
                    spaceBetween={30}
                    slidesPerView={"auto"}
                  >
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide className="item">
                          <Profile
                            img={item.profile_path}
                            name={item.name}
                            key={idx}
                            gender={item.gender}
                            id={item.id}
                          ></Profile>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`,
          }}
        ></div>
      </Container>
    </Entire>
  );
}
const Entire = styled.div`
  width: 100%;
`;
const Container = styled.div`
  h3 {
    display: flex;
    flex-direction: row;
    font-size: clamp(40px, 4vw, 50px);
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
    justify-content: center;
    color: #a51717;
    margin-bottom: 90px;
  }
  width: 90%;
  margin-left: 50px;
  margin-bottom: 100px;
  margin-right: 570px;
  margin-top: 120px;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.626);
    }
  }
  .detail-box {
    display: flex;
    align-items: flex-start;
    background-color: rgba(248, 248, 248, 0.7);
    border-radius: 0 50px 0 50px;
    margin-left: 70px;
    .img-box {
      border-radius: 0 50px 0 50px;
      border: 5px solid rgb(241, 241, 241);
      box-shadow: 20px 10px 10px rgba(0, 0, 0, 0.3);
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      flex-shrink: 0;
      img {
        vertical-align: top;
        width: 300px;
      }
    }
    .info {
      margin-left: 0px;
      //margin-right: 100px;
      flex-grow: 1;
      padding-left: 30px;
      padding-top: 10px;
      padding-right: 10px;
      border-radius: 50px 0 50px 0;
      .title-box {
        width: 920px;
        padding-bottom: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 3px dashed rgb(97, 97, 97);
        color: rgb(82, 82, 82);
        font-size: 20px;
        .original-title {
          color: #000;
          margin-bottom: 10px;
        }
        .open-date {
          font-size: 13px;
        }
      }
      .summary {
        width: 920px;
        dl {
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 3px dashed rgb(97, 97, 97);
          dt {
            color: rgb(65, 65, 65);
            font-size: 20px;
            margin-bottom: 10px;
          }
          dd {
            color: rgb(27, 27, 27);
            font-size: 14px;
            font-weight: 500;
            margin-top: 10px;
          }
          .cast-list {
            overflow: hidden;
            margin-top: 20px;
            width: 900px;
            .item {
              width: 120px;
              img {
                width: 90%;
                height: 190px;
                object-fit: cover;
              }
            }
            .profile-info {
              font-size: 13px;
              text-align: center;
              margin-top: 5px;
            }
          }
          .movie-list {
            overflow: hidden;
            .item {
              width: 120px;
              img {
                height: 100%;
                object-fit: cover;
              }
            }
            .movie-info {
              font-size: 16px;
              text-align: center;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
`;
