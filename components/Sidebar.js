import React from "react";
import styles from "../styles/Sidebar.module.css";
import { useAppContext } from "./Context";

const Sidebar = () => {
  const {
    cart,
    addToCart,
    decreaseFromCart,
    deleteFromCart,
    amount,
    total,
    showSidebar,
    setShowSidebar,
  } = useAppContext();

  return (
    <div
      className={styles.sidebar}
      style={showSidebar ? { marginRight: "0" } : { marginRight: "-100%" }}
    >
      {amount === 0 ? (
        <h4>Cart Is Empty</h4>
      ) : (
        cart.map((item) => {
          const { id, singleAmount, title } = item;
          if (singleAmount > 0) {
            return (
              <div key={id} className={styles.sidebarItems}>
                <h5>{title}</h5>
                <span onClick={() => decreaseFromCart(id)}>-</span>
                <span>{singleAmount}</span>
                <span onClick={() => addToCart(id)}>+</span>
                <button onClick={() => deleteFromCart(id)}>Delete</button>
              </div>
            );
          }
        })
      )}
      <h4>Total : ${total}</h4>
      <h4>Items: {amount}</h4>
      <span
        className={styles.closeSidebar}
        onClick={() => setShowSidebar(false)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default Sidebar;
