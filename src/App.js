import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Success from "./components/cart/Success";
import Failure from "./components/cart/Failure";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:filter" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
