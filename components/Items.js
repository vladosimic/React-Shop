import React from "react";
import { useAppContext } from "./Context";
import styles from "../styles/Home.module.css";

const Items = ({ item }) => {
  const { category, id, description, image, price, title } = item;
  const { addToCart } = useAppContext();
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <h5>Category: {category}</h5>
      <h5>Price: ${price}</h5>
      <p>{description}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Items;
