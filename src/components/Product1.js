import React, { Component } from "react";
import formatCurrency from "../utils";

class ProductList extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
            <div className="card">
              <div className="product">
                <a href={"#" + product.title}>
                  <div className="pic">
                    <img src={product.image} alt={product.title} />
                  </div>
                </a>
              </div>
              <div className="product-price">
               
                <div className="para">
                  <p>{product.title}</p>
                </div>  
              <div className="lastSection container">
                  <h3>{formatCurrency(product.price)}</h3>
                <button className="product-btn">Add To Cart</button>
              </div>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ProductList;
