import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeToCart, food_list, getTotal } =
    useContext(StoreContext);
  // const { getTotal } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <table>
          <thead>
            <tr className="item-border">
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quatity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          {food_list.map((item, idx) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  {" "}
                  <tr className="item-border">
                    <th>
                      {" "}
                      <img className="item-img" src={item.image} alt="" />
                    </th>
                    <th>{item.name}</th>
                    <th>{item.price}</th>
                    <th>{cartItems[item._id]}</th>
                    <th>{item.price * cartItems[item._id]}</th>
                    <th
                      onClick={() => {
                        removeToCart(item._id);
                      }}
                    >
                      X
                    </th>
                  </tr>
                </>
              );
            }
          })}
        </table>

        <div className="cart-total-container">
          <h2 className="text-2xl">Cart Total</h2>
          <div className="cart-total">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <div className="cart-total">
            <p>Delivery Fee</p>
            <p>$0</p>
          </div>
          <div className="cart-total total">
            <p>Total</p>
            <p>${getTotal()}</p>
          </div>
          <button className="checkout">PROCED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
