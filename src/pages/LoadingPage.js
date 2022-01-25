import React from "react";
import "./LoadingPage.scss";
import LoadingSVG from "../assets/LoadingSVG.gif";

export default function LoadingPage() {
  return (
    <div className="loadingPage">
      <img src={LoadingSVG} alt="LoadingSVG" />
    </div>
  );
}
