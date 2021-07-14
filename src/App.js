import React, { Component } from "react";
import data from "./data.json";
import Product1 from "./components/Product1";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
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
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }
  truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  createOrder = (order) => {
    alert("Happy Shoppping");
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();

    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item.id !== product.id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item.id !== product.id))
    );
  };

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
              <Product1
                product={this.state.product}
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                truncate={this.truncate}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>&copy; All Right is Reserved.</footer>
      </div>
    );
  }
}
