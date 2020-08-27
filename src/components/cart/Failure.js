import React, { Component } from "react";
import { Link } from "react-router-dom";

class Failure extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Something went Wrong!</h1>
          <h2>Please try again</h2>
          <Link to="/">Return To Home Page!</Link>
        </div>
      </div>
    );
  }
}

export default Failure;
