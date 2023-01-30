import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../../assets/data/Result";
import styled from "styled-components";

export default function Result() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [result, setResult] = useState({});
  useEffect(() => {
    const selectedCat = ResultData.find((item, idx) => {
      return item.best === mbti;
    });
    setResult(selectedCat);
  }, [mbti]);

  return (
    <Container>
      <Title>MBTI 테스트 결과는 ?</Title>
      <LogoImg>
        <img src={result.image} alt={result.name} />
      </LogoImg>
      <Results>{result.name}</Results>
      <Desc>{result.desc}</Desc>
      <Button onClick={() => navigate("/mbti")}>TEST AGAIN</Button>
    </Container>
  );
}
const Container = styled.div`
  background-color: #000;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoImg = styled.div`
  img {
    width: 200px;
    box-shadow: 30px 30px 30px rgb(0, 0, 0, 0.8);
  }
`;
const Title = styled.div`
  color: #fff;
  font-size: clamp(20px, 5vw, 40px);
  margin-top: 100px;
  margin-bottom: 160px;
`;
const Results = styled.h2`
  color: #fff;
  margin-top: 70px;
  font-weight: bold;
  letter-spacing: 10px;
  font-size: clamp(25px, 4vw, 48px);
`;
const Desc = styled.div`
  color: #fff;
  margin: 100px 300px 70px 300px;
  line-height: 1.5;
  font-size: 15px;
  font-family: PuradakGentleGothicR;
`;
const Button = styled.div`
  background-color: #dffe2b;
  color: #000;
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 100px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #fff;
  }
  cursor: pointer;
`;
