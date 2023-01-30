import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Voca from "./Voca";

export default function Day() {
  const { day } = useParams();
  const [vocas, setVocas] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/vocas?day=${day}`)
  //     .then((res) => setVocas(res.data));
  // }, []);

  const onDelete = (id) => {
    axios.delete(`'http://localhost:3000/vocas/${id}`).then((res) => {
      axios
        .get(`http://localhost:3000/vocas?day=${day}`)
        .then((res) => setVocas(res.data));
    });
  };

  const onUpdate = (obj) => {
    axios
      .put(`http://localhost:3000/vocas?day=${obj.day}`)
      .then((res) => setVocas(res.data));
  };
  return (
    <Container>
      <h2>오늘 학습할 단어는?</h2>
      <ul>
        {vocas.map((item, idx) => {
          return (
            <Voca
              kor={item.kor}
              done={item.done}
              id={item.id}
              day={item.day}
              eng={item.eng}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></Voca>
          );
        })}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  margin: 100px 0;
  h2 {
    font-size: 24px;
    color: #fff;
    mix-blend-mode: 50px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    padding: 0 50px;
  }
`;
