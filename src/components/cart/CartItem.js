import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart-item">
      <div className="cart-item-column">
        <img src={img} className="cart-item-img" alt="product" />
      </div>
      <div className="cart-item-column">
        <span>Product: </span>
        {title}
      </div>
      <div className="cart-item-column">
        <span>Price: </span>
        {price}
      </div>
      <div className="cart-item-column">
        <div className="cart-item-amount">
          <span className="cart-item-amount-btn" onClick={() => decrement(id)}>
            -
          </span>
          <span className="cart-item-amount-btn">{count}</span>
          <span className="cart-item-amount-btn" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/*  */}
      <div className="cart-item-column">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="cart-item-column">
        <strong>item total: {total} EGP</strong>
      </div>
    </div>
  );
}

export default CartItem;
