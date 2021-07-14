import React, { Component } from "react";
import formatCurrency from "../utils";

export default class Cart extends Component {
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
              <button className="proceed-btn">Proceed</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
