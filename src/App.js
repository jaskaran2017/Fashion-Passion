import React, { Component } from "react";
import data from "./data.json";
import Product1 from "./components/Product1";
import Filter from "./components/Filter";
// import MediaCard from "./components/MediaCard";

//////////////

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: "",
      catagory: "",
    };
  }

  sortProducts = (e) => {
    // console.log(e.target.value);

    const sort = e.target.value;

    this.setState((state) => ({
      sort: sort,
      product: this.state.product
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        ),
    }));
  };
  filterSize = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, product: data.products });
    } else {
      this.setState({
        size: e.target.value, //size,
        product: data.products.filter(
          (product) => product.availableSize.indexOf(e.target.value) >= 0
        ),
      });
    }
  };
  productCatagory = (e) => {
    //func
    // console.log(e.target.value);

    if (e.target.value === "") {
      this.setState({ category: e.target.value, product: data.products });
    } else {
      this.setState({
        category: e.target.value,
        product: data.products.filter(
          (item) => item.category.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Fashion is Passion</a>
        </header>
        <main>
          <div className="content">
            <div className="main-content">
              <Filter
                count={this.state.product.length}
                size={this.state.size}
                sort={data.products.price}
                catagory={data.products.catagory}
                filterSize={this.filterSize}
                sortProducts={this.sortProducts}
                productCatagory={this.productCatagory}
              />
              <Product1 product={this.state.product} />
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>&copy; All Right is Reserved.</footer>
      </div>
    );
  }
}
