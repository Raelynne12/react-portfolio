import React from "react";
import Rows from "./Rows";
import requests from "../../api/requests";

export default function MainContent({ showVideo }) {
  return (
    <>
      <Rows
        title="netflix original"
        fetchURL={requests.fetchNethflixOriginals}
        type="banner"
        showNum={3}
        showVideo={showVideo}
      ></Rows>
      <Rows
        title="top rated"
        fetchURL={requests.fetchTopRated}
        type="banner"
        showVideo={showVideo}
      ></Rows>
      <Rows
        title="popular movie"
        fetchURL={requests.fetchPopular}
        type="banner"
        showVideo={showVideo}
      ></Rows>
    </>
  );
}
