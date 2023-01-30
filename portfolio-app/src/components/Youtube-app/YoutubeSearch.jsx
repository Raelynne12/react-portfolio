import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function YoutubeSearch({ onSearch }) {
  const inputRef = useRef();
  const [search, setSearch] = useState("");

  const onClick = () => {
    onSearch(search);
    console.log(search);
  };

  const onKeyDown = () => {
    onSearch(search);
    inputRef.current.value = "";
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Search MusicVideo"
        ref={inputRef}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
          console.log(search);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") onKeyDown();
        }}
      ></input>
      <button className="search-button" onClick={onClick}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  right: 20px;
  font-size: 12px;
  top: 5px;
  padding: 3px 5px;
  padding-right: 10px;
  background-color: #fff;
  margin-right: 70px;
  border: 2px solid #7e7e7e;
  box-sizing: border-box;
  input {
    border: none;
    outline: none;
    font-size: 12px;
    width: 200px;
    height: 30px;
    background: none;
    color: #000;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 15px;
    background: none;
    color: #7e7e7e;
  }
`;
