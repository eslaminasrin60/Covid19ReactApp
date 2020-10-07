import React, { Component } from "react";

export default class extends Component {
  state = { color: "white" };
  render() {
    let item = this.props.item;
    return (
      <div className="listnode" style={{ backgroundColor: this.state.color }}>
        <div>
          <p className="title">{item.country}</p>
        </div>
        <div>
          <p className="content">Total cases : {item.cases}</p>
        </div>
        <div>
          <p className="content">Total deaths : {item.deaths}</p>
        </div>
        <hr />
        <div>
          <button
            className="button"
            onClick={() => this.setState({ color: "red" })}
          >
            More Infomation ℹ️{" "}
          </button>
        </div>
      </div>
    );
  }
}
