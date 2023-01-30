import React from "react";
import styled from "styled-components";
import github from "../../assets/images/github.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import sass from "../../assets/images/sass.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import jquery from "../../assets/images/jquery.png";
import netlify from "../../assets/images/netlify.png";
import js from "../../assets/images/js.png";
import css from "../../assets/images/css.png";
import es6 from "../../assets/images/es6.png";
import style from "../../assets/images/styled.png";

export default function Stack() {
  return (
    <Stacks>
      <div className="front">
        <h3>Frontend</h3>
        <table width={290} border="0" align="center">
          <tr className="front-stack">
            <th>html</th>
            <th>css</th>
            <th>js</th>
            <th>es6</th>
            <th>style</th>
          </tr>
          <tr>
            <th>
              <img src={html} alt=""></img>
            </th>
            <th>
              <img src={css} alt=""></img>
            </th>
            <th>
              <img src={js} alt=""></img>
            </th>
            <th>
              <img src={es6} alt=""></img>
            </th>
            <th>
              <img src={style} alt=""></img>
            </th>
          </tr>
          <tr className="front-stack">
            <th>sass</th>
            <th>react</th>
            <th>redux</th>
            <th>jquery</th>
          </tr>
          <tr>
            <th>
              <img src={sass} alt=""></img>
            </th>
            <th>
              <img src={react} alt=""></img>
            </th>
            <th>
              <img src={redux} alt=""></img>
            </th>
            <th>
              <img src={jquery} alt=""></img>
            </th>
          </tr>
        </table>
      </div>
      <div className="version-control">
        <h3>Version-control</h3>
        <table width={290} border="0" align="center">
          <tr className="front-stack">
            <th>git</th>
            <th>github</th>
            <th>netlify</th>
          </tr>
          <tr>
            <th>
              <img src={git} alt=""></img>
            </th>
            <th>
              <img src={github} alt=""></img>
            </th>
            <th>
              <img src={netlify} alt=""></img>
            </th>
          </tr>
        </table>
      </div>
    </Stacks>
  );
}
const Stacks = styled.div`
  border-top: 4px dotted #fff;
  margin-top: 20px;
  width: clamp(600px, 4vw, 395px);
  display: flex;
  flex-direction: column;
  .front .deployment .version-control {
    padding: 20px 35px 10px 35px;
    display: flex;
    /* flex-flow: row wrap; */
    flex-shrink: 1;
  }
  .front {
    margin-top: 10px;
  }
  .version-control {
    margin-top: 40px;
  }
  h3 {
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
    font-family: ScORE;
    display: grid;
    margin-left: 20px;
    font-weight: bold;
  }
  img {
    margin: 10px 30px 10px 30px;
    width: 50px;
    height: 50px;
  }
`;
