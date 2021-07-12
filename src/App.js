import React, { Component } from "react";
import data from "./data.json";
import Product1 from "./components/Product1";
// import MediaCard from "./components/MediaCard";

//////////////

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Fashion is Passion</a>
        </header>
        <main>
          <div className="content">
            <div className="main-content">
              <Product1 products={this.state.products} />
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>&copy; All Right is Reserved.</footer>
      </div>
    );
  }
}
