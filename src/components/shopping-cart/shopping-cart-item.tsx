import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {
  decrementShoppingCartItemQuantity,
  incrementShoppingCartItemQuantity
} from "@/store/slices/shoppingCartSlice";
import {useDispatch} from "react-redux";

const ShoppingCartItem = ({ shoppingCartItem }: { shoppingCartItem: ShoppingCart }) => {
  const dispatch = useDispatch()

  const incrementCartItemQuantity = (productId: string) => {
    dispatch(incrementShoppingCartItemQuantity(productId))
  }

  const decrementCartItemQuantity = (productId: string) => {
    dispatch(decrementShoppingCartItemQuantity(productId));
  }

  return (
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
  )
}

export default ShoppingCartItem
