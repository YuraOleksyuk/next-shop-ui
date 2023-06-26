const ContactInformation = () => {
  return (
    <div className="auth-user">
      <h2 className="text--md text--mb-30">Account details</h2>
      <form action="#" className="form">
        <div className="form__main">
          <div className="form__group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone"/>
          </div>
          <div className="form__group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email"/>
          </div>
          <div className="form__row form__row--50">
            <div className="form__group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name"/>
            </div>
            <div className="form__group">
              <label htmlFor="flast-name">Last Name</label>
              <input type="text" name="last-name" id="last-name"/>
            </div>
          </div>
        </div>
        {/*<div className="form__actions">
          <button>Register for account</button>
          <button className="btn">Login</button>
        </div>*/}
      </form>
    </div>
  )

}

export default ContactInformation
