import React, { Component } from "react";
import { Link } from "react-router-dom";

class Success extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Succsesful Payment</h1>
          <h2>Thank you for choosing us!</h2>
          <Link to="/">Return To Home Page!</Link>
        </div>
      </div>
    );
  }
}

export default Success;
