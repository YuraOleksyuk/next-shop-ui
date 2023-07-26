'use client';

import {configureStore, Middleware} from "@reduxjs/toolkit";

import shoppingCartReducer from './slices/shoppingCartSlice';
import checkoutReducer from "@/store/slices/checkoutSlice";
import {saveToLocalStorage} from "@/utils/local-storage";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith('shoppingCart/') && action.type != 'shoppingCart/setShoppingCart') {
    const shoppingCartState = store.getState().shoppingCart
    saveToLocalStorage('shoppingCartState', shoppingCartState)
  } else if (action.type.startsWith('checkout/')) {
    const checkoutState = store.getState().checkout;
    saveToLocalStorage('checkout', checkoutState);
  }

  return result;
}

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    checkout: checkoutReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
