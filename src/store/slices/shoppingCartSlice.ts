import {createSlice} from "@reduxjs/toolkit";

const initialState: ShoppingCart[] = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCart(state,action: { payload: ShoppingCart[] }, ) {
      return [...state, ...action.payload]
    },
    addShoppingCartItem(state, action: { payload: ShoppingCart }) {
      const isProductInShoppingCart = state.findIndex((cartItem) => cartItem.product.id === action.payload.product.id);

      if (isProductInShoppingCart < 0) {
        state.push(action.payload);
      } else {
        state[isProductInShoppingCart].quantity = state[isProductInShoppingCart].quantity + action.payload.quantity;
      }
    },
    removeShoppingCartItem(state, action) {

    },
    incrementShoppingCartItemQuantity(state, action: { payload: string }) {
      const cartItemFilteredIndex =  state.findIndex((cartItem) => cartItem.product.id === action.payload);

      if (cartItemFilteredIndex >= 0) {
        state[cartItemFilteredIndex].quantity = state[cartItemFilteredIndex].quantity + 1;
      }
    },
    decrementShoppingCartItemQuantity(state, action: { payload: string }) {
      const cartItemFilteredIndex =  state.findIndex((cartItem) => cartItem.product.id === action.payload);

      if (cartItemFilteredIndex >= 0) {
        if (state[cartItemFilteredIndex].quantity > 1) {
          state[cartItemFilteredIndex].quantity = state[cartItemFilteredIndex].quantity - 1;
        } else {
          state.splice(cartItemFilteredIndex, 1);
        }
      }
    },
  }
})

export const {
  addShoppingCartItem,
  removeShoppingCartItem,
  incrementShoppingCartItemQuantity,
  decrementShoppingCartItemQuantity,
  setShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer
