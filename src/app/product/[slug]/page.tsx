import PageBanner from "../../../components/page-banner";
import AddToCard from "../../../components/add-to-card";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const getProductBySlug = async (productSlug: string) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/product/slug/?slug=${productSlug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function singleProduct({ params }: { params: { slug: string } }) {
  const product: Product = await getProductBySlug(params.slug) ?? null;

  if (!product) {
    return {
      notFound: true, // redirect to 404
    }
  }

  return (
    <main>
      <PageBanner title={product.title}/>

      <section className="single-product section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={product.thumb} alt={product.title} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>{product.title}</h4>
              <span className="price">{product.price}</span>
              <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
              <AddToCard product={product} size={'lg'}>
                <FontAwesomeIcon icon={faBagShopping} />
                Add to cart
              </AddToCard>
              <ul>
                <li><span>Game ID:</span> COD MMII</li>
                <li><span>Genre:</span> <a href="#">Action</a>, <a href="#">Team</a>, <a href="#">Single</a></li>
                <li><span>Multi-tags:</span> <a href="#">War</a>, <a href="#">Battle</a>, <a href="#">Royal</a></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sep" />
            </div>
          </div>
        </div>
      </section>

      <section className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews (3)</button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                      {product.description}
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                      <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&amp;B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. <br /><br />Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
