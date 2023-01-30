import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import Search from "./Search";

export default function List() {
  const key = process.env.REACT_APP_MOVIE_API;
  console.log(key);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko-KR&page=1`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
    <Container>
      <Search></Search>
      <Title>
        <p className="popular">
          <Link to="/movie/popular">POPULAR MOVIE</Link>
        </p>
        <p className="now-play">
          <Link to="/movie/now">NOW PLAYING</Link>
        </p>
      </Title>
      <ul className="movie-list">
        {movies.map((item, idx) => {
          return <Movie movieInfo={item} key={idx}></Movie>;
        })}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  color: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  //height: 900px;
  margin: 100px auto;
`;
const Title = styled.h2`
  p {
    &:hover {
      color: #f2f677;
    }
  }
  display: flex;
  flex-direction: row;
  font-size: clamp(20px, 4vw, 40px);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  justify-content: space-between;
  color: #961111;
  margin-bottom: 50px;
  .now-play {
    margin-right: 90px;
  }
  .popular {
    margin-left: 90px;
  }
`;
