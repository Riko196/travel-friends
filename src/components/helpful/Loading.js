import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

const Loading = () => (
  <div>
    <div className="spinner">
      <ReactLoading type={"spin"} height={"200px"} width={"200px"} />{" "}
    </div>
  </div>
);

export default Loading;
