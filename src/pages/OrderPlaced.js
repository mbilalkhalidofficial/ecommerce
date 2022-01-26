import React from "react";
import "./OrderPlaced.scss";
import { Accordion, Nav, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnComponent from "../components/BtnComponent";

export default function OrderPlaced() {
  return (
    <>
      <Header search={true} />
      <div className="container order__placed__container">
        <div className="order__placed__container__heading">
          Your Order has been placed
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126.388"
          height="247.742"
          viewBox="0 0 126.388 247.742"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Path_687"
                data-name="Path 687"
                d="M310.638,368.242H184.25V120.5H295.732Z"
                transform="translate(-112.965 -81.785)"
                fill="#d20173"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              y1="1"
              x2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#00b59c" />
              <stop offset="1" stopColor="#9cffac" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.5"
              y1="1"
              x2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#c3ffe8" />
              <stop offset="0.997" stopColor="#f0fff4" />
            </linearGradient>
          </defs>
          <g
            id="Mask_Group_4"
            data-name="Mask Group 4"
            transform="translate(-71.285 -38.715)"
            clip-path="url(#clip-path)"
          >
            <g id="shopping-cart" transform="translate(71.285 99.392)">
              <path
                id="Path_704"
                data-name="Path 704"
                d="M125.646,38.754a3.7,3.7,0,0,0-2.961-1.479H96.209a22.217,22.217,0,0,0-43.813,0H29.381L24.543,3.183A3.7,3.7,0,0,0,20.877,0H3.7a3.7,3.7,0,0,0,0,7.406H17.662L22.5,41.5h0L28.09,80.87A18.514,18.514,0,0,0,33.915,91.9a11.1,11.1,0,0,0,4.145,19.285,11.108,11.108,0,1,0,20.795.392h30.9a11.107,11.107,0,1,0,10.471-7.406H40.977a3.7,3.7,0,1,1,0-7.406H96.456a18.588,18.588,0,0,0,17.8-13.414l11.989-41.344a3.7,3.7,0,0,0-.6-3.255Z"
                transform="translate(0 0)"
                fill="url(#linear-gradient)"
              />
              <g
                id="Group_295"
                data-name="Group 295"
                transform="translate(48.383 15.058)"
              >
                <g id="Group_294" data-name="Group 294">
                  <path
                    id="Path_705"
                    data-name="Path 705"
                    d="M46.391,6.371A25.919,25.919,0,1,0,72.31,32.291,25.949,25.949,0,0,0,46.391,6.371ZM56.414,31.206,45.306,42.314a3.7,3.7,0,0,1-5.236,0l-3.7-3.7A3.7,3.7,0,1,1,41.6,33.375l1.085,1.084,8.49-8.49a3.7,3.7,0,1,1,5.236,5.237Z"
                    transform="translate(-20.471 -6.371)"
                    fill="url(#linear-gradient-2)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>

        <div className="order__placed__container__info">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </div>
        <Link to="/track-order" style={{ textDecoration: "none" }}>
          <BtnComponent placeholder="Track my Order" />
        </Link>
      </div>
      <Footer />
    </>
  );
}
