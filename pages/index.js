import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useAppContext } from "../components/Context";
import styles from "../styles/Home.module.css";
import Items from "../components/Items";

export default function Home() {
  const { cart, loading, getCategory } = useAppContext();
  const [currentCategory, setCurrentCategory] = useState("All");
  const [categoryLength, setCategoryLength] = useState();

  useEffect(() => {
    const getCurrentCategory = cart
      .map((item) => {
        if (currentCategory === item.category) {
          return item;
        }
      })
      .filter((category) => category !== undefined);

    setCategoryLength(getCurrentCategory.length);
  }, [currentCategory]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>{currentCategory.toUpperCase()}</h2>
      <p>
        {categoryLength === 0
          ? `${cart.length} products(s) found`
          : `${categoryLength} product(s) found`}
      </p>
      <div className={styles.gridTwo}>
        <div className={styles.categories}>
          <h3>Categories:</h3>
          {getCategory.map((category, index) => {
            return (
              <p
                key={index}
                onClick={(e) => setCurrentCategory(e.target.innerHTML)}
              >
                {category}
              </p>
            );
          })}
        </div>

        {!loading ? (
          <div className={styles.gridthree}>
            {cart.map((item) => {
              if (currentCategory === item.category) {
                return <Items key={item.id} item={item} />;
              } else if (currentCategory === "All") {
                return <Items key={item.id} item={item} />;
              }
            })}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
