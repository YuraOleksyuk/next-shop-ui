import ProductCard from "@/components/product-card";
import {getProducts} from "@/utils/api";

const SingleCategory = async ({ params }: { params: { slug: string } }) => {
  const products: Product[] = await getProducts(params.slug);

  return (
    <>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </>
  )
}
export default SingleCategory
