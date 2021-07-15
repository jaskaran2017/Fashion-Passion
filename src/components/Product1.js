import React, { Component } from "react";
import formatCurrency from "../utils";
import { AttentionSeeker, Zoom } from "react-awesome-reveal";
import Modal from "react-modal";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product: product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <AttentionSeeker effect="pulse" cascade>
          <ul className="products">
            {this.props.product.map((product) => (
              <li key={product.id}>
                <div className="card">
                  <div className="product">
                    <a
                      href={"#" + product.id}
                      onClick={() => this.openModal(product)}
                    >
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
                      <button
                        className="product-btn"
                        onClick={() => this.props.addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </AttentionSeeker>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <div className="product-div">
                <div className="close-modal">
                  <button onClick={() => this.closeModal()}>X</button>
                </div>
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-detail">
                  <p>
                    <h1>{product.title}</h1>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Available Size{" "}
                    {product.size.map((x) => (
                      <span>
                        {" "}
                        <button>{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="lastdiv">
                    <p className="modal-price">
                      {formatCurrency(product.price)}
                    </p>
                    <button
                      className="proceed-btn"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default ProductList;
