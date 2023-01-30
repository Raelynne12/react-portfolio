import React from "react";
import styled from "styled-components";
import me from "../assets/images/증명사진.jpg";
import Certification from "./Introduce/Certification";
import Stack from "./Introduce/Stack";

export default function AboutMe() {
  return (
    <About>
      <h1>SEOHYEON LEE</h1>
      <div className="intro">
        <p>
          안녕하세요. FrontEnd Engineer를 꿈꾸는 이서현입니다.<br></br>
          사용 가능 언어는 javascript, python, java 등이 있습니다.<br></br>
          <br></br>
          광할한 우주에는 각기 다른, 다르기 때문에 더 아름다운 은하들이
          존재합니다.<br></br>
          수많은 은하와 은하가 서로 충돌하고 합쳐지는 것처럼, 저의 능력과 장점
          그리고 경험들이 서로 어우러져 더 크고 아름다운 은하를 만들어가고
          싶습니다.<br></br>
          시간이 지날수록 더 빠르게 팽창하는 우주처럼, 저 역시 빠르게 성장하고
          발전해나가겠습니다.<br></br>
          <br></br>
        </p>
        <img src={me} alt="" />
      </div>
      <div className="spec">
        <div className="front-end">
          <h2>STACK OF FRONTEND</h2>
          <Stack></Stack>
        </div>
        <div className="certification">
          <h2>CERTIFICATION</h2>
          <Certification></Certification>
        </div>
      </div>
    </About>
  );
}
const About = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: SANGJUGyeongcheonIsland;
    margin-top: 150px;
    margin-bottom: 100px;
    margin-left: clamp(80px, 4vw, 120px);
    font-size: clamp(35px, 4vw, 100px);
    color: #f2f677;
    animation-duration: 1s;
    justify-content: center;
    align-items: center;
    animation-name: slidein;
    font-weight: 1000;
  }
  .intro {
    display: flex;
    flex-direction: row;
    margin: 0 30px 10px 0;
    p {
      padding-right: 120px;
      padding-left: 70px;
      width: 2500px;
      color: #fff;
      line-height: 1.7;
      font-family: ScORE;
      font-size: 20px;
      animation-duration: 1.5s;
      animation-name: slidein;
    }
    img {
      width: 250px;
      height: 300px;
      display: flex;
      margin-top: -220px;
      margin-right: clamp(100px, 8vw, 750px);
      box-shadow: 35px 35px 35px rgb(0, 0, 0, 0.6);
    }
  }
  .spec {
    margin: 50px 40px 50px 0px;
    display: flex;
    flex-direction: row;
    p {
      font-size: 15px;
      font-weight: 900;
      color: #fff;
      padding-left: 20px;
      font-family: ScORE;
    }
    .certification {
      padding: 15px 0px 30px 0px;
      margin: 30px 0px 30px 0px;
      margin-right: 100px;
      border: 3px solid #fff;
      width: clamp(290px, 4vw, 800px);
      height: 600px;
      margin-left: 200px;
      background-color: #0000009d;
      h2 {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        padding-left: 20px;
        margin-top: 10px;
      }
    }
    .front-end {
      border: 3px solid #fff;
      padding: 15px 0px 30px 0px;
      margin: 30px 0px 30px 0px;
      margin-right: 100px;
      margin-left: 120px;
      width: clamp(600px, 4vw, 800px);
      background-color: #0000009d;
      color: #fff;
      h2 {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        padding-left: 20px;
        margin-top: 10px;
      }
    }
  }
`;
