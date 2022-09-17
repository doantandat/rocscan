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

      <main id="content" className="bg-white-content content-height" role="main">
        <form method="post" action="./apis" id="form1" className="js-validate">
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="6xrGUJG4gW0r8sD+FzI72zvRBxrqBmRk5Jyy/hzKRwuKZsZaFULUA0uO3dzyEX5Z3VmbDMzpTiEpA9VlVPucJFr1cUGgkpurlQGErdg9vk9bE7qkn+aIiphduZmYmtpvugaUn1yoq+96TBnSPT1rUSAYQjYPAnI2qVRyJJ6vgl93MQS1fjmrd7KA+agGZG53KOnFYGUUQXELqVsLVF6wGxrYGULzxY0Vx87QVB/CVJqAv408V4e/Mdph0sbzMLIpNC4QC0ME6TbZKirilkslC9/RpVWTkyy7/ZHTltn5Dcv1EDa6KKBxxRloDBm/qJ1+Jro0GVr8BtjWwJu8fpnhz0euJZ/3UUhs0Bmo6p/9VJVrXRgbxL8p66GpRfV1GAtvRa6mQ+J2mrsHmmlkc8a/JncpXZN95Cvcozumm8NgzxJGf5mHwqsbXYi5dOKqs0CVQU37MHMrZ1ufJCN5EJMnQrt95Ox7R1FpyBdgSh2Eyy22+O+JJght2PcU/eElA8pjPMqrKfVRtEhfoDMRAcGQFvRU3lMOXyflmA2XcIKEnpOmRDen94J7/UCTr4MkxWJ0RbIa8UsIjY116DXfT/y1UFLLRwDHNiWX2hrXHTxn5C+6S3a4aPkGBApKeMXLsdg6kEW69x3LXFDBLY03x83w7XxdorRkkhGBWtcUN2t88JdhKihe82Out8J4ENdiQE3M92QnMA1w/dAkkpG8zvZS1tsrf+OVTor+dMtSW9jaTLwrrwf3NGyEJuDrZL3muTwPWaUEv4q8Fev0frXdAg+LRZ3wdLWsi9l6xTgFlBxs9XRxk9DHmrqYLNi+nZVUWaGIftBzagMkSOpGJG2Z+zAb3EaWwbhx0B/7h/NGcaYnl6+7p4DaR+WVS/536EYwM0SRo+9z6RicI+Pd1jzdk+yRC0lXcbC6FsY71d5E18ZjmLQF7OzzquaWV5KVdHRIWyjsj1izif7wIfrE9G9IiDOeFt/rvBr/fEoG4wo9nwBDP4xwzHJJGK9K+gf4z4cwQcmBAniUIEJOeLqAWA00V4YwI3qcBGJqr+xxA2W6oKvg2kflR/YQJv3xJjJozF2BspMQ"
            />
          </div>
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="DC1E7C53" />
            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="9Z/HqBemkE7BTew7ZGTHTnU7vYr5QtnPSTJR98NgHJr7DC10HlHUvtXZYRcx5em82LtWSlWNYXtQn6fG2bkKJCLKDULimVGKGwIFNYYwwSFb4SGxwsKknpgBXdA6py3BVjcF+AN5Rtg3RTOmbcO6AQwuUkUuuP9cjMCOvL98U0U+xATHp43MiR32KAMDmBox"
            />
          </div>
          <div id="ContentPlaceHolder1_checkoutDiv">
            <div className="bg-img-hero space-2 space-md-3"
              style={{ backgroundImage: "url('/images/svg/components/blocks-outlined-right.svg')" }}>
              <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center">
                  <div className="col-12">
                  </div>
                  <div className="col-lg-6 text-center text-lg-left mb-5-alt mb-mb-0">
                    <div className="h6 text-uppercase font-weight-bold text-spacing text-monospace text-primary">
                      RocScan API</div>
                    <h1 className="text-lh-sm text-dark mb-4">Build Precise &amp; Reliable Apps with RocScan APIs</h1>
                    <a className="btn btn-sm font-size-base btn-primary mr-1" href="https://docs.RocScan.com/" target="_blank">View API Documentation <i
                      className="far fa-long-arrow-right ml-1"></i>
                    </a>
                    <a className="js-go-to btn btn-sm btn-link font-size-base" data-target="#pricingSection" data-type="static" href="#">Choose A Plan</a>
                  </div>
                  <div className="col-md-7 col-lg-5 mr-lg-3">
                    <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: "new 0 0 857 40" }}>
                        <g>
                          <path style={{ fill: "#fff;" }}
                            d="M856.8,40.2H0.8V19c0-10.5,8.5-19,19-19h818c10.5,0,19,8.5,19,19V40.2z" />
                        </g>
                        <g>
                          <ellipse style={{ fill: "#fb4143" }} cx="28.5" cy="20.1" rx="6" ry="6" />
                          <ellipse style={{ fill: "#fab633" }} cx="48.4" cy="20.1" rx="6" ry="6" />
                          <ellipse style={{ fill: "#0dd157" }} cx="68.4" cy="20.1" rx="6" ry="6" />
                        </g>
                      </svg>
                    </figure>
                    <div className="card bg-dark rounded-top-0">
                      <div className="card-body p-4 py-5-alt">
                        <div className="text-monospace">
                          <div className="pl-3 mb-1">
                            <span className="text-info">"result": [</span>
                          </div>
                          <div className="pl-5">
                            <span className="text-white-70">"contractAddress":</span>
                            <span className="text-success">"0x...",</span>
                          </div>
                          <div className="pl-5">
                            <span className="text-white-70">"tokenName":</span>
                            <span className="text-success">"Token Name",</span>
                          </div>
                          <div className="pl-5">
                            <span className="text-white-70">"symbol":</span>
                            <span className="text-success">"Token Symbol",</span>
                          </div>
                          <div className="pl-5">
                            <span className="text-white-70">"divisor":</span>
                            <span className="text-success">"18",</span>
                          </div>
                          <div className="pl-5">
                            <span className="text-white-70">"tokenType":</span>
                            <span className="text-success">"BEP20",</span>
                          </div>
                          <div className="text-white-70 pl-5">
                            <strong className="u-text-animation u-text-animation--typing"></strong>
                          </div>
                          <div className="pl-3 mb-1">
                            <span className="text-info">]</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="small text-right mt-2 mr-2 mb-0">RocScan API example</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-3">
              <div className="container">
                <div className="w-md-75 w-xl-50 mx-auto">
                  <div className="text-center mb-5">
                    <h2 className="h3 text-dark">Access ROC Data</h2>
                    <p className="lead">We understand the data needs of ROC applications. From hackathon entries to enterprise solutions, our APIs are made for you.</p>
                  </div>
                </div>
                <div className="row justify-content-center text-center mx-n3">
                  <div className="col-md-4 col-lg-3 px-3 mb-5-alt mb-md-0">
                    <figure className="ie-height-56 w-100 max-width-8 mb-4 mx-auto">
                      <img src="/images/svg/icons/icon-8.svg?v=2.0.5" alt="SVG" height="56" />
                    </figure>
                    <h3 className="h4">Scalable</h3>
                    <p className="mb-0">Scale your application with the API plan that's appropriate for it. </p>
                  </div>
                  <div className="col-md-4 col-lg-3 px-3 mb-5-alt mb-md-0">
                    <figure className="ie-height-56 w-100 max-width-8 mb-4 mx-auto">
                      <img src="/images/svg/icons/icon-7.svg?v=21.7.2" alt="SVG" />
                    </figure>
                    <h3 className="h4">Reliable</h3>
                    <p className="mb-0">RocScan's API infrastructure ensures reliable delivery of up-to-date data.</p>
                  </div>
                  <div className="col-md-4 col-lg-3 px-3 mb-5-alt mb-md-0">
                    <figure className="ie-height-56 w-100 max-width-8 mb-4 mx-auto">
                      <img src="/images/svg/icons/icon-2.svg?v=2.0.5" alt="SVG" />
                    </figure>
                    <h3 className="h4">Integration</h3>
                    <p className="mb-0">Provide and display blockchain data within your applications easily. </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-25 mx-auto"></hr>
            <div id="pricingSection" className="space-2">
              <div className="container">
                <div className="w-md-75 w-xl-50 mx-auto">
                  <div className="text-center space-bottom-2">
                    <h2 className="h3 text-dark">Choose a plan that's right for you.</h2>
                    <p className="lead">Data from the leading ROC Block Explorer catered to your project's needs.</p>
                  </div>
                </div>
                <div className="row mx-n3">
                  <div className="col-sm-6 col-xl-3 px-3 mb-5">
                    <div className="card card-frame h-100" style={{ borderTopWidth: "5px" }}>
                      <div className="card-header p-4">
                        <h6 className="text-uppercase font-weight-bold text-spacing text-dark">Free
                        </h6>
                        <h1 className="text-dark">$0<span className="font-size-2"></span></h1>
                        <p className="mb-0">Suitable for independent projects. Community driven, hassle-free plan.</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled list-md-space mb-0">
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>5 calls/second limit</li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Up to 100,000 API calls per day </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>All existing community endpoints </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Community support</li>
                        </ul>
                      </div>
                      <div className="card-footer border-0 px-4 pb-4">
                        <a href="/myapikey" target="_blank" role="button" className="btn btn-block btn-primary transition-3d-hover text-uppercase">Get
                          Free API Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3 px-3 mb-5">
                    <div className="card card-frame h-100" style={{ borderTopWidth: "5px" }}>
                      <div className="card-header p-4">
                        <h6 className="text-uppercase font-weight-bold text-spacing text-dark">
                          Standard</h6>
                        <h1 className="text-dark">$199<span className="font-size-2">/ mo</span></h1>
                        <p className="mb-0">Great for ROC applications. Same reliable data with better rate limit.</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled list-md-space mb-0">
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>10 calls/second limit</li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Up to 200,000 API calls per day </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>All existing community endpoints </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Access to API Pro endpoints
                          </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Escalated support</li>
                        </ul>
                      </div>
                      <div className="card-footer border-0 px-4 pb-4">
                        <button id="btnPrd1" className="btn btn-block btn-primary transition-3d-hover text-uppercase" type="button">Get Started Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3 px-3 mb-5">
                    <div style={{ marginTop: "-1.6rem" }}>
                      <div className="badge badge-primary text-uppercase font-weight-bold pt-3 p-2 w-100 rounded-lg rounded-bottom-0">
                        Popular</div>
                      <div className="card card-frame border-primary h-100 rounded-top-0" style={{ borderWidth: "2px" }}>
                        <div className="card-header p-4">
                          <h6 className="text-uppercase font-weight-bold text-spacing text-dark">
                            Advanced</h6>
                          <h1 className="text-dark">$299<span className="font-size-2">/ mo</span></h1>
                          <p className="mb-0">High rate limit, perfect for applications utilizing large amounts of ROC data.</p>
                        </div>
                        <div className="card-body p-4" style={{ marginBottom: "1.6rem" }}>
                          <ul className="list-unstyled list-md-space mb-0">
                            <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>20 calls/second limit</li>
                            <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Up to 500,000 API calls per day</li>
                            <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>All existing community endpoints </li>
                            <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Access to API Pro endpoints </li>
                            <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Escalated support</li>
                          </ul>
                        </div>
                        <div className="card-footer border-0 px-4 pb-4">
                          <button id="btnPrd2" className="btn btn-block btn-primary transition-3d-hover text-uppercase" type="button">Get Started Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3 px-3 mb-5">
                    <div className="card card-frame h-100" style={{ borderTopWidth: "5px" }}>
                      <div className="card-header p-4">
                        <h6 className="text-uppercase font-weight-bold text-spacing text-dark">
                          Professional</h6>
                        <h1 className="text-dark">$399<span className="font-size-2">/ mo</span></h1>
                        <p className="mb-0">Even higher rate limits, designed for applications that require massive scale.</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled list-md-space mb-0">
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>30 calls/second limit</li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Up to 1,000,000 API calls per day </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>All existing community endpoints </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Access to API Pro endpoints
                          </li>
                          <li className="d-flex align-items-baseline"><i className="far fa-check mr-2"></i>Escalated support</li>
                        </ul>
                      </div>
                      <div className="card-footer border-0 px-4 pb-4">
                        <button id="btnPrd3" className="btn btn-block btn-primary transition-3d-hover text-uppercase" type="button">Get Started Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="lead mb-0">Need a Dedicated Plan? <a className="js-go-to" data-target="#contactSection" data-type="static" href="#">Contact Us for
                  Pricing</a></p>
              </div>
            </div>
            <hr className="w-25 mx-auto"></hr>
            <div id="faq-section" className="space-2">
              <div className="container">
                <div className="w-md-75 w-lg-50 mx-auto">
                  <div className="text-center mb-5">
                    <h2 className="h3 text-dark">Frequently Asked Questions</h2>
                  </div>
                </div>
                <div className="w-lg-80 mx-auto">
                  <div className="row 1justify-content-center1 mx-gutters-sm-1">
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">How do I SuROCribe to RocScan API services? </h4>
                          <p>Kindly visit the API self-checkout section <a className="js-go-to" data-target="#pricingSection" data-type="static" href="#">above</a>, select the plan that fits you best and follow the steps accordingly.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">What are the Payment Options available? </h4>
                          <p>We accept major credit cards that are supported by Stripe.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">How do I Upgrade or Cancel an account?
                          </h4>
                          <p>Please contact us should you wish to upgrade or cancel your account. We will assist you accordingly.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">What is your refund policy?</h4>
                          <p className="mb-2">Payments made are non-refundable and we do not provide refunds or credits for any services already paid for.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">How does Renewal work for API Pro accounts? </h4>
                          <p className="mb-2">Stripe billing is auto-renewed by default. Unless you cancel your suROCription plan before your billing date, you authorise us to automatically charge the suROCription fee for the next billing cycle
                            to your account.</p>
                          <p className="mb-2">The billing portal will provide an auto-billing date where information such as a renewal suROCription term that will begin automatically after the initial suROCription term or another renewal term will
                            be reflected in your account unless you cancel or terminate prior to the commencement of new term.
                          </p>
                          <p className="mb-2">Kindly contact us should you wish to turn the auto-renewal option off.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="media">
                        <div className="mt-1 mr-3">
                          <i className="far fa-question-circle text-secondary fa-lg"></i>
                        </div>
                        <div className="media-body">
                          <h4 className="h5 text-dark mb-1">When will Account Activation occur?
                          </h4>
                          <p className="mb-2">API Pro accounts will be activated within 24 hours after username and email has been received.</p>
                          <p className="mb-2"><i>*Please make sure not to close the browser after
                            payment. The system will prompt a form for you to provide a
                            registered username and email after payment is
                            successful.</i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-lg-80 mx-auto">
                  <p>For more information, RocScan <a href="/apiterms">API Payment Terms and
                    Conditions</a>. Please note that this FAQ forms part of RocScan’s Terms of Service and it constitutes legally binding terms on the services provided by RocScan. </p>
                </div>
              </div>
            </div>
            <div className="w-lg-75 w-xl-60 mx-auto">
              <div className="d-lg-flex align-items-center justify-content-center bg-light bg-img-hero text-center rounded p-5-alt" style={{ backgroundImage: "url('/images/svg/components/blocks-outlined-right.svg');" }}>
                <div className="h4 text-dark mr-lg-4 mb-3 mb-lg-0">Detailed documentation to get started.
                </div>
                <a className="btn btn-sm btn-primary font-size-base text-nowrap" href="https://docs.RocScan.com/" target="_blank">View API Documentation <i
                  className="far fa-long-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            <div id="contactSection" className="bg-white-content border-bottom space-3">
              <div className="container">
                <div className="w-md-75 w-lg-50 mx-auto">
                  <div className="text-center">
                    <h2 className="h3">Contact us for any inquiries</h2>
                    <p className="lead">If you have any questions on the RocScan APIs, ask them here!
                    </p>
                  </div>
                </div>
                <div className="w-md-75 w-lg-50 mx-auto">
                  <p className="mt-0 mb-2">
                    <span id="ContentPlaceHolder1_lblResult"></span>
                  </p>
                  <div className="row mt-5">
                    <div className="col-sm-6 mb-4">
                      <div className="js-form-message">
                        <label>Name <span className="text-danger">*</span> <span
                          className="font-size-1 text-secondary">(required)</span></label>
                        <input name="ctl00$ContentPlaceHolder1$txtName" type="text" maxlength="150" id="ContentPlaceHolder1_txtName" className="form-control" data-msg="Please enter your name" data-error-className="u-has-error" data-success-className="u-has-success" required="" placeholder="Ex. John Doe"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <div className="js-form-message">
                        <label>Email Address <span className="text-danger">*</span> <span
                          className="font-size-1 text-secondary">(required)</span></label>
                        <input name="ctl00$ContentPlaceHolder1$txtEmail" maxlength="150" id="ContentPlaceHolder1_txtEmail" className="form-control" type="email" data-msg="Please enter a valid email address" data-error-className="u-has-error" data-success-className="u-has-success" required=""
                          placeholder="Ex. johndoes@example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message mb-4">
                    <label>Message <span className="text-danger">*</span> <span
                      className="font-size-1 text-secondary">(required)</span></label>
                    <textarea name="ctl00$ContentPlaceHolder1$txtComments" rows="5" cols="20" id="ContentPlaceHolder1_txtComments" className="form-control mb-2" placeholder="Please provide as much information as possible." required="" data-msg="Please enter a message." data-error-className="u-has-error"
                      data-success-className="u-has-success"></textarea>
                  </div>
                  <div className="d-flex justify-content-center my-5">
                    <div className="g-recaptcha" data-sitekey="6Lcs2sAZAAAAAFTZa-vH_AQfaIRfC2WHJ8sUGpFm"></div>
                  </div>
                  <div className="text-center">
                    <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Send Message" id="ContentPlaceHolder1_btnSubmit" className="btn btn-primary btn-wide transition-3d-hover mb-4 px-5" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>

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
