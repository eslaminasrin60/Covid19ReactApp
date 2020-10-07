import React, { Component } from "react";
import Listnode from "./Listnode";

export default class List extends Component {
  render() {
    let items = this.props.data;
    return (
      <div className="list">
        {items.map((item, index) => (
          <Listnode key={index} item={item} />
        ))}
      </div>
    );
  }
}
