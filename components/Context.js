import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from "../components/Reducer";
import { products } from "../products";

const AppContext = React.createContext();

const INITIAL = {
  loading: false,
  cart: [],
  amount: 0,
  total: 0,
};

const Context = ({ children }) => {
  const [mainState, dispatch] = useReducer(reducer, INITIAL);
  const [showSidebar, setShowSidebar] = useState(true);
  const getCategory = [
    "All",
    ...new Set(mainState.cart.map((item) => item.category)),
  ];

  const getData = () => {
    dispatch({ type: "LOADING" });
    const updateCart = products.map((item) => {
      return { ...item, singleAmount: 0 };
    });
    dispatch({ type: "DISPLAY_ITEMS", payload: updateCart });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const decreaseFromCart = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const deleteFromCart = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [mainState.cart]);

  return (
    <AppContext.Provider
      value={{
        ...mainState,
        addToCart,
        decreaseFromCart,
        deleteFromCart,
        showSidebar,
        setShowSidebar,
        getCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };

