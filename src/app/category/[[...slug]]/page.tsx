import ProductCard from "@/components/product-card";
import {
  getCategories,
  getProducts,
  getProductsByCategorySlug
} from "@/utils/api";

import Link from "next/link";

const SingleCategory = async ({params}: { params: { slug: [] } }) => {
  let categorySlug = params.slug ? params.slug.join() : '';
  categorySlug = categorySlug.toLowerCase();

  const products: Product[] = categorySlug ? await getProductsByCategorySlug(categorySlug) : await getProducts();
  const categories: Category[] = await getCategories();

  return (
    <>
      <ul className="trending-filter">
        <li>
          <Link href="/category"
                className={categorySlug === '' ? 'is_active' : ''}>Show
            All</Link>
        </li>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}
                  className={categorySlug === category.slug ? 'is_active' : ''}>{category.title}</Link>
          </li>
        ))}
      </ul>
      <div className="row trending-box">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
        {!products.length && (
          <h3 className="text--md text--center text--mb-30 text--mt-30">No Products related to {categorySlug} category</h3>
        )}
      </div>
    </>
  )
}
export default SingleCategory
