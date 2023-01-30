import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ movieInfo }) {
  return (
    <Container>
      <List>
        <Link to={`/detail/${movieInfo.id}`}>
          <div className="img-box">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
              alt=""
            ></img>
            <span className="point">{movieInfo.vote_average}</span>
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{movieInfo.title}</h3>
              <p className="original-title">{movieInfo.original_title}</p>
              <p className="open-date">{movieInfo.release_date}</p>
            </div>
            <div className="overview-box">
              <p className="overview">{movieInfo.overview}</p>
              <p className="vote">{movieInfo.vote_count}</p>
            </div>
          </div>
        </Link>
      </List>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const List = styled.li`
  list-style: none;
  opacity: 0.5;
  width: calc(50%-20px);
  margin: 150px 90px 0 90px;
  &:hover {
    opacity: 1;
  }
  a {
    display: flex;
    background-color: rgba(255, 255, 255);
    border-radius: 0 20px 0 20px;
    padding: 20px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    position: relative;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: translateY(-20px);
    }
    .img-box {
      margin-top: -100px;
      border: 5px solid #fff;
      position: relative;
      height: 100%;
      box-shadow: 20px 10px 10px rgba(0, 0, 0, 0.3);
      p {
        color: #fff;
      }
      img {
        vertical-align: top;
        width: 250px;
      }
      .point {
        position: absolute;
        left: 20px;
        bottom: 20px;
        background-color: #212121;
        color: #fff;
        border-radius: 50px;
        display: flex;
        font-size: 15px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        border: 2px solid #fff;
      }
    }
    .info {
      margin-left: 30px;
    }
    .title-box {
      font-size: 20px;
      .original-title {
        font-family: PuradakGentleGothicR;
        border-bottom: 5px dotted rgb(114, 114, 114);
        padding-bottom: 10px;
      }
      h3 {
        font-family: Cafe24ClassicType-Regular;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 15px;
      }
      .open-date {
        font-family: PuradakGentleGothicR;
        margin: 10px 0;
        margin-bottom: 20px;
        font-size: 13px;
      }
    }
    .overview-box {
      margin-top: 40px;
      margin-bottom: 15px;
      font-family: Chosunilbo_myungjo;
      font-size: 15px;
      line-height: 1.5;
      .overview {
        margin-top: 5px;
      }
      .vote {
        position: absolute;
        right: 20px;
        top: 20px;
        padding: 12px;
        background-color: rgb(34, 34, 34);
        color: #fff;
        border-radius: 15px;
        font-size: 15px;
      }
    }
  }
`;
