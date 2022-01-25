import React from "react";

export default function GenderCard({ placeholder, imgURL, cardStyle }) {
  return (
    <div className="gender__card" style={cardStyle}>
      <div className="gender__Card__placeholder">{placeholder}</div>
      <img className="gender__Card__img" src={imgURL} />
    </div>
  );
}
