import Link from "next/link";
import {useEffect, useState} from "react";
import {SUCCESS_PAGE_TIMEOUT} from "@/store/slices/checkoutSlice";

const OrderSuccess = () => {
  const [orderSuccessProgress, setOrderSuccessProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderSuccessProgress((val) => val + 100 / (SUCCESS_PAGE_TIMEOUT / 100));
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, SUCCESS_PAGE_TIMEOUT);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="card-success">
      <div className="progress-bar" style={{background: `radial-gradient(closest-side, #d7e8ff 87%, transparent 80% 100%),conic-gradient(#0271fa ${orderSuccessProgress}%, #d7e8ff 0)`}}>
        <progress value="90" max="100">75%</progress>
        <i className="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>We received your purchase request;<br/> we`ll be in touch shortly!</p>
      <br/>
      <Link href={'/'} className="cd-btn cd-btn--primary">Go Home</Link>
    </div>
  )
}

export default OrderSuccess
