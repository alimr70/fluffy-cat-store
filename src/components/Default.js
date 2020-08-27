import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>404</h1>
          <h1>error</h1>
          <h2>Page not found</h2>
          <h3>
            the requested url <span>{this.props.location.pathname}</span> was
            not founs
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
