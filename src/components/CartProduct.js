import { Button } from "react-bootstrap";
import React from "react";
import CartProductImg from "../assets/productPic.png";
import BtnComponent from "../components/BtnComponent";

export default function CartProduct() {
  return (
    <div className="cart__product__container">
      <div className="cart__product__content__left">
        <img src={CartProductImg} alt="cart__product_img" />
        <div className="cart__product__content">
          <div className="cart__product__content__top">
            <div className="cart__product__heading">Ajmal Mizyaan for Men</div>
            <div className="cart__product__text">By Lorem ipsum dolor</div>
          </div>
          <div className="cart__product__content__bottom">
            <div className="cart__product__price">$40</div>
            <div className="cart__product__delivery">
              Delivery in 5 to 8 days
            </div>
          </div>
        </div>
      </div>
      <div className="cart__product__content__right">
        <div className="main__product__content__quantity">
          <button className="main__product__content__quantity__min">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.902"
              height="2.731"
              viewBox="0 0 13.902 1.731"
              fill="currentColor"
            >
              <path
                id="Icon_ionic-ios-remove"
                data-name="Icon ionic-ios-remove"
                d="M22,16.875H9.83a.865.865,0,0,0,0,1.731H22a.865.865,0,1,0,0-1.731Z"
                transform="translate(-8.965 -16.875)"
              />
            </svg>
          </button>
          <div className="main__product__content__quantity__value">2</div>
          <button className="main__product__content__quantity__max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.31"
              height="17.31"
              viewBox="0 0 17.31 17.31"
              fill="currentColor"
            >
              <path
                id="Icon_ionic-md-add"
                data-name="Icon ionic-md-add"
                d="M24.06,16.559h-7.5v7.5H14.251v-7.5H6.75V14.251h7.5V6.75h2.308v7.5h7.5Z"
                transform="translate(-6.75 -6.75)"
              />
            </svg>
          </button>
        </div>
        <Button veriant="dark" className="cart__product__remove__btn">
          Remove
        </Button>
      </div>
    </div>
  );
}
