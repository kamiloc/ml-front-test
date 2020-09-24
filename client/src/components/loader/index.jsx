import React from "react";
import "./index.scss";

export default function Loader(props) {
  return (
    <div className="lds-ring" {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
