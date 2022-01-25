import React from "react";
import "./TrackOrder.scss";
import { Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import productImg from "../assets/productPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrackOrderProduct from "../components/TrackOrderProduct";

export default function TrackOrder() {
  return (
    <>
      <Header search={true} />
      <div className="container track__order__container">
        <div className="track__order__container__heading">My Orders</div>
        <Nav
          variant="pills"
          defaultActiveKey="/track-order/"
          className="track__order__container__content__header"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/track-order/"
              href="/track-order/"
              className="track__order__nav__pill"
            >
              Pending
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/track-order/delivered"
              eventKey="link-1"
              className="track__order__nav__pill"
            >
              Delivered
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/track-order/canceled"
              eventKey="link-2"
              className="track__order__nav__pill"
            >
              Canceled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="track__order__container__content">
          <Switch>
            <Route path="/track-order/">
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
            </Route>
            <Route path="/track-order/delivered">
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
            </Route>
            <Route path="/track-order/canceled">
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
              <TrackOrderProduct productImg={productImg} />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}
