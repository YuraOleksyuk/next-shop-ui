import PageBanner from "../../components/page-banner";
import ProductCard from "../../components/product-card";

const getProducts = async () => {
  const products = await fetch('http://localhost:3333/api/product');

  return products.json();
}

export default async function Shop() {
  const products: Product[] = await getProducts();

  return (
    <main>
      <PageBanner title="OUR SHOP"/>
      <section className="section trending">
        <div className="container">
          <div className="row trending-box">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
