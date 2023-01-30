import React from "react";
import { Link } from "react-router-dom";
import none from "../../assets/images/none.png";
import styled from "styled-components";
export default function MovieItem({ poster, title, id }) {
  return (
    <Container>
      <Link to={`/detail/${id}`}>
        <div className="movie-img">
          {poster ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster}`}
              alt={title}
            />
          ) : (
            <img src={none} alt={title} style={{ height: "230px" }} />
          )}
        </div>
        <div className="movie-info">
          <p>{title}</p>
        </div>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  //background-color: #fff;
  .movie-info {
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
  }
`;
