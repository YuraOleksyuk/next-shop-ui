'use client'

import OrderSummary from "@/components/checkout/OrderSummary";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import ContactInformation from "@/components/checkout/ContactInformation";
import Shipping from "@/components/checkout/Shipping";
import OrderSuccess from "@/components/checkout/OrderSuccess";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const CheckoutContainer = () => {

  const currentCheckoutStep = useSelector((state: RootState) => {
    return state.checkout.currentCheckoutStep;
  });

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
        return <OrderSuccess/>
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
    </>
  )
}

export default CheckoutContainer;
