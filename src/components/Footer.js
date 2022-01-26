import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div className="footer__col">
        <div className="footer__col__line"></div>
        <Link to="/" className="footer__link">
          Recommend a friend
        </Link>
        <Link to="/" className="footer__link">
          Shipping information
        </Link>
        <Link to="/" className="footer__link">
          Privacy policy
        </Link>
        <Link to="/" className="footer__link">
          Terms & Conditions
        </Link>
        <Link to="/" className="footer__link">
          Gift Certificates
        </Link>
      </div>
      <div className="footer__col">
        <div className="footer__col__line"></div>
        <Link to="/" className="footer__link">
          Blog
        </Link>
        <Link to="/" className="footer__link">
          Contact us
        </Link>
        <Link to="/" className="footer__link">
          FAQ
        </Link>
        <Link to="/" className="footer__link">
          Press
        </Link>
      </div>
      <div className="footer__col">
        <div className="footer__col__line"></div>
        <div className="footer__link">Subscribe</div>
        <input type="email" className="footer__input" placeholder="Email" />
      </div>
      <div className="footer__col">
        <div className="footer__col__line"></div>
        <div className="footer__social__link__row">
          <a href="#" className="footer__social__link">
            <svg
              id="_20673"
              data-name="20673"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33.522 33.382"
            >
              <path
                id="Path_46"
                data-name="Path 46"
                d="M16.761.349a16.752,16.752,0,0,0-2.8,33.27V20.607H9.922V15.924h4.043V12.471c0-4.006,2.447-6.189,6.021-6.189a33.368,33.368,0,0,1,3.61.184v4.188H21.118c-1.943,0-2.318.923-2.318,2.279v2.989h4.637l-.6,4.683H18.8V33.731A16.753,16.753,0,0,0,16.761.349Z"
                transform="translate(0 -0.349)"
                fill="#006dd9"
              />
            </svg>
          </a>
          <a href="#" className="footer__social__link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.816 28.288">
              <g id="_733635" data-name="733635" transform="translate(0)">
                <g
                  id="Group_31"
                  data-name="Group 31"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    d="M34.816,51.349A14.881,14.881,0,0,1,30.7,52.476a7.1,7.1,0,0,0,3.14-3.945,14.264,14.264,0,0,1-4.526,1.728A7.137,7.137,0,0,0,16.971,55.14a7.35,7.35,0,0,0,.165,1.628A20.2,20.2,0,0,1,2.424,49.3a7.14,7.14,0,0,0,2.193,9.54,7.049,7.049,0,0,1-3.225-.879v.078a7.17,7.17,0,0,0,5.719,7.013,7.124,7.124,0,0,1-1.871.235,6.311,6.311,0,0,1-1.351-.122,7.206,7.206,0,0,0,6.67,4.972,14.342,14.342,0,0,1-8.85,3.044A13.369,13.369,0,0,1,0,73.085a20.1,20.1,0,0,0,10.95,3.2c13.134,0,20.315-10.88,20.315-20.311,0-.316-.011-.62-.026-.923A14.239,14.239,0,0,0,34.816,51.349Z"
                    transform="translate(0 -48)"
                    fill="#0080ff"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href="#" className="footer__social__link">
            <svg
              id="Group_32"
              data-name="Group 32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.025 29.031"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#ff00a5" />
                  <stop offset="1" stopColor="#f39b12" />
                </linearGradient>
              </defs>
              <path
                id="Path_48"
                data-name="Path 48"
                d="M1.823,1.977C-.451,4.339.014,6.849.014,14.472c0,6.331-1.1,12.677,4.676,14.172,1.805.464,17.8.464,19.6,0,2.407-.621,4.365-2.573,4.633-5.978.037-.475.037-15.9,0-16.384C28.641,2.654,26.409.564,23.468.141A26.036,26.036,0,0,0,19.2.008C6.933.014,4.243-.532,1.823,1.977Z"
                transform="translate(0.07 0.038)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_49"
                data-name="Path 49"
                d="M13.823,3.141c-4.379,0-8.536-.39-10.125,3.686-.656,1.683-.561,3.87-.561,7,0,2.747-.088,5.329.561,7,1.585,4.078,5.776,3.688,10.122,3.688,4.193,0,8.516.437,10.123-3.688.657-1.7.561-3.854.561-7,0-4.175.23-6.87-1.794-8.893-2.05-2.05-4.822-1.793-8.892-1.793Zm-.957,1.926c9.133-.014,10.3-1.03,9.654,13.075-.228,4.989-4.026,4.441-8.7,4.441-8.514,0-8.758-.244-8.758-8.761,0-8.616.675-8.751,7.8-8.758ZM19.527,6.84a1.282,1.282,0,1,0,1.282,1.282A1.282,1.282,0,0,0,19.527,6.84Zm-5.7,1.5a5.487,5.487,0,1,0,5.486,5.488,5.488,5.488,0,0,0-5.486-5.488Zm0,1.926c4.709,0,4.715,7.124,0,7.124S9.108,10.265,13.823,10.265Z"
                transform="translate(0.73 0.691)"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
        <Link to="/" className="footer__col__brand__name">
          OC
        </Link>
      </div>
    </div>
  );
}
