"use client";

import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";
import { setShoppingCart } from "@/store/slices/shoppingCartSlice";
import Link from "next/link";
import {loadFromLocalStorage} from "@/utils/local-storage";
import ShoppingCartItem from "@/components/shopping-cart/shopping-cart-item";
import {useRouter} from "next/navigation";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [shoppingCartOpened, setShoppingCartOpened] = useState(false);

  const toggleShippingCart = () => {
    setShoppingCartOpened(!shoppingCartOpened)
  }

  const handleCheckoutClick = (e: any, path: string) => {
    console.log('handleCheckoutClick')
    setShoppingCartOpened(false)
    router.push(path)
  }

  useEffect(() => {
    const shoppingCartProducts = loadFromLocalStorage('shoppingCartState') || []
    dispatch(setShoppingCart(shoppingCartProducts))
  }, [])

  const shoppingCartItems: ShoppingCart[] = useSelector((state: RootState) => {
    return state.shoppingCart;
  });

  return (
    <div className="shopping-cart">
      <button className="order_summary__icon" onClick={toggleShippingCart}>
        <FontAwesomeIcon icon={faCartShopping} />
        Cart
        { shoppingCartItems && <span className="order_summary__quantity">{shoppingCartItems.length}</span>}
      </button>
      <div className={shoppingCartOpened ? 'shopping-cart__wrapper--opened' : 'shopping-cart__wrapper--closed'}>
        <div className="shopping-cart__overlay" onClick={toggleShippingCart}></div>
        <div className="shopping-cart__modal">
          <div className="shopping-cart__modal-head">
            <span className="shopping-cart__modal-title">Cart:</span>
            <span className="shopping-cart__modal-count">({shoppingCartItems.length})</span>
          </div>
          <div className="shopping-cart__modal-main">
            {shoppingCartItems.map((shoppingCartItem: ShoppingCart) => (
              <ShoppingCartItem key={shoppingCartItem.product.id} shoppingCartItem={shoppingCartItem}/>
            ))}
          </div>
          <div className="shopping-cart__modal-footer">
            <a className="cd-btn cd-btn--primary"
                  onClick={(e) => handleCheckoutClick(e, '/checkout')}>To order</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;
