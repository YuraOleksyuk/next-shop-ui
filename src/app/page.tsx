import MainBanner from "../components/main-banner";

export default function Index() {
  return (
      <main>
        <MainBanner
            suptitle="Welcome to lugx"
            title="BEST GAMING SITE EVER!"
            subtitle="LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo."/>
        <div className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      {/*<img src="assets/images/featured-01.png" alt="" style={{maxWidth: '44px'}} />*/}
                    </div>
                    <h4>Free Storage</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      {/*<img src="assets/images/featured-02.png" alt="" style={{maxWidth: '44px'}} />*/}
                    </div>
                    <h4>User More</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      {/*<img src="assets/images/featured-03.png" alt="" style={{maxWidth: '44px'}} />*/}
                    </div>
                    <h4>Reply Ready</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      {/*<img src="assets/images/featured-04.png" alt="" style={{maxWidth: '44px'}} />*/}
                    </div>
                    <h4>Easy Layout</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
