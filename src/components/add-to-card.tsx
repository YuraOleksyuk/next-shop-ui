'use client';

import {useDispatch} from 'react-redux';
import {FormEvent, ReactNode, useState} from 'react';
import {addShoppingCartItem} from '@/store/slices/shoppingCartSlice';

import {faBox, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type AddToCartType = 'sm' | 'lg' | 'circle';

const AddToCard = ({product, size = 'lg', children}: {
  product: Product,
  size: AddToCartType,
  children: ReactNode[] | ReactNode
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    setButtonClicked(true);

    dispatch(addShoppingCartItem({
      quantity,
      product
    }))

    setQuantity(1);
    setTimeout(() => {
      setButtonClicked(false);
    }, 5000)
  }

  const handleQuantityChange = (quantity: string) => {
    let newQuantity = quantity === '' ? 1 : parseInt(quantity);

    if (newQuantity < 1) {
      newQuantity = 1;
    }

    setQuantity(newQuantity);
  }

  return (
    <form id="qty" onSubmit={handleSubmit}>
      {size == 'lg' && (
        <input type="number"
               min="0"
               name="qty"
               value={quantity ? quantity : ''}
               onChange={e => handleQuantityChange(e.target.value)}
        />
      )}
      <button disabled={buttonClicked}
              className={`button button--${size} ${buttonClicked ? 'button--clicked' : ''}`}
              type="submit">
        <FontAwesomeIcon className="fa-shopping-cart" icon={faShoppingCart}/>
        <FontAwesomeIcon className="fa-box" icon={faBox}/>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added</span>
      </button>
    </form>
  )
}

export default AddToCard;
