import Link from "next/link";
import AddToCard from "./add-to-card";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {formatPrice} from "@/utils/product-utils";
// import Image from 'next/image';

const ProductCard = ({ product } : { product: Product }) => {
  return (
    <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
      <div className="item">
        <div className="thumb">
          <Link href={'/product/' + product.slug}>
            {/*<Image loader={() => product.thumb} src={product.thumb} width={260} height={200} alt={"Hello"}/>*/}
            <img src={product.thumb} alt={product.title}/>
          </Link>
          <span className="price">{formatPrice(product.price)}</span>
        </div>
        <div className="down-content">
          <span className="category">{product.category}</span>
          <h2 className="product-title">{product.title}</h2>
          {/*<button className="product-add-to-card">+</button>*/}
          <AddToCard product={product} size={'circle'}>
            <FontAwesomeIcon icon={faBagShopping} />
          </AddToCard>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
