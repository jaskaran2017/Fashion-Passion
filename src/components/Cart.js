import React, { Component } from "react";
import formatCurrency from "../utils";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    const { cartItems } = this.props; //this line will check present status of the cart
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cartHeader">Cart is Empty.</div>
        ) : (
          <div className="cart cartHeader">
            You have {cartItems.length} items in your cart.
          </div>
        )}
        <div className="cart">
          <ul className="cart-item">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-li">
                <main>
                  <div className="liImg">
                    <img src={item.image} alt={item.title} />
                  </div>
                </main>
                <section>
                  <div className="cart-title">
                    {this.props.truncate(item?.title, 30)}
                  </div>
                  <div className="li-btn">
                    {item.count} x {formatCurrency(item.price)}{" "}
                    <button onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total :{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button
                onClick={() => {
                  this.setState({ showCheckout: true });
                }}
                className="proceed-btn"
              >
                Proceed
              </button>
            </div>
            {/* now this checkout form will be rendred conditionally, only when
            user clicks on proceed we will show this form */}
            {this.state.showCheckout && (
              <div className="cart">
                <form onSubmit={this.createorder}>
                  <ul>
                    <li>
                      <label>Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label>Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        required
                        name="address"
                        type="address"
                        onChange={this.handleInput}
                      />
                    </li>
                    <li>
                      <button
                        type="submit"
                        className="proceed-btn"
                        onClick={this.props.createOrder}
                      >
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
