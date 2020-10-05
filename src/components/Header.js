import React, { Component } from "react";

export default class Header extends Component {
  render() {
    console.log(new Date());
    return (
      <div className="header">
        <h3>Covid19 tracker</h3>
        <h5>Date : {new Date().toLocaleDateString()}</h5>
      </div>
    );
  }
}
