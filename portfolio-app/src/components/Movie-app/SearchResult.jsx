import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Movie from "./Movie";
import Search from "./Search";

export default function SearchResult() {
  const key = process.env.REACT_APP_MOVIE_API;

  const [searchParams] = useSearchParams();
  const searchmovie = searchParams.get("movie");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-KR&page=1&query=${searchmovie}`
      )
      .then((res) => setMovies(res.data.results));
  }, [searchmovie]);
  return (
    <Container>
      <Search></Search>
      <h2>{searchmovie}</h2>
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
  margin: 100px auto;
  margin-top: 150px;
  h2 {
    display: flex;
    flex-direction: row;
    font-size: clamp(30px, 4vw, 50px);
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
    justify-content: center;
    color: #a51717;
    margin-bottom: 30px;
  }
`;
