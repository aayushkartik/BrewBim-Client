import React from "react";
import loading from "../image/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h2>loading...</h2>
      <img src={loading} alt="loading gif" />
    </div>
  );
}