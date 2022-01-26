import React, { useState } from "react";
import "./ProductDetails.scss";
import { Link, Route, Switch } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/productPic.png";
import imgLarge from "../assets/productPicLarge.png";
import img1 from "../assets/productPicSuggestion.jpg";
import imgLarge1 from "../assets/productPicSuggestionLarge.jpg";
import img2 from "../assets/productPic.png";
import imgLarge2 from "../assets/productPicLarge.png";
import img3 from "../assets/productPic.png";
import imgLarge3 from "../assets/productPicLarge.png";
import img4 from "../assets/productPic.png";
import imgLarge4 from "../assets/productPicLarge.png";
import img5 from "../assets/productPic.png";
import imgLarge5 from "../assets/productPicLarge.png";
import HomeBG from "../assets/HomeBG.png";
import StarRatings from "react-star-ratings";
import BtnComponent from "../components/BtnComponent";
import { Nav, Button } from "react-bootstrap";
import ProductReview from "../components/ProductReview";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

function SuggestionImg({ imgURL, onClick }) {
  return (
    <button
      className="product__details__images__suggestion__btn"
      onClick={onClick}
    >
      <img
        src={imgURL}
        alt="product__details__images__suggestion1"
        className="product__details__images__suggestion"
      />
    </button>
  );
}

function ColorPicker({ placeholder, styles }) {
  return (
    <div className="input-radio-color">
      <input type="radio" id={placeholder} name="color" value={placeholder} />
      <label for={placeholder}>
        <div className="input-radio-color-value" style={styles}></div>
      </label>
    </div>
  );
}

function SizePicker({ placeholder }) {
  return (
    <div className="input-radio-size">
      <input type="radio" id={placeholder} name="size" value={placeholder} />
      <label for={placeholder}>{placeholder}</label>
    </div>
  );
}

