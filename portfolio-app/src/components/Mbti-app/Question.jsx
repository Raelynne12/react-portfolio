import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../../assets/data/Question";

export default function Question() {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const total = QuestionData.length - 1;
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const onClick = (point, type) => {
    const newScore = totalScore.map((item) => {
      return item.id === type
        ? { id: item.id, score: item.score + point }
        : item;
    });
    setTotalScore(newScore);
    setQuestionNo(questionNo + 1);
    if (questionNo < total) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, current) =>
          acc +
          (current.score >= 2 ? current.id.charAt(0) : current.id.charAt(1)),
        ""
      );
      navigate(`/mbti/result?mbti=${mbti}`);
    }
  };

  return (
    <Container>
      <Progress>
        <div className="inner">
          <div
            className="bar"
            style={{ width: `${(questionNo / 12) * 100}%` }}
          ></div>
        </div>
      </Progress>
      <Title>{QuestionData[questionNo].title}</Title>
      <Buttons>
        <Button
          className="left"
          onClick={() => {
            onClick(1, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          className="right"
          onClick={() => {
            onClick(0, QuestionData[questionNo].type);
          }}
        >
          {QuestionData[questionNo].answerb}
        </Button>
      </Buttons>
    </Container>
  );
}
const Progress = styled.div`
  //padding: 0 100px 0 100px;
  //width: 100%;
  display: flex;
  left: 80px;
  opacity: 0.7;
  margin-top: 80px;
  box-sizing: border-box;
  .inner {
    width: 100%;
    border-radius: 15px;
    height: 25px;
    margin: 20px 240px 50px 240px;
    border: 2px solid #000;
    background-color: #fff;
    overflow: hidden;
    .bar {
      background-color: #b82a17;
      height: 100%;
      transition: all 0.25s ease;
      border-right: 3px solid #000;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 50px;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  outline: none;
  background-color: #d5cb37ce;
  padding: 10px;
  margin-right: 50px;
  margin-left: 50px;
  border-radius: 10px;
  color: #000;
  font-size: 15px;
  font-weight: lighter;
  font-family: inherit;
  .left {
    margin-left: 500px;
  }
  .right {
    margin-right: 500px;
  }
  width: calc(20% - 10px);
  word-break: keep-all;
  flex-grow: 0;
  flex-shrink: 0;
  border: 4px dashed #000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 50px 50px;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  justify-content: center;
  margin: 100px 200px 0px 200px;
  color: #fff;
  letter-spacing: 5px;
  font-size: clamp(10px, 4vw, 20px);
  word-break: keep-all;
`;
