import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <Container>
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        on
        onKeyUp={(e) => {
          if (e.key === "Enter") navigate(`/search?movie=${search}`);
        }}
      />
      <button
        className="search-button"
        onClick={() => {
          navigate(`/search?movie=${search}`);
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
  height: 30px;
  margin: 0px 0px 25px 5px;
  padding-right: 10px;
  background-color: #fff;
  margin-right: clamp(10px, 3vw, 130px);
  border: 3px solid #7e7e7e;
  box-sizing: border-box;
  padding-top: 0px;
  input {
    border: none;
    outline: none;
    font-size: 12px;
    width: 200px;
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
