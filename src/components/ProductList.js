import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "./Context";

class ProductList extends Component {
  render() {
    const { match } = this.props;
    const { filter } = match.params;
    if (filter === undefined) {
      return (
        <React.Fragment>
          <div className="container">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <ProductConsumer>
              {(value) => {
                const filterd = value.products.filter(
                  (items) => items.type === filter
                );
                return filterd.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ProductList;
