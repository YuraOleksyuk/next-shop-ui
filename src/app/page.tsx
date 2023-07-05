import MainBanner from "../components/main-banner";
import Image from "next/image";

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
                      <Image src="/images/featured-01.png" alt="Free Storage" width={44} height={44}/>
                    </div>
                    <h4>Free Storage</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      <Image src="/images/featured-02.png" alt="User More" width={44} height={44}/>
                    </div>
                    <h4>User More</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      <Image src="/images/featured-03.png" alt="Reply Ready" width={44} height={44}/>
                    </div>
                    <h4>Reply Ready</h4>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="#">
                  <div className="item">
                    <div className="image">
                      <Image src="/images/featured-04.png" alt="Easy Layout" width={44} height={44}/>
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
