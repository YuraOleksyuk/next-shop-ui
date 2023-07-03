import PageBanner from "@/components/page-banner";
import ProductCard from "@/components/product-card";
import {ReactNode} from "react";
import {getCategories} from "@/utils/api";
import Link from "next/link";

const CategoryLayout = async ({ children }: { children: ReactNode | ReactNode[] }) => {
  const categories: Category[] = await getCategories();

  return (
    <main>
      <PageBanner title="OUR SHOP"/>
      <section className="section trending">
        <div className="container">
          <ul className="trending-filter">
            <li>
              <Link href="/category" className="is_active">Show All</Link>
            </li>
            {categories.map((category: Category) => (
              <li key={category.id}>
                <Link href={`/category/${category.slug}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
          <div className="row trending-box">
            {children}
            {/*{products.map((product: Product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}*/}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CategoryLayout
