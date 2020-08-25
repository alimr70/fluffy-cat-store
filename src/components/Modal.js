import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-container">
                <div className="container">
                  <div id="modal">
                    <h3>item added to the cart</h3>
                    <img src={img} className="modal-img " alt="Product" />
                    <h3>{title}</h3>
                    <h2 className="text-muted">price: {price} EGP</h2>
                    <Link to="/">
                      <button className="btn-blue" onClick={() => closeModal()}>
                        store
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        className="btn-blue btn-yellow"
                        onClick={() => closeModal()}>
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
