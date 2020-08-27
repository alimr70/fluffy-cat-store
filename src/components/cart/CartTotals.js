import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import FawryPayButton from "./FawryPayButton";

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="cart-total">
          <div className="payment-methods">
            <h3>Available Payment Methods: </h3>
            <FawryPayButton />
          </div>
          <h3 className="text-title">
            <span>subtotal:</span> {cartSubTotal} EGP
          </h3>
          <h3 className="text-title">
            <span>tax(14%):</span> {cartTax} EGP
          </h3>
          <h3 className="text-title">
            <span>total:</span> {cartTotal} EGP
          </h3>
          <Link to="/">
            <button
              className="clear-cart-btn"
              type="button"
              onClick={() => clearCart()}>
              clear cart
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
