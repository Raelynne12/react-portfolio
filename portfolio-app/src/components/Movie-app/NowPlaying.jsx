import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import NowMovie from "./NowMovie";
import Search from "./Search";

export default function NowPlaying() {
  const key = process.env.REACT_APP_MOVIE_API;
  const [nowplay, setNowplay] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko-KR&page=1`
      )
      .then((res) => {
        setNowplay(res.data.results);
      });
  }, []);

  return (
    <Container>
      <Search></Search>
      <h2>
        <p className="popular">NOW PLAYING</p>
        <p className="now-play">
          <Link to="/movie/popular">POPULAR MOVIE</Link>
        </p>
      </h2>
      <ul className="now-list">
        {nowplay.map((item, idx) => {
          return (
            <NowMovie
              id={item}
              title={item.title}
              poster={item.poster_path}
              key={idx}
            ></NowMovie>
          );
        })}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  color: #fff;
  justify-content: center;
  align-items: center;
  width: 2000px;
  //height: 900px;
  margin: 100px auto;
  h2 {
    display: flex;
    flex-direction: row;
    font-size: clamp(40px, 4vw, 68px);
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    justify-content: space-between;
    color: #961111;
    margin-bottom: 50px;
  }
`;
