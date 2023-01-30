import React from "react";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import none from "../../assets/images/none.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Profile({ img, name, gender, id }) {
  return (
    <>
      <Link to={`/profile/${id}`}>
        <ProfileImg>
          {img ? (
            <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt="" />
          ) : gender === 1 ? (
            <img src={woman} alt={name} />
          ) : gender === 2 ? (
            <img src={man} alt={name} />
          ) : (
            <img src={none} alt={name} />
          )}
        </ProfileImg>
        <ProfileInfo>
          <p>{name}</p>
        </ProfileInfo>
      </Link>
    </>
  );
}
const ProfileImg = styled.div`
  //background-color: #fff;
  width: 150px;
`;
const ProfileInfo = styled.div`
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
`;
