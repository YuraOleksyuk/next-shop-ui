'use client';

import PageBanner from "../../components/page-banner";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ContactInformation from "../../components/checkout/contact-information";
import Shipping from "../../components/checkout/shipping";
import Payment from "../../components/checkout/payment";
import {useState} from "react";

const checkoutProcess = [
  {
    title: 'Account',
    nextStep: 'Shipping details',
    component: <ContactInformation/>
  },
  {
    title: 'Shipping',
    nextStep: 'Payment',
    component: <Shipping/>
  },
  {
    title: 'Payment',
    nextStep: 'Complete order',
    component: <Payment/>
  },
]

export default function Checkout() {
  const [currentCheckoutStep, setCurrentCheckoutStep] = useState(0);

  const checkoutDevider = () => {
    return (
      <div className="checkout__devider">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    )
  }

  // const getCurrent

  return (
    <>
      <PageBanner title="Checkout"/>
      <div className="checkout">
        <div className="checkout__main">
          <div className="checkout__nav">
            {checkoutProcess.map((item, index) => (
              <div className="checkout__nav-item" onClick={() => setCurrentCheckoutStep(index)} key={index}>
                {item.title}
                {index < checkoutProcess.length - 1 ? checkoutDevider() : '' }
              </div>
            ))}
          </div>
          {checkoutProcess[currentCheckoutStep].component}
          
          <div className="checkout__actions">
            <button className="cd-btn">Cancel</button>
            <button className="cd-btn cd-btn--primary">{checkoutProcess[currentCheckoutStep].nextStep}</button>
          </div>
        </div>
        <div className="checkout__summary">
          <h2 className="text--md">Order summary</h2>
        </div>
      </div>
    </>
  )
}
