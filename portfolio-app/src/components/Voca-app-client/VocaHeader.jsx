import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function VocaHeader() {
  return (
    <>
      <Container>
        <h1>
          <Link to="/voca">PLANET VOCA</Link>
        </h1>
        <nav>
          <ul>
            <li className="day btn">
              <Link to="/voca/insert/day">ADD DAY</Link>
            </li>
            <li className="voca btn">
              <Link to="/voca/insert/voca">ADD VOCA</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 150px 0 100px 0;
    font-size: clamp(70px, 4vw, 100px);
    letter-spacing: 10px;
    font-weight: bold;
    color: #fff;
    &:hover {
      letter-spacing: 15px;
    }
  }
  nav {
    position: absolute;
    right: 50px;
    top: 100px;
    ul {
      display: flex;
      gap: 10px;
      align-items: center;
      height: 60px;
      li {
        a {
          padding: 15px;
          color: #fff;
          border-radius: 5px;
          font-size: clamp(30px, 4vw, 40px);
        }
        &.voca {
          a {
            color: #c71212;
          }
        }
        &.day {
          a {
            color: #e8dd0d;
          }
        }
      }
    }
  }
`;
