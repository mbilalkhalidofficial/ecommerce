import React from "react";
import StarRatings from "react-star-ratings";
import userPic from "../assets/userPic.png";

export default function ProductReview() {
  return (
    <div className="product__review__panel">
      <img
        src={userPic}
        alt="product__review__panel__img"
        className="product__review__panel__img"
      />
      <div className="product__review__panel__content">
        <div className="product__review__panel__header">
          <div className="product__review__panel__header__heading">
            <span>Jenifer Brand</span>
            <div className="product__review__panel__header__time__stamp">
              3 Hours Ago
            </div>
          </div>
          <StarRatings
            rating={2.403}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#50D9C2"
          />
        </div>
        <div className="product__review__panel__info">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </div>
      </div>
    </div>
  );
}
