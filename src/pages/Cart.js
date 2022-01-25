import React, { useState } from "react";
import "./Cart.scss";
import { Accordion, Nav, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import BtnComponent from "../components/BtnComponent";
import Select from "react-select";

function PlaceOrderRow({ done, heading, info, extra, icon }) {
  return (
    <div className="place__order__card__row">
      <div className="place__order__card__row__left">
        <div
          className={
            done
              ? "place__order__card__row__left__svg__active"
              : "place__order__card__row__left__svg"
          }
        >
          {icon}
        </div>

        <div className="place__order__card__row__left__content">
          <div className="place__order__card__row__left__content__heading">
            {heading}
          </div>
          <div className="place__order__card__row__left__content__info">
            {info}
          </div>
        </div>
      </div>
      <div className="place__order__card__row__right">
        <button className="place__order__card__row__left__content__btn">
          Change
        </button>
        <div className="place__order__card__row__left__content__info">
          {extra}
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [coupon, setCoupon] = useState(false);
  const Options = [
    { value: "Fixed Cart Discount", label: "Fixed Cart Discount" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <Header />
      <div className="container cart__container">
        <div className="cart__container__header__heading">Cart</div>
        <div className="cart__container__content">
          <div className="cart__container__content__left">
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="cart__container__content__right">
            <div className="cart__container__content__right__card">
              <div className="cart__container__content__right__card__row">
                <span className="cart__container__content__right__card__row__left">
                  Price
                </span>
                <span className="cart__container__content__right__card__row__right">
                  $42
                </span>
              </div>
              <div className="cart__container__content__right__card__row">
                <span className="cart__container__content__right__card__row__left">
                  Shipping
                </span>
                <span className="cart__container__content__right__card__row__right">
                  $12
                </span>
              </div>
              {coupon ? (
                <div className="cart__container__content__right__card__row">
                  <span className="cart__container__content__right__card__row__left">
                    Coupon( TAV20 )
                  </span>
                  <span className="cart__container__content__right__card__row__right">
                    -$10
                  </span>
                </div>
              ) : null}
              <div className="cart__container__content__right__card__line"></div>
              <div className="cart__container__content__right__card__row">
                <span className="cart__container__content__right__card__row__left">
                  Total
                </span>
                <span className="cart__container__content__right__card__row__right__important">
                  $44
                </span>
              </div>
            </div>
            <Switch>
              <Route path="/cart" exact>
                <form className="cart__container__content__right__form">
                  <div className="cart__container__content__right__form__heading">
                    Pay with card
                  </div>
                  <label
                    htmlFor="Card"
                    className="cart__container__content__right__form__label"
                  >
                    Card Information
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33.681"
                      height="23.228"
                      viewBox="0 0 33.681 23.228"
                      style={{ marginRight: "1em" }}
                    >
                      <g id="visa" transform="translate(0 -79.451)">
                        <path
                          id="Path_670"
                          data-name="Path 670"
                          d="M33.681,100.688a1.991,1.991,0,0,1-1.991,1.991H1.991A1.991,1.991,0,0,1,0,100.688V81.442a1.991,1.991,0,0,1,1.991-1.991h29.7a1.991,1.991,0,0,1,1.991,1.991v19.246Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                        <path
                          id="Path_671"
                          data-name="Path 671"
                          d="M35.971,194.225l-.791-3.794a.943.943,0,0,0-1.02-.7H30.534l-.032.173A7.457,7.457,0,0,1,35.971,194.225Z"
                          transform="translate(-28.495 -103.026)"
                          fill="#f79f1a"
                        />
                        <g
                          id="Group_257"
                          data-name="Group 257"
                          transform="translate(0 79.451)"
                        >
                          <path
                            id="Path_672"
                            data-name="Path 672"
                            d="M187.3,190.892h-2.343l-1.463,8.587h2.339Z"
                            transform="translate(-171.428 -183.561)"
                            fill="#059bbf"
                          />
                          <path
                            id="Path_673"
                            data-name="Path 673"
                            d="M70.409,199.553l3.685-8.572H71.614l-2.292,5.857-.245-.884a9.162,9.162,0,0,0-3.241-3.559l2.1,7.161Z"
                            transform="translate(-61.505 -183.644)"
                            fill="#059bbf"
                          />
                          <path
                            id="Path_674"
                            data-name="Path 674"
                            d="M248.038,194.586c.009-.975-.617-1.718-1.966-2.333-.82-.4-1.319-.661-1.313-1.064,0-.356.423-.738,1.34-.738a4.321,4.321,0,0,1,1.751.329l.212.1.317-1.86a6.068,6.068,0,0,0-2.1-.359c-2.313,0-3.941,1.164-3.955,2.833-.015,1.234,1.164,1.922,2.051,2.333.911.419,1.217.688,1.211,1.064-.006.575-.726.837-1.4.837a4.911,4.911,0,0,1-2.2-.45l-.3-.137-.329,1.924a7.384,7.384,0,0,0,2.606.456C246.422,197.519,248.02,196.37,248.038,194.586Z"
                            transform="translate(-225.479 -181.475)"
                            fill="#059bbf"
                          />
                          <path
                            id="Path_675"
                            data-name="Path 675"
                            d="M343.335,198.318l3,0c.071.3.285,1.287.285,1.287h2.172l-1.9-8.581h-1.807a1.165,1.165,0,0,0-1.225.711l-3.476,7.87h2.46S343.244,198.55,343.335,198.318Zm1.6-4.158c-.012.023.194-.5.312-.82l.159.74s.447,2.051.541,2.48h-1.942C344.2,196.067,344.94,194.159,344.94,194.159Z"
                            transform="translate(-317.993 -183.687)"
                            fill="#059bbf"
                          />
                          <path
                            id="Path_676"
                            data-name="Path 676"
                            d="M31.69,79.451H1.991A1.991,1.991,0,0,0,0,81.442v2.066H33.681V81.442A1.991,1.991,0,0,0,31.69,79.451Z"
                            transform="translate(0 -79.451)"
                            fill="#059bbf"
                          />
                        </g>
                        <path
                          id="Path_677"
                          data-name="Path 677"
                          d="M31.69,374.928H1.991A1.991,1.991,0,0,1,0,372.937v-2.066H33.681v2.066A1.991,1.991,0,0,1,31.69,374.928Z"
                          transform="translate(0 -272.249)"
                          fill="#f79f1a"
                        />
                        <path
                          id="Path_678"
                          data-name="Path 678"
                          d="M1.415,100.688V81.442a1.991,1.991,0,0,1,1.991-1.991H1.991A1.991,1.991,0,0,0,0,81.442v19.246a1.991,1.991,0,0,0,1.991,1.991H3.407A1.991,1.991,0,0,1,1.415,100.688Z"
                          transform="translate(0 0)"
                          fill="#202121"
                          opacity="0.15"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="cart__container__content__right__form__row">
                    <div className="cart__container__content__right__form__input__box cart__container__content__right__form__input__box__reverse">
                      <input
                        type="date"
                        className="cart__container__content__right__form__input__field"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="cart__container__content__right__form__input__box">
                      <input
                        type="text"
                        className="cart__container__content__right__form__input__field"
                        placeholder="CV"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33.682"
                        height="22.454"
                        viewBox="0 0 33.682 22.454"
                        style={{ marginRight: "1em" }}
                      >
                        <g id="credit-card" transform="translate(0 -85.333)">
                          <path
                            id="Path_679"
                            data-name="Path 679"
                            d="M3.508,85.333H30.173a3.508,3.508,0,0,1,3.508,3.508v15.437a3.508,3.508,0,0,1-3.508,3.508H3.508A3.508,3.508,0,0,1,0,104.279V88.842A3.508,3.508,0,0,1,3.508,85.333Z"
                            transform="translate(0 0)"
                            fill="#2196f3"
                          />
                          <rect
                            id="Rectangle_859"
                            data-name="Rectangle 859"
                            width="33.682"
                            height="5.614"
                            transform="translate(0 89.543)"
                            fill="#455a64"
                          />
                          <g
                            id="Group_258"
                            data-name="Group 258"
                            transform="translate(4.21 99.367)"
                          >
                            <path
                              id="Path_680"
                              data-name="Path 680"
                              d="M70.315,300.069H64.7a.7.7,0,0,1,0-1.4h5.614a.7.7,0,0,1,0,1.4Z"
                              transform="translate(-64 -298.666)"
                              fill="#fafafa"
                            />
                            <path
                              id="Path_681"
                              data-name="Path 681"
                              d="M74.526,342.736H64.7a.7.7,0,0,1,0-1.4h9.824a.7.7,0,0,1,0,1.4Z"
                              transform="translate(-64 -338.526)"
                              fill="#fafafa"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor="coupon"
                    className="cart__container__content__right__form__label"
                  >
                    Coupon Code
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <Link
                    to="/cart/delivery-info"
                    className="cart__container__content__right__form__link__btn"
                  >
                    <BtnComponent
                      placeholder="Next"
                      btnStyle={{ width: "100%" }}
                      type="button"
                      onClick={() => {
                        setCoupon(true);
                      }}
                    />
                  </Link>
                </form>
              </Route>
              <Route path="/cart/delivery-info">
                <form className="cart__container__content__right__form">
                  <div className="cart__container__content__right__form__heading">
                    Add Delivery Information
                  </div>
                  <div className="cart__container__content__right__form__row">
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <label
                        htmlFor="Card"
                        className="cart__container__content__right__form__label"
                      >
                        First Name
                      </label>
                      <div className="cart__container__content__right__form__input__box">
                        <input
                          type="text"
                          className="cart__container__content__right__form__input__field"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div
                      className=""
                      style={{
                        width: "20px",
                      }}
                    ></div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <label
                        htmlFor="Card"
                        className="cart__container__content__right__form__label"
                      >
                        Last Name
                      </label>
                      <div className="cart__container__content__right__form__input__box">
                        <input
                          type="text"
                          className="cart__container__content__right__form__input__field"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <label
                    htmlFor="Card"
                    className="cart__container__content__right__form__label"
                  >
                    Address (PO box is not allowed)
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="Address"
                    />
                  </div>
                  <label
                    htmlFor="Card"
                    className="cart__container__content__right__form__label"
                  >
                    Apartment, Suite (Optional)
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="Apartment, Suite"
                    />
                  </div>
                  <label
                    htmlFor="Card"
                    className="cart__container__content__right__form__label"
                  >
                    Select Your City
                  </label>
                  <Select
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
                    name="colors"
                    options={Options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  <div
                    className="cart__container__content__right__form__row"
                    style={{ marginTop: ".5em" }}
                  >
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        marginBottom: ".5em",
                      }}
                    >
                      <label
                        htmlFor="Card"
                        className="cart__container__content__right__form__label"
                      >
                        Select Your Country
                      </label>
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        name="colors"
                        options={Options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    <div
                      className=""
                      style={{
                        width: "20px",
                      }}
                    ></div>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        marginBottom: ".5em",
                      }}
                    >
                      <label
                        htmlFor="Card"
                        className="cart__container__content__right__form__label"
                      >
                        Select Your Emirate
                      </label>
                      <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        name="colors"
                        options={Options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="coupon"
                    className="cart__container__content__right__form__label"
                  >
                    Phone No.
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="Phone"
                    />
                  </div>
                  <label
                    htmlFor="coupon"
                    className="cart__container__content__right__form__label"
                  >
                    Email
                  </label>
                  <div className="cart__container__content__right__form__input__box">
                    <input
                      type="text"
                      className="cart__container__content__right__form__input__field"
                      placeholder="Email"
                    />
                  </div>
                  <Link
                    to="/cart/place-order"
                    className="cart__container__content__right__form__link__btn"
                  >
                    <BtnComponent
                      placeholder="Next"
                      btnStyle={{ width: "100%" }}
                      type="button"
                      onClick={() => {
                        setCoupon(true);
                      }}
                    />
                  </Link>
                </form>
              </Route>
              <Route path="/cart/place-order">
                <div className="place__order__card">
                  <PlaceOrderRow
                    type="shipping"
                    done={true}
                    heading="Shipping Method"
                    info="Shipping in 5 to 8 days"
                    extra="Shipping Free"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.091 20.682"
                        fill="currentColor"
                      >
                        <path
                          id="Icon_ionic-md-airplane"
                          data-name="Icon ionic-md-airplane"
                          d="M23.591,17.693V15.7l-7.955-5.171V4.926a1.591,1.591,0,0,0-3.182,0v5.608L4.5,15.7v1.989l7.955-2.386v5.648l-2.386,1.551v1.551l3.977-.8,3.977.8V22.506l-2.386-1.551V15.307Z"
                          transform="translate(-4.5 -3.375)"
                        />
                      </svg>
                    }
                  />
                  <PlaceOrderRow
                    type="delivery"
                    done={true}
                    heading="Shipping Method"
                    info="Shipping in 5 to 8 days"
                    extra="Shipping Free"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.091 20.682"
                        fill="currentColor"
                      >
                        <path
                          id="Icon_ionic-md-airplane"
                          data-name="Icon ionic-md-airplane"
                          d="M23.591,17.693V15.7l-7.955-5.171V4.926a1.591,1.591,0,0,0-3.182,0v5.608L4.5,15.7v1.989l7.955-2.386v5.648l-2.386,1.551v1.551l3.977-.8,3.977.8V22.506l-2.386-1.551V15.307Z"
                          transform="translate(-4.5 -3.375)"
                        />
                      </svg>
                    }
                  />
                  <PlaceOrderRow
                    type="payment_method"
                    done={true}
                    heading="Shipping Method"
                    info="Shipping in 5 to 8 days"
                    extra="Shipping Free"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.091 20.682"
                        fill="currentColor"
                      >
                        <path
                          id="Icon_ionic-md-airplane"
                          data-name="Icon ionic-md-airplane"
                          d="M23.591,17.693V15.7l-7.955-5.171V4.926a1.591,1.591,0,0,0-3.182,0v5.608L4.5,15.7v1.989l7.955-2.386v5.648l-2.386,1.551v1.551l3.977-.8,3.977.8V22.506l-2.386-1.551V15.307Z"
                          transform="translate(-4.5 -3.375)"
                        />
                      </svg>
                    }
                  />
                  <PlaceOrderRow
                    type="sub_total"
                    done={false}
                    heading="Shipping Method"
                    info="Shipping in 5 to 8 days"
                    extra="Shipping Free"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.091 20.682"
                        fill="currentColor"
                      >
                        <path
                          id="Icon_ionic-md-airplane"
                          data-name="Icon ionic-md-airplane"
                          d="M23.591,17.693V15.7l-7.955-5.171V4.926a1.591,1.591,0,0,0-3.182,0v5.608L4.5,15.7v1.989l7.955-2.386v5.648l-2.386,1.551v1.551l3.977-.8,3.977.8V22.506l-2.386-1.551V15.307Z"
                          transform="translate(-4.5 -3.375)"
                        />
                      </svg>
                    }
                  />
                  <Link
                    to="/order-placed"
                    className="cart__container__content__right__form__link__btn"
                    style={{ marginTop: "0em" }}
                  >
                    <BtnComponent
                      placeholder="Place Order"
                      btnStyle={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "2em",
                      }}
                      type="button"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.141"
                          height="21.185"
                          viewBox="0 0 16.141 21.185"
                        >
                          <path
                            id="Icon_material-lock"
                            data-name="Icon material-lock"
                            d="M20.123,8.562H19.114V6.544a5.044,5.044,0,0,0-10.088,0V8.562H8.018A2.024,2.024,0,0,0,6,10.579V20.667a2.024,2.024,0,0,0,2.018,2.018H20.123a2.024,2.024,0,0,0,2.018-2.018V10.579A2.024,2.024,0,0,0,20.123,8.562ZM14.07,17.641a2.018,2.018,0,1,1,2.018-2.018A2.024,2.024,0,0,1,14.07,17.641ZM17.2,8.562H10.943V6.544a3.127,3.127,0,1,1,6.254,0Z"
                            transform="translate(-6 -1.5)"
                            fill="#fff"
                          />
                        </svg>
                      }
                    />
                  </Link>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
