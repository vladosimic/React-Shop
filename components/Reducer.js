const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true };
    }
    case "DISPLAY_ITEMS": {
      return { ...state, cart: action.payload, loading: false };
    }
    case "ADD_TO_CART": {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, singleAmount: cartItem.singleAmount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case "DECREASE": {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, singleAmount: cartItem.singleAmount - 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case "DELETE": {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, singleAmount: 0 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case "TOTAL_AMOUNT": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, singleAmount } = cartItem;
          const itemTotal = price * singleAmount;

          cartTotal.total += itemTotal;
          cartTotal.amount += singleAmount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseInt(total.toFixed(2));

      return { ...state, total, amount };
    }

    default:
      return state;
  }
};

export default reducer;
