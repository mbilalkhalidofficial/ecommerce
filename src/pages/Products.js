import React from "react";
import "./Products.scss";
import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBG from "../assets/HomeBG.png";

export default function Home() {
  return (
    <>
      <Header search={true} />
      <div className="container products__page">
        <form className="search__result__container__vacancies-filter-panel">
          <div className="search__result__container__vacancies-filter-panel-row">
            <div className="search__result__container__vacancies-filter-panel-heading">
              Filter
            </div>
            <button
              type="reset"
              className="search__result__container__vacancies-filter-panel-heading-row-btn"
            >
              Remove all
            </button>
          </div>
          <div className="search__result__container__vacancies-filter-panel-sub-heading">
            Distance
          </div>
          <div className="search__result__container__vacancies-filter-panel-row">
            <input
              type="text"
              placeholder="Zip code or place"
              className="search__result__container__vacancies-filter-panel-input"
            />
          </div>
          <div className="search__result__container__vacancies-filter-panel-catagory">
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="search__result__container__vacancies-filter-panel-catagory-heading"
              >
                By Price
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="search__result__container__vacancies-filter-panel-catagory-container">
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-1">10 - 20</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-2"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-2">20 - 30</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-3"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-3">30 - 40</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-4"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-4">40 - 50</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-5"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-5">50 - 60</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-7"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-7">60 - 70</label>
                </div>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="search__result__container__vacancies-filter-panel-catagory-heading"
              >
                By Product
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="search__result__container__vacancies-filter-panel-catagory-container">
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-8"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-8">10 - 20</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-9"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-9">20 - 30</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-10"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-10">30 - 40</label>
                </div>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="search__result__container__vacancies-filter-panel-catagory-heading"
              >
                By Catagory
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="search__result__container__vacancies-filter-panel-catagory-container">
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-11"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-11">10 - 20</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-12"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-12">20 - 30</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-13"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-13">30 - 40</label>
                </div>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="search__result__container__vacancies-filter-panel-catagory-heading"
              >
                By Popular Searches
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="search__result__container__vacancies-filter-panel-catagory-container">
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-14"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-14">10 - 20</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-15"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-15">20 - 30</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-16"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-16">30 - 40</label>
                </div>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="search__result__container__vacancies-filter-panel-catagory-heading"
              >
                By Delivery Time
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="search__result__container__vacancies-filter-panel-catagory-container">
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-17"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-17">10 - 20</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-18"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-18">20 - 30</label>
                  <input
                    className="search__result__container__vacancies-filter-panel-catagory-checkbox"
                    id="styled-checkbox-19"
                    type="checkbox"
                    value="value1"
                  />
                  <label htmlFor="styled-checkbox-19">30 - 40</label>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </form>
        <div className="products__page__content">
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
          <ProductCard
            imgURL={productImg}
            name="product name"
            oldPrice="$20.20"
            newPrice="$34.20"
            offer="10"
          />
        </div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M4.5,9H42.522"
                  transform="translate(-4.5 -0.551)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M28.9,15A8.449,8.449,0,0,1,12,15"
                  transform="translate(-1.438 1.898)"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
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
