import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">
          Products {this.props.count}
          {""}
        </div>
        <div className="filter-sort">
          Order{""}
          <select value={this.props.price} onChange={this.props.sortProducts}>
            <option value="">All</option>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-catagory">
          catagory{""}
          <select
            value={this.props.catagory}
            onChange={this.props.productCatagory}
          >
            <option value="">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="filter-size">
          Size{""}
          <select value={this.props.size} onChange={this.props.filterSize}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