export default function ProductDetails() {
  const [imgLink, setImgLink] = useState(img);
  const [imgLinkLarge, setImgLinkLarge] = useState(imgLarge);
  const isInStock = true;
  return (
    <>
      <Header search={true} />
      <div className="container product__details">
        <div className="product__details__top__row">
          <div className="product__details__images">
            <div className="product__details__images__suggestions">
              <SuggestionImg
                imgURL={img1}
                onClick={() => {
                  setImgLink(img1);
                  setImgLinkLarge(imgLarge1);
                }}
              />
              <SuggestionImg
                imgURL={img2}
                onClick={() => {
                  setImgLink(img2);
                  setImgLinkLarge(imgLarge2);
                }}
              />
              <SuggestionImg
                imgURL={img3}
                onClick={() => {
                  setImgLink(img3);
                  setImgLinkLarge(imgLarge3);
                }}
              />
              <SuggestionImg
                imgURL={img4}
                onClick={() => {
                  setImgLink(img4);
                  setImgLinkLarge(imgLarge4);
                }}
              />
              <SuggestionImg
                imgURL={img5}
                onClick={() => {
                  setImgLink(img5);
                  setImgLinkLarge(imgLarge5);
                }}
              />
            </div>
            <div className="product__details__image">
              <GlassMagnifier
                imageSrc={imgLink}
                imageAlt="product__details__image"
                largeImageSrc={imgLinkLarge}
                allowOverflow={true}
                magnifierSize="50%"
              />
            </div>
          </div>
          <div className="product__details__content">
            <div className="product__details__content__heading__row">
              <div className="product__details__content__heading__row__heading">
                <span>Ajmal Mizyaan for Men</span>
                <div className="product__details__content__heading__row__line"></div>
              </div>
              <div className="product__details__content__heading__row__btn">
                <button className="product__details__content__heading__row__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34.355 30.348"
                  >
                    <path
                      id="Icon_feather-heart"
                      data-name="Icon feather-heart"
                      d="M31.26,6.915a8.25,8.25,0,0,0-11.67,0L18,8.505l-1.59-1.59A8.252,8.252,0,1,0,4.74,18.585l1.59,1.59L18,31.845l11.67-11.67,1.59-1.59a8.25,8.25,0,0,0,0-11.67Z"
                      transform="translate(-0.823 -2.997)"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button className="product__details__content__heading__row__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 33">
                    <g
                      id="Icon_feather-share-2"
                      data-name="Icon feather-share-2"
                      transform="translate(-3 -1.5)"
                    >
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M31.5,7.5A4.5,4.5,0,1,1,27,3,4.5,4.5,0,0,1,31.5,7.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M13.5,18A4.5,4.5,0,1,1,9,13.5,4.5,4.5,0,0,1,13.5,18Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M31.5,28.5A4.5,4.5,0,1,1,27,24,4.5,4.5,0,0,1,31.5,28.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M12.885,20.265l10.245,5.97"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        id="Path_9"
                        data-name="Path 9"
                        d="M23.115,9.765l-10.23,5.97"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product__details__content__info">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </div>
            <div className="product__details__content__variant">
              <div className="product__details__content__variant__heading">
                Strap Color
              </div>
              <div className="product__details__content__variant__selection">
                <ColorPicker
                  placeholder="black"
                  styles={{ backgroundColor: "black" }}
                />
                <ColorPicker
                  placeholder="blue"
                  styles={{ backgroundColor: "blue" }}
                />
                <ColorPicker
                  placeholder="red"
                  styles={{ backgroundColor: "red" }}
                />
                <ColorPicker
                  placeholder="orange"
                  styles={{ backgroundColor: "orange" }}
                />
              </div>
            </div>
            <div className="product__details__content__variant">
              <div className="product__details__content__variant__heading">
                Strap Size
              </div>
              <div className="product__details__content__variant__selection">
                <SizePicker placeholder='14"' />
                <SizePicker placeholder='13"' />
                <SizePicker placeholder='16"' />
                <SizePicker placeholder='18"' />
              </div>
            </div>
            <div className="main__product__content__row">
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
              <div className="main__product__content__price">
                <div>
                  <span style={{ textDecoration: "line-through" }}>$50</span>
                </div>
                <div>
                  <span>price</span>
                  $50
                </div>
              </div>
            </div>
            <div className="main__product__content__row">
              <StarRatings
                rating={2.403}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="#50D9C2"
              />
              {isInStock ? (
                <BtnComponent
                  placeholder="Add to Cart"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.452"
                      height="20.614"
                      viewBox="0 0 21.452 20.614"
                    >
                      <g
                        id="Icon_feather-shopping-cart"
                        data-name="Icon feather-shopping-cart"
                        transform="translate(1.5 1.5)"
                      >
                        <path
                          id="Path_636"
                          data-name="Path 636"
                          d="M13.677,30.839A.839.839,0,1,1,12.839,30,.839.839,0,0,1,13.677,30.839Z"
                          transform="translate(-6.129 -14.064)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                        <path
                          id="Path_637"
                          data-name="Path 637"
                          d="M30.177,30.839A.839.839,0,1,1,29.339,30,.839.839,0,0,1,30.177,30.839Z"
                          transform="translate(-13.403 -14.064)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                        <path
                          id="Path_638"
                          data-name="Path 638"
                          d="M1.5,1.5H4.855L7.1,12.731a1.677,1.677,0,0,0,1.677,1.35h8.153a1.677,1.677,0,0,0,1.677-1.35l1.342-7.037H5.694"
                          transform="translate(-1.5 -1.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                      </g>
                    </svg>
                  }
                  btnStyle={{
                    width: "50%",
                    justifyContent: "space-between",
                  }}
                />
              ) : (
                <Button className="out__of__stock__btn">Out of Stock</Button>
              )}
            </div>
          </div>
        </div>
        <div className="product__details__bottom__row">
          <div className="product__catagories__header">
            <Nav activeKey="/product-details">
              <Nav.Item>
                <Nav.Link
                  href="/product-details"
                  as={Link}
                  to="/product-details"
                  className="nav__link__vertical"
                >
                  Reviews
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/product-details/description"
                  eventKey="link-1"
                  className="nav__link__vertical"
                >
                  Description
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="product__catagories__content">
            <Switch>
              <Route path="/product-details" exact>
                <div className="product__catagories__content__row">
                  <div className="product__catagories__content__row__top">
                    <ProductReview />
                    <ProductReview />
                    <ProductReview />
                    <ProductReview />
                  </div>
                  <div className="product__catagories__more">
                    <button className="product__catagories__more__btn__reverse">
                      View All
                    </button>
                  </div>
                </div>
              </Route>
              <Route path="/product-details/description">
                <div className="product__catagories__content__row">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati impedit officiis quisquam facere molestias magni,
                  reiciendis dicta ipsam amet laboriosam voluptas voluptatibus
                  ducimus, reprehenderit harum vitae ratione. Dolorem eius omnis
                  asperiores laudantium consequatur accusantium tempora est
                  voluptates magni magnam odit sint ad eum quo nihil fugiat,
                  fuga vero, odio deleniti. Nisi ducimus molestiae est, at
                  repellendus quam voluptates obcaecati earum laboriosam omnis,
                  ipsam architecto maiores delectus, excepturi quae consequatur
                  cum voluptatum labore temporibus assumenda. Iure iusto iste
                  eaque adipisci dolores! Debitis ad totam, amet, laborum esse
                  tempora accusantium reprehenderit nemo sint optio nam
                  laudantium voluptates minus! Distinctio rem obcaecati libero{" "}
                  <br /> nesciunt saepe dolore sed blanditiis excepturi!
                  Blanditiis maxime vitae, quos, ea sunt consequuntur dolor odio
                  aliquam, itaque fugit eos ad necessitatibus? Sed, iusto?
                  Commodi ea earum maxime incidunt natus, voluptatum neque,
                  eligendi, sint magnam veniam aspernatur perferendis beatae
                  similique ab tempore! Non error quam tempora voluptatibus
                  placeat quae cupiditate optio nam neque aut sed <br /> vero
                  facere harum, quasi dolorem dicta maiores inventore natus ab
                  dolor, pariatur sunt deserunt id consequuntur. Recusandae
                  eveniet culpa, omnis molestias error hic illo, reiciendis
                  nobis magnam quaerat, iste quia distinctio quidem? Quaerat
                  ipsa amet animi similique quam. Vel voluptatem enim quis?
                  Veniam voluptatum ducimus aliquam!
                </div>
              </Route>
            </Switch>
          </div>
        </div>
        <form className="review__form">
          <div className="review__form__heading">Write a Review</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="review__form__textarea"
            placeholder="Enter Review Here"
          />
          <div className="review__form__btn">
            <BtnComponent
              placeholder="Post"
              btnStyle={{
                width: "100%",
                maxWidth: "200px",
              }}
            />
          </div>
        </form>
      </div>
      <div className="container">
        <div className="customer__link__row">
          <Link className="customer__link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="customer__link__svg"
              viewBox="0 0 44.292 44.292"
            >
              <path
                id="Icon_feather-message-circle"
                data-name="Icon feather-message-circle"
                d="M45.792,24a19.224,19.224,0,0,1-2.065,8.717A19.5,19.5,0,0,1,26.293,43.5a19.224,19.224,0,0,1-8.717-2.065L4.5,45.792,8.859,32.716A19.224,19.224,0,0,1,6.794,24,19.5,19.5,0,0,1,17.576,6.565,19.224,19.224,0,0,1,26.293,4.5H27.44A19.453,19.453,0,0,1,45.792,22.852Z"
                transform="translate(-3 -3)"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
            <div className="customer__link__label">24/7 Customer Care</div>
          </Link>
          <Link className="customer__link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="customer__link__svg"
              viewBox="0 0 41.022 45.246"
            >
              <g
                id="Icon_feather-shopping-bag"
                data-name="Icon feather-shopping-bag"
                transform="translate(1.5 1.5)"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M10.837,3,4.5,11.449V41.022a4.225,4.225,0,0,0,4.225,4.225H38.3a4.225,4.225,0,0,0,4.225-4.225V11.449L36.185,3Z"
                  transform="translate(-4.5 -3)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M4.5,9H42.522"
                  transform="translate(-4.5 -0.551)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M28.9,15A8.449,8.449,0,0,1,12,15"
                  transform="translate(-1.438 1.898)"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </g>
            </svg>
            <div className="customer__link__label">Delivery in 3 days</div>
          </Link>
          <Link className="customer__link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="customer__link__svg"
              viewBox="0 0 42.545 42.598"
            >
              <path
                id="Icon_open-reload"
                data-name="Icon open-reload"
                d="M21.3,0A21.3,21.3,0,1,0,36.421,36.421l-3.834-3.834A15.986,15.986,0,1,1,21.246,5.325,15.49,15.49,0,0,1,32.375,10.17l-5.8,5.8H42.545V0L36.208,6.336A21.18,21.18,0,0,0,21.246,0Z"
                fill="#242424"
              />
            </svg>
            <div className="customer__link__label">Easy Return & Exchange</div>
          </Link>
        </div>
      </div>
      <div className="hero__section__reverse">
        <img
          src={HomeBG}
          alt="hero__section__bg"
          className="hero__section__bg"
        />
        <div className="hero__section__overlay__reverse">
          <div className="product__catagories__heading__row">
            <div className="product__catagories__heading">Items on SALE</div>
            <div className="product__catagories__time__stamp">
              <span>Time Remaining</span>
              <div className="product__catagories__time__stamp__time">
                <div className="time__value">1</div>
                <div className="time__value">2</div>:
                <div className="time__value">3</div>
                <div className="time__value">0</div>
              </div>
            </div>
          </div>
          <div
            className="product__catagories__content__row"
            style={{ width: "65%" }}
          >
            <ProductCard
              imgURL={productImg}
              name="product name"
              oldPrice="$20.20"
              newPrice="$34.20"
              offer="10"
            />
            <ProductCard
              imgURL={productImg}
              name="product name"
              oldPrice="$20.20"
              newPrice="$34.20"
              offer="10"
            />
            <ProductCard
              imgURL={productImg}
              name="product name"
              oldPrice="$20.20"
              newPrice="$34.20"
              offer="10"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
