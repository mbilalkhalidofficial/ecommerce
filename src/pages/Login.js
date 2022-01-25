import React from "react";
import "./Auth.scss";
import Header from "../components/Header";
import HomeBG from "../assets/HomeBG.png";
import InputBox from "../components/InputBox";
import LoginButton from "../components/BtnComponent";
import { Link } from "react-router-dom";
import BtnComponent from "../components/BtnComponent";

export default function Login() {
  return (
    <>
      <Header />
      <div className="login__page">
        <img src={HomeBG} alt="login__bg" />
        <div className="login__bg__overlay">
          <form className="login__form">
            <div className="login__form__heading">Login</div>
            <InputBox
              placeholder="Email"
              type="email"
              inputStyle={{ marginBottom: "1em" }}
            />
            <InputBox
              placeholder="Password"
              type="password"
              inputStyle={{ marginBottom: "1em" }}
            />
            <div className="login__form__row">
              <input
                className="login__form__checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                value="value1"
              />
              <label htmlFor="styled-checkbox-1">Remember Me</label>
              <Link className="login__form__row__link" to="/forgot-password">
                Forget Password?
              </Link>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <BtnComponent
                placeholder="Login"
                btnStyle={{ margin: "2.5em 0em", minWidth: "200px" }}
              />
            </Link>

            <div>Log In using</div>
            <div className="signup__social__links">
              <Link className="signup__social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.735"
                  height="25.644"
                  viewBox="0 0 13.735 25.644"
                >
                  <path
                    id="Icon_awesome-facebook-f"
                    data-name="Icon awesome-facebook-f"
                    d="M14.444,14.425l.712-4.641H10.7V6.772A2.321,2.321,0,0,1,13.32,4.265h2.025V.314A24.688,24.688,0,0,0,11.751,0C8.083,0,5.686,2.223,5.686,6.247V9.784H1.609v4.641H5.686V25.644H10.7V14.425Z"
                    transform="translate(-1.609)"
                    fill="#3b50ff"
                  />
                </svg>
              </Link>
              <Link className="signup__social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.969"
                  height="21.856"
                  viewBox="0 0 34.969 21.856"
                >
                  <path
                    id="Icon_awesome-google-plus-g"
                    data-name="Icon awesome-google-plus-g"
                    d="M22.144,13.862a9.27,9.27,0,0,1,.179,1.819c0,6.247-4.189,10.674-10.5,10.674a10.928,10.928,0,0,1,0-21.856,10.438,10.438,0,0,1,7.32,2.862L16.181,10.21a6.136,6.136,0,0,0-4.353-1.685,6.9,6.9,0,0,0,0,13.805,5.919,5.919,0,0,0,6.2-4.711h-6.2V13.862H22.144Zm10.552.366V11.057H29.509v3.172H26.337v3.187h3.172v3.172H32.7V17.416h3.172V14.229H32.7Z"
                    transform="translate(-0.9 -4.5)"
                    fill="#fb0606"
                  />
                </svg>
              </Link>
              <Link className="signup__social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.579"
                  height="24.024"
                  viewBox="0 0 29.579 24.024"
                >
                  <path
                    id="Icon_awesome-twitter"
                    data-name="Icon awesome-twitter"
                    d="M26.539,9.368c.019.263.019.526.019.788,0,8.014-6.1,17.248-17.248,17.248A17.131,17.131,0,0,1,0,24.683a12.541,12.541,0,0,0,1.464.075,12.141,12.141,0,0,0,7.526-2.59,6.073,6.073,0,0,1-5.668-4.2,7.645,7.645,0,0,0,1.145.094,6.412,6.412,0,0,0,1.6-.206A6.063,6.063,0,0,1,1.2,11.9v-.075a6.105,6.105,0,0,0,2.74.769A6.071,6.071,0,0,1,2.064,4.488a17.232,17.232,0,0,0,12.5,6.344,6.844,6.844,0,0,1-.15-1.389A6.068,6.068,0,0,1,24.906,5.3a11.935,11.935,0,0,0,3.848-1.464,6.046,6.046,0,0,1-2.665,3.341,12.153,12.153,0,0,0,3.491-.938,13.031,13.031,0,0,1-3.04,3.134Z"
                    transform="translate(0 -3.381)"
                    fill="#3ba4ff"
                  />
                </svg>
              </Link>
            </div>
            <div style={{ marginTop: "3em" }}>
              Already have an account?{" "}
              <Link className="login__form__row__link" to="/signup">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
