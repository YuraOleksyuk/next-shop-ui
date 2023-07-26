import {useMemo} from "react";

export const formatPrice = (price: number) => {
  return `$ ${price}`
}

export const calculateTotal = (shoppingCart: ShoppingCart[]): number => {
  return shoppingCart.reduce((sum: number, cartItem: ShoppingCart): number => {
    return sum + (cartItem.product.price * cartItem.quantity)
  }, 0)
}

export const calculateQuantity = (shoppingCart: ShoppingCart[]): number => {
  return shoppingCart.reduce((sum: number, cartItem: ShoppingCart): number => {
    return sum + cartItem.quantity
  }, 0)
}
