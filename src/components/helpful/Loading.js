import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
  <div>
    <ReactLoading type={"spin"} height={"20%"} width={"20%"} />{" "}
    <h2>Loading ...</h2>
  </div>
);

export default Loading;
