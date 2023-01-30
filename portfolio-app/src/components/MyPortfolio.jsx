import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <>
      <High>
        <div className="movie">
          <Link to="/movie/popular">Movie App</Link>
        </div>
        <div className="youtube">
          <Link to="/youtube">YouTube App</Link>
        </div>
      </High>
      <High>
        <div className="netflix">
          <Link to="/netflix">Netflix App</Link>
        </div>
        <div className="mbti">
          <Link to="/mbti">MBTI Test</Link>
        </div>
        {/* <div className="crawling">
          <Link to="/diary">Diary App</Link>
        </div> */}
      </High>
    </>
  );
}
const High = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  @keyframes ball {
    0% {
      opacity: 0.2;
      box-shadow: 30px 30px 30px rgb(0, 0, 0, 0.9);
    }
    25% {
      opacity: 0.3;
    }
    65% {
      box-shadow: -30px 30px 30px rgb(0, 0, 0, 0.9);
    }
    to {
      opacity: 0.8;
    }
  }
  .movie {
    background-image: url("https://png.pngtree.com/element_pic/28/03/20/1656f9314b523cf.jpg");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 510px;
    background-position-x: -145px;
    background-position-y: -128px;
    animation: ball 2s ease-in infinite alternate;
  }
  .voca {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 900px;
    background-position-x: -20px;
    background-position-y: -50px;
  }
  .todolist {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 880px;
    background-position-x: -450px;
    background-position-y: -630px;
  }
  .mbti {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 1150px;
    background-position-x: -30px;
    background-position-y: -60px;
    animation: ball 2.2s ease-in infinite alternate;
  }
  .diary {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfzTnlgNtcO2dV1RkaxJQXbZP61R9OaIXPVRduS4OFAKvYWaHlFX4ihNWoncboSYS0UY&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 230px;
    background-position-x: -20px;
    background-position-y: -28px;
  }
  .youtube {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dGIXLv93ge9d1bIKsJU_QYc75YW7r-iK_Q&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 500px;
    background-position-x: -110px;
    background-position-y: -58px;
    animation: ball 2.2s ease-in infinite alternate;
  }
  .netflix {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeKfGgu4GTGCiW1Uoz4ru_REfnDaxclVpug&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 450px;
    background-position-x: -100px;
    background-position-y: -58px;
    animation: ball 2.3s ease-in infinite alternate;
  }
  .crawling {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnEq5wQtfV6ha6AIkRgf4RuaW3-_FNCmhbg&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 505px;
    background-position-x: -135px;
    background-position-y: -68px;
    animation: ball 2.2s ease-in infinite alternate;
  }
  .movie,
  .youtube,
  .netflix,
  .mbti,
  .voca,
  .diary,
  .todolist,
  .crawling {
    &:hover {
      font-size: 28px;
    }
    border: 2px solid #222222b4;
    display: relative;
    justify-content: space-evenly;
    box-shadow: -55px 55px 55px rgba(0, 0, 0, 0.7);
    color: #fff;
    height: 250px;
    width: 250px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 25px;
    line-height: 250px;
    border-radius: 2000px;
    text-decoration: underline;
    text-underline-position: under;
  }
`;
