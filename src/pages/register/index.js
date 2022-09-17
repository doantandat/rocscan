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

      <main id="content" className="bg-light content-height" role="main">
        <div className="container space-2">
          <form method="post" action="./register" id="ctl00" className="js-validate w-md-75 w-lg-50 mx-md-auto">
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="p9DKG4080uPeD7s/GP1q4HZhxV5uccOlhTsIX2yJeOii5GSSOUeJ9ZgmeVWxd6IK2nLCgRiK/8vXP2ktcKEmAagm9p8C1NCfQ1WxXR6DJ4PLHHR2t5hv0jmtW+wJ6UjlfXlZcsr5iFCq9LcBSU8bxQd8iH2fMOQfUq3yD6ZoHW1ZyMYuQxEh1ltXkGqb+k6+dIYNkn5hPxkYA/seBX6nizv7HzfikymtPOQBfmGni6cMkYRgkRSZF94KBlwkSB+7dqo0qsDJtGHYkGNI8ZmYyHjaO3XzuNG2r42bEv3vq84g7os1mJPlWZtQvH1Jn4iA8xah7YG6GJxsFPmeJYaGoFWVvfMYmD+dMRnrODV4Pu3Ew7NFbE8dhJUpQ3nUjPBp4d/kFRE7R+TIJTvwSXhDfCI/kgJ6aVV6fW44g1lIm/oMAfHdPQvJIWVCPgZxwVhFaLzp2IwYPd/XHxGxcV5D9qMMQeLBYEoVYmRCketjbhBXrrU0gcc/JiPPolSzMYKtIE+gitUNvfURXsBbl88xalHFUiCB96XE9Sr/7XVBuc4tX/xlISfz1hRltJm+jtJ52BHhBxq2QmOWWfj8Il+IwHQknktD375XtdyONlfWw0BNl9oVVgX/ccf6w/kHSUOwS7a7U9q6dVRAV7IbPl9AfGkoIkAlEy/h8TetAtppUHLgcu8VI7aD96Kjec2rpjWiafdKoDWTq5lKma5K7aJthU+d9qojMRhL5680g2k2NApSeOYV6TgblZE7MbBL16t5d/ctHiy/v0NGq+IEj5bAMhM86dXgODS6r7UaOnGSZ7tHzTnfbU/suwSV6LPnGJM3uOe5jClE65yGfLA/zdnKVOVMvzW5Ohup1A981vvfJET+wsKVGOcIVdWhBs6Uju1s+JDuO+8t1sKlH0Z1R6bGJ6A/lkqf0p2jBBPjQRDOgC7EWv3JIfeBBTM2BR1N53govU6aREy71Lcx5jVlFa4qFuMlzhXkbyqu3NREh2gJM9add/BeQkkZFgUqSODAHy0jESMp/rlbmRmUtN+ek+83mlZ3MjOeGhNulhfSliEcFLJtjUxJmMyPsRiEpodrxd7ire9rgyOkS2C1BBd9uzvs4A2tu/CWUuHK8zU1xAd9Z49kXRHY/SQvJ5HLXZkPAe2bZw1cv6AFVUB/nXdA/rdnHg+n5iqwp1jdDGv2KapOFLMjRfw969OW0osW09+ZJ6nZMRYlzkCYrA/IM3yzzksxTBTv7eMThTAnKoKbIQnvNUTxYgDQTKOuvQsml863ywfqTTp3f9sdbAil6DQLv4ypz45kp0zB0HvLo9aLHO7PVKCxtrkGopDugehAirhN/xr6sGz2ZYwAdWFPoFHWoP4vZX0dgM462X/TBwr9fu9ioxAXUcjK5m0yvANPt9Mgsbx3wRFCvR2lrm3+RdMM6J/McGbx4dF/I8SdbIeHudZvUnQ="
              />
            </div>
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="799CC77D" />
              <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="CRXsR3qLg7ieIQrWP9eEvu/7axBHrBA0w+Ou3iGXgGi/k4pVb7livfbW0UJ6FtmZHfD+C78/MJEX09HuHDCUVkWFBHrRNvQ3vBTz+c7JpNvgqfCFBy5LZb+/qKkMHv1JpJ6tABCICeO/t5nw47FknUzMD8ExP2tl41y7dkjVGqze4ro0w4GgmOpL7jLiYnnd8Ho3nyVbXpWODv+FzHzLIv+km03B9zPPGvOdVnQbGm7JgbpE5CGcqA5ZqamrsWC3eCYrQbNEJ4i4909gmnZ/Pg=="
              />
            </div>
            <div className="mb-7">
              <h1 className="h3 text-primary font-weight-normal mb-2"> Register a <span className='font-weight-semi-bold'>New</span> Account</h1>
              <p>Fill out the form to get started.</p>
            </div>
            <div id="ContentPlaceHolder1_maindiv">
              <div className="js-form-message form-group">
                <label className="d-block" for="txtUserName">Username</label>
                <input type="text" maxlength="30" id="ContentPlaceHolder1_txtUserName" className="form-control form-control-sm" required="" placeholder="Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed."
                  aria-label="Username" data-success-className="u-has-success" data-error-className="u-has-error" name="username" data-rule-minlength="5" data-msg="Username is invalid." data-rule-maxlength="30" />
              </div>
              <div className="js-form-message form-group">
                <label className="d-block" for="txtEmail">Email Address</label>
                <input maxlength="100" id="ContentPlaceHolder1_txtEmail" className="form-control form-control-sm" type="email" name="email" placeholder="A confirmation code will be sent to this address" aria-label="Email address"
                  required="" data-msg="Please enter a valid email address." data-error-className="u-has-error" data-success-className="u-has-success" />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="js-form-message form-group">
                    <label className="d-block" for="txtPassword">Password</label>
                    <input type="password" maxlength="75" id="ContentPlaceHolder1_txtPassword" className="form-control form-control-sm" name="password" placeholder="******" aria-label="********" required="" data-rule-minlength="5"
                      data-msg="Your password must be at least 5 characters long." data-error-className="u-has-error" data-success-className="u-has-success" />
                    <span id="passstrength" className="small"></span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="js-form-message form-group">
                    <label className="d-block" for="txtPassword2">Confirm Password</label>
                    <input type="password" maxlength="75" id="ContentPlaceHolder1_txtPassword2" className="form-control form-control-sm" required="" placeholder="******" aria-label="********" data-error-className="u-has-error" data-success-className="u-has-success"
                      data-msg-equalto="Password does not match, please check again." name="confirmPassword" data-rule-minlength="5" data-msg="Your password must be at least 5 characters long." />
                  </div>
                </div>
              </div>
              <div className="js-form-message">
                <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input name="ctl00$ContentPlaceHolder1$MyCheckBox" type="checkbox" id="ContentPlaceHolder1_MyCheckBox" className="custom-control-input" required="" data-msg="Please accept our Terms and Conditions." data-error-className="u-has-error" data-success-className="u-has-success"
                  />
                  <label className="custom-control-label active" for="ContentPlaceHolder1_MyCheckBox">
                    <span>I agree to the <a className="link-muted" href="/terms" target="_blank">Terms
                      and Conditions</a>
                    </span>
                  </label>
                </div>
              </div>
              <div className="js-form-message">
                <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input name="ctl00$ContentPlaceHolder1$SubscribeNewsletter" type="checkbox" id="ContentPlaceHolder1_SubscribeNewsletter" className="custom-control-input" />
                  <label className="custom-control-label active" for="ContentPlaceHolder1_SubscribeNewsletter">
                    <span>I agree to receive the RocScan newsletter and understand that I can
                      unsubscribe at any time.</span>
                  </label>
                </div>
              </div>
              <div className="js-form-message">
                <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input name="ctl00$ContentPlaceHolder1$SubscribeMarketingNewsletter" type="checkbox" id="ContentPlaceHolder1_SubscribeMarketingNewsletter" className="custom-control-input" />
                  <label className="custom-control-label active" for="ContentPlaceHolder1_SubscribeMarketingNewsletter">
                    <span>I agree to receive RocScan promotional emails and understand that I can
                      unsubscribe at any time.</span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center my-5">
                <div className="g-recaptcha" data-sitekey="6Lcs2sAZAAAAAFTZa-vH_AQfaIRfC2WHJ8sUGpFm"></div>
              </div>
              <div className="row align-items-center">
                <div className="col-5 col-sm-6">
                  <span className="text-muted">Already have an account?</span>
                  <Link className="text-nowrap" to="login">Click to Sign In</Link>
                </div>
                <div className="col-7 col-sm-6 text-right">
                  <input type="submit" name="ctl00$ContentPlaceHolder1$btnRegister" value="Create an Account" id="ContentPlaceHolder1_btnRegister" className="btn btn-sm btn-primary" />
                </div>
              </div>
            </div>
          </form>
        </div>

      </main>
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
