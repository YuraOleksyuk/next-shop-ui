import Link from "next/link";

const EmptyShoppingCartMsg = () => {

  return (
    <div className="checkout__empty">
      <h2>Your Cart is Empty!</h2>
      <p>Must add items on the cart before you proceed to check out.</p>
      <Link href="/category" className="cd-btn cd-btn--primary">Return to Shop</Link>
    </div>
  )
}

export default EmptyShoppingCartMsg;
