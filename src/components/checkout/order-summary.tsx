import {useSelector} from "react-redux";
import {RootState} from "@/store";
import ShoppingCartItem from "@/components/shopping-cart/shopping-cart-item";

const OrderSummary = () => {

  const shoppingCartItems: ShoppingCart[] = useSelector((state: RootState) => {
    return state.shoppingCart;
  });

  return (
    <>
      <h2 className="text--md text--mb-30">Order summary</h2>
      <div className="summary-main">
        {shoppingCartItems.map((shoppingCartItem: ShoppingCart) => (
          <ShoppingCartItem key={shoppingCartItem.product.id} shoppingCartItem={shoppingCartItem}/>
        ))}
      </div>
    </>
  )

}

export default OrderSummary
