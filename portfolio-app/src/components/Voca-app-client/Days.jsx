import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VocaHeader from "./VocaHeader";

export default function Days() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/days").then((res) => setDays(res.data));
  }, []);

  return (
    <>
      <VocaHeader></VocaHeader>
      <Container>
        <h2>학습할 날짜를 선택하세요.</h2>
        <ul>
          {days.map((item, idx) => {
            return (
              <li key={item.id}>
                <Link to={`/voca/day/${item.day}`}>day{item.day}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
const Container = styled.div`
  margin: 100px 0;
  h2 {
    font-size: 44px;
    color: #fff;
    margin-bottom: 50px;
    letter-spacing: 7px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000d8;
        color: #fff;
        border-radius: 100px;
        padding: 20px 40px;
        text-transform: uppercase;
      }
    }
  }
`;
