'use client'

import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PageBanner from "@/components/page-banner";
import ContactInformation from "@/components/checkout/contact-information";
import Shipping from "@/components/checkout/shipping";
import Payment from "@/components/checkout/payment";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import OrderSummary from "@/components/checkout/order-summary";
import {useEffect} from "react";
import {loadFromLocalStorage} from "@/utils/local-storage";
import {setCheckout} from "@/store/slices/checkoutSlice";

export default function Checkout() {
  const dispatch = useDispatch();

  const currentCheckoutStep = useSelector((state: RootState) => {
    return state.checkout.currentCheckoutStep
  })

  useEffect(() => {
    const checkoutData = loadFromLocalStorage('checkout');
    dispatch(setCheckout(checkoutData));
  }, [])

  const checkoutSteps = useSelector((state: RootState) => state.checkout.checkoutSteps)

  const getCurrentCheckoutStepComponent = () => {
    switch (currentCheckoutStep) {
      case 0:
        return <ContactInformation/>
      case 1:
        return <Shipping/>
      /*case 2:
        return <Payment/>*/
      default:
        return <h1>Order completed</h1>
    }
  }

  const checkoutDivider = () => {
    return (
      <div className="checkout__devider">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    )
  }

  return (
    <>
      <PageBanner title="Checkout"/>
      <div className="checkout">
        <div className="checkout__main">
          <div className="checkout__nav">
            {checkoutSteps.map((item: any, index: number) => (
              <div
                key={item.id}
                className={`checkout__nav-item ${currentCheckoutStep >= index ? 'checkout__nav-item--active' : ''}`}
              >
                {item.title}
                {index < checkoutSteps.length - 1 ? checkoutDivider() : '' }
              </div>
            ))}
          </div>
          {getCurrentCheckoutStepComponent()}
        </div>
        <div className="checkout__summary">
          <OrderSummary/>
        </div>
      </div>
    </>
  )
}
