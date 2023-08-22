'use client'

import PageBanner from "@/components/page-banner";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadFromLocalStorage} from "@/utils/local-storage";
import {setCheckout} from "@/store/slices/checkoutSlice";
import {RootState} from "@/store";

import dynamic from 'next/dynamic'

const CheckoutContainer = dynamic(() => import('@/components/checkout/CheckoutContainer'), { ssr: false })
const EmptyShoppingCartMsg = dynamic(() => import('@/components/checkout/EmptyShoppingCartMsg'), { ssr: false })

export default function Checkout() {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state: RootState) => {
    return state.shoppingCart;
  })

  useEffect(() => {
    const checkoutData = loadFromLocalStorage('checkout');
    dispatch(setCheckout(checkoutData));
  }, []);

  return (
    <>
      <PageBanner title="Checkout"/>
      <div className="checkout">
        {shoppingCart?.length ? <CheckoutContainer/> : <EmptyShoppingCartMsg/>}
      </div>
    </>
  )
}
