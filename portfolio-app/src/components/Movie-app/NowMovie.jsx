import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NowMovie({ id }) {
  return (
    <Container>
      <List>
        <Link to={`/detail/${id.id}`}>
          <div className="img-box">
            <img
              src={`https://image.tmdb.org/t/p/w200/${id.poster_path}`}
              alt=""
            />
            <span className="point">{id.vote_average}</span>
          </div>
          <div className="info">
            <div className="title-box">
              <h3>{id.originatl_title}</h3>
              <p className="original-title">{id.original_title}</p>
              <p className="open-date">{id.release_date}</p>
            </div>
            <div className="overview-box">
              <p className="overview">{id.overview}</p>
              <p className="vote">{id.vote_count}</p>
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
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  list-style: none;
  width: calc(50%-20px);
  margin: 150px 10px 0 10px;
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
      border: 7px solid #fff;
      position: relative;
      box-shadow: 20px 10px 10px rgba(0, 0, 0, 0.3);
      p {
        color: #fff;
      }
      img {
        vertical-align: top;
        width: 380px;
      }
      .point {
        position: absolute;
        left: 20px;
        bottom: 20px;
        background-color: #212121;
        color: #fff;
        border-radius: 50px;
        display: flex;
        font-size: 20px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        width: 85px;
        height: 85px;
        border: 4px solid #fff;
      }
    }
    .info {
      margin-left: 30px;
    }
    .title-box {
      font-size: 30px;
      .original-title {
        font-family: PuradakGentleGothicR;
        padding-bottom: 10px;
        font-family: Cafe24ClassicType-Regular;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 15px;

        border-bottom: 7px dotted #000;
      }
      .open-date {
        font-family: PuradakGentleGothicR;
        margin: 10px 0;
        margin-bottom: 20px;
      }
    }
    .overview-box {
      margin-top: 40px;
      margin-bottom: 20px;
      font-family: Chosunilbo_myungjo;
      font-size: 30px;
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
        font-size: 25px;
      }
    }
  }
`;
