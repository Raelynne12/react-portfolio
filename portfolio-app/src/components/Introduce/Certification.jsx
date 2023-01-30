import React from "react";
import styled from "styled-components";

export default function Certification() {
  return (
    <Certificate>
      <ul>
        <li className="lists">
          <p>정보처리기사</p>
          <p>ADsP</p>
          <p>TOEIC Speaking 170(AL)</p>
          <p>TOEIC 870</p>
          <p>한국사 1급</p>
          <p>컴퓨터활용능력 2급</p>
          <p>ITQ</p>
          <p>Auto CAD 2급</p>
          <p>COS 1급</p>
        </li>
      </ul>
    </Certificate>
  );
}
const Certificate = styled.div`
  border-top: 4px dotted #fff;
  margin-top: 20px;
  width: clamp(285px, 4vw, 395px);
  display: flex;
  flex-direction: column;
  .lists {
    margin-top: 30px;
    p {
      margin-bottom: 30px;
    }
  }
`;
