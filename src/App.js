import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import OrderPlaced from "./pages/OrderPlaced";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/order-placed" component={OrderPlaced} />
          <Route path="/track-order" component={TrackOrder} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
