import React from "react";
import { useAppContext } from "./Context";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const { setShowSidebar, amount } = useAppContext();

  return (
    <div className={styles.navbar}>
      <ul>
        <li onClick={() => setShowSidebar(true)}>View Cart</li>
        <li>Items ({amount})</li>
      </ul>
    </div>
  );
};

export default Nav;
