import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./styles/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => res.json())
      .then((response) => this.setState({ data: response, loading: false }))
      .catch((err) => console.log(err));
  }
  // async fetchData() {
  //   let data = await fetch("https://api.covid19api.com/countries");
  //   console.log(data.json());
  // }

  render() {
    console.log(this.state.data);
    if (this.state.loading === true) {
      return <div>loading</div>;
    } else {
      return (
        <div>
          <Header />
          <List data={this.state.data} />
        </div>
      );
    }
  }
}
