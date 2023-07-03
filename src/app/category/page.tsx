import {getProducts} from "@/utils/api";
import ProductCard from "@/components/product-card";


export default async function Shop() {
  const products: Product[] = await getProducts();


  // const [filteredProducts, setFilteredProducts] = useState(products)


  return (
    <>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </>
  );
}
