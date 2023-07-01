"use client";

import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from "react";
import {
  incrementShoppingCartItemQuantity,
  decrementShoppingCartItemQuantity,
  setShoppingCart
} from "@/store/slices/shoppingCartSlice";
import Link from "next/link";
import {loadFromLocalStorage} from "@/utils/local-storage";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [shoppingCartOpened, setShoppingCartOpened] = useState(false);

  const toggleShippingCart = () => {
    setShoppingCartOpened(!shoppingCartOpened)
  }

  const incrementCartItemQuantity = (productId: string) => {
    dispatch(incrementShoppingCartItemQuantity(productId))
  }

  const decrementCartItemQuantity = (productId: string) => {
    dispatch(decrementShoppingCartItemQuantity(productId));
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
              <div className="shopping-cart__item" key={shoppingCartItem.product.id}>
                <div className="shopping-cart__item-img">
                  <img
                    src={shoppingCartItem.product.thumb}
                    alt={shoppingCartItem.product.title}/>
                </div>
                <div className="shopping-cart__item-info">
                  <h3 className="shopping-cart__item-title">{shoppingCartItem.product.title}</h3>
                  <p className="shopping-cart__item-description">Lorem Ipsum is simply dummy text.</p>
                  <span>$ {shoppingCartItem.product.price}</span>
                </div>
                <div className="shopping-cart__controls">
                  <button className="shopping-cart__controls-btn"
                          onClick={(event) => incrementCartItemQuantity(shoppingCartItem.product.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="pqt">{shoppingCartItem.quantity}x</span>
                  <button className="shopping-cart__controls-btn"
                          onClick={(e) => decrementCartItemQuantity(shoppingCartItem.product.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="shopping-cart__modal-footer">
            <Link className="cd-btn cd-btn--primary" href="/checkout">To order</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;
