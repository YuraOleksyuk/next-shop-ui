'use client';

import { useDispatch } from "react-redux";
import {FormEvent, ReactNode, useState} from "react";
import { addShoppingCartItem } from "@/store/slices/shoppingCartSlice";
import styled from "styled-components";

const AddToCardBtn = styled.button<{ $size: string; }>`
  display: inline-block;
  height: 50px;
  width: ${props => props.$size == 'sm' ? '50px' : 'auto'};
  line-height: 50px;
  background-color: #ee626b;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  padding: ${props => props.$size == 'sm' ? '0 10px' : '0 25px'};;
  border: none;
  border-radius: 25px;
  transition: all .3s;

  ${(props) => {
    switch (props.$size) {
      case "sm":
        return `background-color: yellow`;
      case "lg":
        return ``;
      default:
        return `background-color: yellow`;
    }
  }}

  svg {
    margin-right: ${props => props.$size == 'lg' ? '10px' : '0'};
  }
`;




type AddToCartType = 'sm' | 'lg';

const AddToCard = ({ product, size = "lg", children }: {product: Product, size: AddToCartType, children: ReactNode[] | ReactNode }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(addShoppingCartItem({
      quantity,
      product
    }));

    setQuantity(1);
  }

  const handleQuantityChange = (quantity: string) => {
    let newQuantity = quantity === '' ? 1 : parseInt(quantity);

    if (newQuantity < 1) {
      newQuantity = 1;
    }

    setQuantity(newQuantity)
  }

  return (
    <form id="qty"onSubmit={handleSubmit}>
      {size == 'lg' && (
        <input type="number" min="0" name="qty" value={quantity ? quantity : ''} onChange={e => handleQuantityChange(e.target.value)} className="form-control"/>
      )}
      <AddToCardBtn $size={size} type="submit">
        {children}
      </AddToCardBtn>
    </form>
  )
}

export default AddToCard;
