import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            brand,
            img,
            description,
            price,
            inCart,
          } = value.detailProduct;

          return (
            <div className="container">
              <div className="product-details">
                <div className="detail-section">
                  <h2>{title}</h2>
                  <img src={img} className="detail-img" alt="Product" />
                </div>
                <div className="detail-section">
                  <p>
                    <strong>
                      Price: {price} <span>EGP</span>
                    </strong>
                  </p>
                  <p>
                    brand: <span className="text-uppercase">{brand}</span>
                  </p>
                  <p>description:</p>
                  <p>{description}</p>
                  <div>
                    <Link to="/">
                      <button className="btn-blue">back to products</button>
                    </Link>
                    <button
                      className="btn-blue btn-yellow"
                      disabled={inCart ? true : false}
                      onClick={() => value.addToCart(id)}>
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
                {/* End Product description */}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
