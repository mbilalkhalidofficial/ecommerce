import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Select from "react-select";
import BtnComponent from "./BtnComponent";

export default function Header({ search }) {
  const [navbar, setNavbar] = useState(false);
  const [explorePanel, setExplorePanel] = useState(false);

  const changeBackgrond = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgrond);
  window.addEventListener("mouseover", changeBackgrond);

  const languagePanel = () => {
    if (document.querySelector(".language__panel").style.display === "none") {
      document.querySelector(".language__panel").style.display = "flex";
    } else {
      document.querySelector(".language__panel").style.display = "none";
    }
  };
  const selectOptions = [
    { value: "Germany", label: "Germany" },
    { value: "English", label: "English" },
    { value: "Russian", label: "Russian" },
    { value: "Hindi", label: "Hindi" },
  ];

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={navbar ? "nav__bar active" : "nav__bar"}
    >
      <Navbar.Brand as={Link} to="/" className="brand__name">
        OC
      </Navbar.Brand>
      <div className="catagory__select">
        <button
          className="catagory__select__btn"
          onClick={() => {
            if (explorePanel == false) {
              setExplorePanel(true);
            } else if (explorePanel == true) {
              setExplorePanel(false);
            }
          }}
        >
          <span>Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.624"
            height="5.702"
            viewBox="0 0 8.624 5.702"
          >
            <g id="down-arrow" transform="translate(0.539 0.5)">
              <g
                id="Group_157"
                data-name="Group 157"
                transform="translate(0 0)"
              >
                <path
                  id="Path_635"
                  data-name="Path 635"
                  d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                  transform="translate(0 -117.336)"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </g>
            </g>
          </svg>
        </button>
        {explorePanel ? (
          <ul className="catagory__select__links__list">
            <li className="catagory__select__item">
              <Link to="/" className="catagory__select__link">
                <span>Toys</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.624"
                  height="5.702"
                  viewBox="0 0 8.624 5.702"
                >
                  <g
                    id="Group_157"
                    data-name="Group 157"
                    transform="translate(0.539 0.5)"
                  >
                    <path
                      id="Path_635"
                      data-name="Path 635"
                      d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                      transform="translate(0 -117.336)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </Link>
              <ul className="catagory__select__links__list__sub">
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
              </ul>
            </li>
            <li className="catagory__select__item">
              <Link className="catagory__select__link">
                <span>Baby</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.624"
                  height="5.702"
                  viewBox="0 0 8.624 5.702"
                >
                  <g
                    id="Group_157"
                    data-name="Group 157"
                    transform="translate(0.539 0.5)"
                  >
                    <path
                      id="Path_635"
                      data-name="Path 635"
                      d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                      transform="translate(0 -117.336)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </Link>
              <ul className="catagory__select__links__list__sub">
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
              </ul>
            </li>
            <li className="catagory__select__item">
              <Link className="catagory__select__link">
                <span>Woman</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.624"
                  height="5.702"
                  viewBox="0 0 8.624 5.702"
                >
                  <g
                    id="Group_157"
                    data-name="Group 157"
                    transform="translate(0.539 0.5)"
                  >
                    <path
                      id="Path_635"
                      data-name="Path 635"
                      d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                      transform="translate(0 -117.336)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </Link>
              <ul className="catagory__select__links__list__sub">
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
              </ul>
            </li>
            <li className="catagory__select__item">
              <Link className="catagory__select__link">
                <span>Man</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.624"
                  height="5.702"
                  viewBox="0 0 8.624 5.702"
                >
                  <g
                    id="Group_157"
                    data-name="Group 157"
                    transform="translate(0.539 0.5)"
                  >
                    <path
                      id="Path_635"
                      data-name="Path 635"
                      d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                      transform="translate(0 -117.336)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </Link>
              <ul className="catagory__select__links__list__sub">
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
              </ul>
            </li>
            <li className="catagory__select__item">
              <Link className="catagory__select__link">
                <span>Health</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.624"
                  height="5.702"
                  viewBox="0 0 8.624 5.702"
                >
                  <g
                    id="Group_157"
                    data-name="Group 157"
                    transform="translate(0.539 0.5)"
                  >
                    <path
                      id="Path_635"
                      data-name="Path 635"
                      d="M7.454,117.442a.286.286,0,0,0-.445,0l-3.236,3.723L.537,117.442a.286.286,0,0,0-.445,0,.4.4,0,0,0,0,.511l3.459,3.979a.286.286,0,0,0,.445,0l3.459-3.979A.4.4,0,0,0,7.454,117.442Z"
                      transform="translate(0 -117.336)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </Link>
              <ul className="catagory__select__links__list__sub">
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
                <li className="catagory__select__item__sub">
                  <Link className="catagory__select__link__sub">Toys</Link>
                </li>
              </ul>
            </li>
          </ul>
        ) : null}
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {search ? (
            <Nav.Link>
              <form className="header__form">
                <input
                  type="text"
                  className="header__form__input"
                  placeholder="Search 100M+ Products"
                />
                <BtnComponent
                  placeholder="Search"
                  btnStyle={{ flex: 1, position: "absolute", right: "0px" }}
                />
              </form>
            </Nav.Link>
          ) : null}
          <div className="nav__link__wrapper">
            <Nav.Link className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22.586 22.581"
                fill="currentColor"
              >
                <path
                  id="Icon_ionic-ios-globe"
                  data-name="Icon ionic-ios-globe"
                  d="M14.665,3.375h-.038a11.29,11.29,0,0,0,.005,22.581h.038a11.29,11.29,0,1,0-.005-22.581Zm9.781,10.53H20.234A21.376,21.376,0,0,0,19.7,9.769a16.536,16.536,0,0,0,2.7-1.14A9.725,9.725,0,0,1,24.447,13.905Zm-10.541,0H10.551a19.293,19.293,0,0,1,.478-3.751,16.514,16.514,0,0,0,2.877.385Zm0,1.52v3.36a16.584,16.584,0,0,0-2.877.385,19.291,19.291,0,0,1-.478-3.745Zm1.52,0h3.327a19.18,19.18,0,0,1-.478,3.74,16.2,16.2,0,0,0-2.85-.38Zm0-1.52V10.54a16.584,16.584,0,0,0,2.85-.38,19.237,19.237,0,0,1,.478,3.745Zm5.938-6.4a15.079,15.079,0,0,1-2.063.841,11.208,11.208,0,0,0-1.438-2.958A9.822,9.822,0,0,1,21.363,7.506Zm-3.5,1.232a15.276,15.276,0,0,1-2.443.326V5.079A6.577,6.577,0,0,1,17.868,8.738Zm-3.962-3.68v4a15.013,15.013,0,0,1-2.47-.331A6.574,6.574,0,0,1,13.905,5.058Zm-2.475.347A11.3,11.3,0,0,0,10,8.342a15.418,15.418,0,0,1-2.036-.836A9.675,9.675,0,0,1,11.43,5.405Zm-4.5,3.23A16.208,16.208,0,0,0,9.6,9.764,20.514,20.514,0,0,0,9.069,13.9H4.889A9.675,9.675,0,0,1,6.93,8.635Zm-2.046,6.79h4.18A21.321,21.321,0,0,0,9.6,19.561,17.2,17.2,0,0,0,6.925,20.69,9.726,9.726,0,0,1,4.884,15.425Zm3.078,6.4A15.191,15.191,0,0,1,10,20.989a11.336,11.336,0,0,0,1.428,2.942A9.916,9.916,0,0,1,7.962,21.825ZM11.436,20.6a15.092,15.092,0,0,1,2.47-.331v4.006A6.564,6.564,0,0,1,11.436,20.6Zm3.99,3.653v-3.99a15.276,15.276,0,0,1,2.443.326A6.574,6.574,0,0,1,15.425,24.251Zm2.443-.309a11.207,11.207,0,0,0,1.438-2.958,14.831,14.831,0,0,1,2.063.847A9.935,9.935,0,0,1,17.868,23.942ZM22.4,20.7a16.536,16.536,0,0,0-2.7-1.14,21.264,21.264,0,0,0,.532-4.131h4.212A9.682,9.682,0,0,1,22.4,20.7Z"
                  transform="translate(-3.375 -3.375)"
                />
              </svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19.188 19.188"
              >
                <path
                  id="Icon_material-person-outline"
                  data-name="Icon material-person-outline"
                  d="M15.594,8.279A2.518,2.518,0,1,1,13.075,10.8a2.518,2.518,0,0,1,2.518-2.518m0,10.793c3.562,0,7.315,1.751,7.315,2.518v1.319H8.279V21.59c0-.768,3.754-2.518,7.315-2.518M15.594,6a4.8,4.8,0,1,0,4.8,4.8A4.8,4.8,0,0,0,15.594,6Zm0,10.793C12.392,16.793,6,18.4,6,21.59v3.6H25.188v-3.6C25.188,18.4,18.8,16.793,15.594,16.793Z"
                  transform="translate(-6 -6)"
                />
              </svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21.453 20.614"
                fill="currentColor"
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
                    stroke="currentColor"
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
                    stroke="currentColor"
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
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
