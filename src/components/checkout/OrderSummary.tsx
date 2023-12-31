'use client'

import {useSelector} from "react-redux";
import {RootState} from "@/store";
import ShoppingCartItem from "@/components/shopping-cart/shopping-cart-item";

const OrderSummary = () => {

  let shoppingCartItems: ShoppingCart[] = useSelector((state: RootState) => {
    return state.shoppingCart;
  });

  return (
    <div>
      <h2 className="text--md text--mb-30">Order summary</h2>
      <div className="summary-main">
        {shoppingCartItems.map((shoppingCartItem: ShoppingCart, index) => (
          <ShoppingCartItem key={`${index}-` + shoppingCartItem.product.id} shoppingCartItem={shoppingCartItem}/>
        ))}
      </div>
    </div>
  )

}

export default OrderSummary
