'use client'

import {decrementCurrentCheckoutStep} from "@/store/slices/checkoutSlice";
import {useDispatch} from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();

  const handleGoBackButton = () => {
    dispatch(decrementCurrentCheckoutStep())
  }

  return (
      <div className="payment-details">
        <h2 className="text--md text--mb-30">Payment</h2>
        <div className="form__actions">
          <button onClick={handleGoBackButton} className="cd-btn">Back to shipping details</button>
          {/*<button className="cd-btn cd-btn--primary"
                  type="submit">Payment details
          </button>*/}
        </div>
      </div>
  )
}

export default Payment;
