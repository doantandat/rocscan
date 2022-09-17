import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import
{
  submitApprove,
  checkApprove,
  openEggs,
  getInfoBox
} from "../../service/index";

class Index extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {

    }
  }


  render()
  {

    return (
      <>
        <div className="container space-2">
          <form method="post" action="./login" id="form1" className="js-validate w-md-75 w-lg-50 mx-md-auto">
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="GuPVkX5CP9yJJ0Py1yX1wV5WgdUDtAEBIW6KIsLY2J3XPPcvInV7dqwT2Bt0ke2rxYVEf5Rd7m3Yss6Bz1n2mk82qKEhfh6QeVWG/2cleXhgpzTHMPLid51Eah484YUK0w2nCzNSa3Bcx9JbnVBSJH+Zod8WJRWVQWyreGqeu4QXh05bz9WwzlvpHKyXtNnZ4accGPEaganv4sYNBiUP2+YBxRb1d/Fbz8+55HpoxsUogT8Uud2MOE3KSu+FxTQhcjfA4YxdHAAgM19whPYU0UWf34tPznTJjR4uRq7jIvsPVyDlR8vV4ZlXwkz1qIq4eW5aNkImM7u1qaQG8dZtRR6oXrgXm66UE1a3LvBqwC5RALELv35ciEpfn48LaJs0pcNN/7Io4FW9baNrHjg1EkPhCQMlYF8csx9WFeW7hwyf0Oo6IyVkFkdSabrGsTkNzXK6ZakuJavsrnmzmMomKE+NnJd+mJ3hcRzEU8vC0Qwj/AkwOD6wOXiJntWuNRTJhB4nlpCkW7lhoi14kAMG41WNpT0Xlp7ue4Ig/CS/YwxhhclZbmoaj/iOqXkqC+b3VVkk/l+kE3XAGG8rIiHD7AY9uOvTiRn0sDthy4770UvzKm6MBNMii1g88hfrOZYnor85ZwXBt12fcr2NBzWG75YR9dCINohVDHSlOMx0rwnOqQ509TRR2wmD5Hp6UbBr69ndLt+Nl3A2oh+XZ3KNHGwf/12u/NjR4YvLo139gX5wS16foTxAYqT/BHDlqgdGPx7u2G3FD0WmP4gYH1hQWKyV6X6i2HgxfC0bnK4mRaZi6buUZ6sfeckCF0QZx5WTabCbIMeaXly4puZBIS47J1RCK9jWXd8EGW0YWxSkVS9UqV+raBRc2sn9x8gwI/hKtOiLD6abUnrglGJjoDi6XEKHZ+XOCw8XVLq0eLWPPGW9r7SU45Tekk99neKmSpFMXVPOTkP9XoY5g+TbDj0sUPrOxMc3zCl7F34Hslj5GsCGjboEK41dil8fGt/6kryHnDBljzT6cHEVqpkjiKVU5b5Pp2zJXYDSZsKZ1J8mknHmSGteh6oWKG2JlETSFmkkeERflHCbix5U+KbCRSSMf8BhnsFP6j/YwhiqRgBAfhmADsRoSHVpzFjbxOBWKK2KSMZJhSCRmY6rZusxE/aliUbYm2OR8KjDJtiw7jwKFkkMbTZ9Z8t2IQAXwJMrVyLT01A0ORQhBlKtwXlinAFCecqtHlgCz+l06nt1NzKNjC65ZM6kRGeh5Mp+p4SLi1Zh5KpqxwCvuKFCAl9o9C4bwHvBQ6Ppz3OKTZQ9dx6+bf9o/WCuK4T16T+DOYJNA3oyRqLySsgTjf/6QdHQkoxygg=="
              />
            </div>
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="C2EE9ABB" />
              <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="ssJ3CtOCyFuOD48LEdqDC/lYBew0FaUh+fDO/8FpA5lKDM9SsksAeMEMMabP38eJZpJBvdjuU8Ae0oJ5XbkOZY+/OLvB3+8FUT0I1FQGwvsvo6xOcTeJWii/OGqZP5cXJpzU5ILJso00XIQH7gQZeKel2+hXXrmnSbZorCiWGx7ALWYwaTQTdHVNSERRvtMl"
              />
            </div>
            <div className="mb-4">
              <h2 className="h3 text-primary font-weight-normal mb-0">Welcome <span className='font-weight-semi-bold'>back</span></h2>
              <p>Login to your account</p>
            </div>
            <div className="js-form-message form-group">
              <label className="d-block" for="txtUserName">Username</label>
              <input name="ctl00$ContentPlaceHolder1$txtUserName" type="text" maxlength="50" id="ContentPlaceHolder1_txtUserName" tabindex="1" className="form-control form-control-sm" required="" data-error-className="u-has-error" data-success-className="u-has-success" placeholder="Username"
                data-msg="Username is required." />
            </div>
            <div className="js-form-message form-group">
              <label className="d-block" for="txtPassword">
                <span className="d-flex justify-content-between align-items-center"> Password <a
                  className="link-muted font-size-1" href="/lostpassword" tabindex="0">Forgot your
                  password?</a>
                </span>
              </label>
              <input name="ctl00$ContentPlaceHolder1$txtPassword" type="password" maxlength="75" id="ContentPlaceHolder1_txtPassword" tabindex="2" className="form-control form-control-sm" ria-label="********" required="" data-error-className="u-has-error" data-success-className="u-has-success"
                placeholder="Password" data-msg="Your password is invalid. Please try again." />
            </div>
            <div className="js-form-message">
              <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                <input name="ctl00$ContentPlaceHolder1$chkRemember" type="checkbox" id="ContentPlaceHolder1_chkRemember" className="custom-control-input" />
                <label className="custom-control-label" for="ContentPlaceHolder1_chkRemember" data-toggle='tooltip' data-placement='bottom' data-title="Please do not check this box if you are using a public or shared PC">
                  <span>Remember & Auto Login </span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <input name='g-recaptcha-response' style={{ visibility: "hidden" }} />
            </div>
            <div className="row align-items-center">
              <div className="col-5 col-sm-6">
                <span className="text-muted text-nowrap">Don't have an account?</span>
                <Link to="/register" className="text-nowrap">Click to sign up</Link>
              </div>
              <div className="col-7 col-sm-6 text-right">
                <input type="submit" name="ctl00$ContentPlaceHolder1$btnLogin" value="LOGIN" id="ContentPlaceHolder1_btnLogin" className="btn btn-sm btn-primary" />
              </div>
            </div>

          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) =>
{
  return {

  };
};
const mapDispatchToProps = (dispatch, props) =>
{
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
