import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, rating, price, inCart } = this.props.product;
    return (
      <React.Fragment>
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <React.Fragment>
                <div
                  className="img-container"
                  onClick={() => value.handleDetail(id)}>
                  <Link to="/details">
                    <img src={img} alt="Product" className="card-img" />
                  </Link>
                </div>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {inCart ? (
                    <p disabled>in Cart</p>
                  ) : (
                    <p>
                      Add To Cart <span className="fas fa-cart-plus"></span>{" "}
                    </p>
                  )}
                </button>
              </React.Fragment>
            )}
          </ProductConsumer>
          <span className="rating">
            <i className="rating-empty">
              <i className="rating-full" style={{ width: rating }}></i>
            </i>
          </span>
          <p className="card-title">{title}</p>
          <p className="text-blue card-price">
            {price} <span>EGP</span>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};
