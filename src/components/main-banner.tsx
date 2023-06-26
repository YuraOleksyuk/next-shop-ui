type MainBannerProps = {
  suptitle: string,
  title: string,
  subtitle: string
}

const MainBanner = ({ suptitle, title, subtitle }: MainBannerProps) => {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>{ suptitle }</h6>
              <h2>{ title }</h2>
              <p>{ subtitle }</p>
              <div className="search-input">
                <form id="search" action="#">
                  <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword"/>
                  <button role="button">Search Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <img src="assets/images/banner-image.jpg" alt=""/>
              <span className="price">$22</span>
              <span className="offer">-40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainBanner;
