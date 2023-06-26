type PageBannerProps = {
  title: string
}
const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{title}</h1>
            {/*<span className="breadcrumb"><a href="#">Home</a>  &gt;  <a href="#">Shop</a>  &gt;  Assasin Creed</span>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
