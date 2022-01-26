import React from "react";
import HomeBG from "../assets/HomeBG.png";
import BtnComponent from "../components/BtnComponent";
import "./Home.scss";
import GenderSelectionCardImg from "../assets/wrist-watch-ogx.png";
import GenderCard from "../components/GenderCard";
import { Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productImg from "../assets/productPic.png";
import bannerPic from "../assets/bannerPic.png";
import main__product__img from "../assets/main__product__img.png";
import StarRatings from "react-star-ratings";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero__section">
        <img
          src={HomeBG}
          alt="hero__section__bg"
          className="hero__section__bg"
        />
        <div className="hero__section__overlay">
          <form className="hero__section__overlay_form">
            <input
              type="text"
              className="hero__section__overlay_form__input"
              placeholder="Search 100M+ Products"
            />
            <BtnComponent placeholder="Search" btnStyle={{ flex: 1 }} />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="gender__selection">
          <GenderCard
            placeholder="Men"
            imgURL={GenderSelectionCardImg}
            cardStyle={{ backgroundColor: "#30DCA9" }}
          />
          <GenderCard placeholder="Women" imgURL={GenderSelectionCardImg} />
          <GenderCard
            placeholder="Unisex"
            imgURL={GenderSelectionCardImg}
            cardStyle={{ backgroundColor: "#50D97C" }}
          />
        </div>
      </div>
      <div className="container">
        <div className="product__catagories">
          <div className="product__catagories__header">
            <Nav activeKey="/">
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="nav__link__vertical">
                  Watches
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="link-1"
                  className="nav__link__vertical"
                >
                  Perfumes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="link-2"
                  className="nav__link__vertical"
                >
                  Paintings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="link-3"
                  className="nav__link__vertical"
                >
                  Books
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  eventKey="link-4"
                  className="nav__link__vertical"
                >
                  Laptops
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="product__catagories__content">
            <Switch>
              <Route path="/" exact>
                <div className="product__catagories__content__row">
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
                  <ProductCard
                    imgURL={productImg}
                    name="product name"
                    oldPrice="$20.20"
                    newPrice="$34.20"
                    offer="10"
                  />
                </div>
              </Route>
            </Switch>
          </div>
          <div className="product__catagories__more">
            <button className="product__catagories__more__btn">View All</button>
          </div>
        </div>
        <div className="sale__banner">
          <img src={bannerPic} alt="bannerPic" className="sale__banner__pic" />
          <div className="sale__banner__overlay">
            <button className="sale__banner__overlay__btn">Shop Now</button>
          </div>
        </div>
        <div className="main__product">
          <img
            src={main__product__img}
            alt="main__product__img"
            className="main__product__img"
          />
          <div className="main__product__content">
            <div className="main__product__content__header">
              <span className="main__product__content__heading">
                Ajmal Mizyaan for Men
              </span>
              <div className="main__product__content__line"></div>
            </div>
            <div className="main__product__content__info">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
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
                <span>price</span>
                $50
              </div>
            </div>
            <div className="main__product__content__row">
              <StarRatings
                rating={2.403}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="#50D9C2"
              />
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
            </div>
          </div>
        </div>
        <div className="product__catagories__content__row">
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
          <ProductCard
            imgURL={productImg}
            name="product name"
            oldPrice="$20.20"
            newPrice="$34.20"
            offer="10"
          />
        </div>
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
