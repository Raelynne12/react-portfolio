import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/mbti/logoimg.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <h2 className="title">MBTI TEST</h2>
      </Title>
      <LogoImg>
        <img src={logo} alt="" style={{ borderRadius: "15%" }} />
      </LogoImg>
      <Button
        onClick={() => {
          navigate("/mbti/question");
        }}
      >
        Game Start!
      </Button>
    </Container>
  );
}
const Button = styled.button`
  font-family: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  margin-top: 30px;
  margin-bottom: 100px;
  border-radius: 55px;
  width: 150px;
  height: 50px;
  &:hover {
    color: #f4c210;
  }
`;

const LogoImg = styled.div`
  @keyframes ball {
    0% {
      opacity: 0.2;
    }
    55% {
      opacity: 0.7;
    }
    to {
      opacity: 0.9;
    }
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 100%;
  margin-top: 80px;
  margin-bottom: 30px;
  img {
    filter: brightness(80%);
    width: 200px;
    animation: ball 0.8s ease-in infinite alternate;
  }
`;

const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 50px;
  word-break: keep-all;
  h2 {
    color: #fff;
    letter-spacing: 10px;
    font-size: clamp(50px, 4vw, 100px);
  }
`;
