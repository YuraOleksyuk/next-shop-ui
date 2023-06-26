import Nav from "./nav";

const Header = () => {

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Nav/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
