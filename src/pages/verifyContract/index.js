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

        <div className="container space-top-1 space-bottom-2">
          <form method="post" action="./verifyContract" id="ctl00" className="js-validate mt-2" novalidate="novalidate">
            <div className="aspNetHidden">
              <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
              <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
              <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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"
              />
            </div>

            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CBB2B409" />
              <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="VWj6hCbJyYQMBOzavHec4s3oemJm9eEpBqPrpOeQifWmXUMZ/+QoeV0pov3UIhMahIUB/Xri9Gs3pVTMFapn6hAIC1KRsAz4+LEM/3JtGKHh5VNQuCAcPN1gfHMDpYojCcEOVYs8kYwMgk31YFqd/h35H+G5/UQzfOjoZgiOStkshJeA+F3j5xMe0IXpbIKyu9wIat8OADBDTf56LdYmdIkv8Avym52++YiLBuUUAcoZ8BgJXABh0V4c4BfS9BBGZY3B6y9Im+7sbXqTuguJr3y3/35DmRjHbPkjLw4ep82Wa5eWmRXZJbAJYPQVXobQVY0lqUWVEVMpzIEehveBk9gG7ZgeQ83+TzhJq5kt8jyZcHQIbBRmOfiJkW0uIh8pI0HsTMPxGTwzkbpMkoWFNyUd5m5F812HbmjvNcCmSHD/x3fsPC2+JOIioiA5vjsCYm494GJ/NoeHoEcthNdtXlwBwQfjyL4LIfWiwyoxqQyoAKAn80qWG/zghe6lhIsWTonCas0+7EqrCXW9Msd26aUpwCZJC8skTN+Wss/9q8Sye0w4XzxHDkkSckQVRCDa3csDejvNxTVeCGmT0gfNLHisMdcaHgxVGbZCr3rwrds="
              />
            </div>
            <div className="text-center mb-3">
              <div className="w-md-75 w-lg-75 mx-md-auto ">
                <h1 className="h3">Verify &amp; Publish Contract Source Code </h1>
                <small className="d-block text-muted color-strong">COMPILER TYPE AND VERSION SELECTION</small>
              </div>
            </div>
            <div className="border-top py-4">
              <div className="row">
                <div className="col-md-10 offset-md-1 text-secondary mt-3 mb-2">
                  <img src="/images/undraw/undraw_Security_on_s9ym.svg" width="115" align="left" style={{ marginTop: "-15px", marginBottom: "10px", marginRight: "10px" }} /> Source code verification provides <b>transparency</b> for users interacting
                  with smart contracts. By uploading the source code, RocScan will match the compiled code with that on the blockchain. Just like contracts, a "smart contract" should provide end users with more information on what they are
                  "digitally signing" for and give users an opportunity to audit the code to independently verify that it actually does what it is supposed to do.
                </div>
              </div>
              <div className="w-md-75 w-lg-50 mx-md-auto mt-2">
                <div className="js-form-message form-group">
                  <label className="d-block" for="txtUserName">Please enter the Contract Address you would
                    like to verify</label>
                  <input name="ctl00$ContentPlaceHolder1$txtContractAddress" maxlength="42" id="ContentPlaceHolder1_txtContractAddress" className="form-control form-control-sm" required="" placeholder="0x..." value="" data-success-className="u-has-success" data-error-className="u-has-error"
                    data-rule-minlength="40" type="search" data-msg-minlength="Invalid Length" data-msg="Required" data-name="txtContractAddress" data-rule-maxlength="42" />
                </div>
                <div className="js-form-message form-group">
                  <label className="d-block mt-4">Please select Compiler Type</label>
                  <select name="ctl00$ContentPlaceHolder1$ddlCompilerType" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlCompilerType\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlCompilerType" className="custom-select custom-select-sm mb-1"
                    required="">
                    <option selected="selected" value="">[Please Select]</option>
                    <option value="1"
                      title="A simple interface for solidity code that fits or concatenated into a single file">
                      Solidity (Single file)</option>
                    <option value="2" title="Support for multi-part/file solidity code with imports">
                      Solidity (Multi-Part files)</option>
                    <option value="3"
                      title="The recommended way to interface with the Solidity compiler especially for more complex and automated setups">
                      Solidity (Standard-Json-Input)</option>
                    <option value="4"
                      title="Experimental support for the Vyper smart contract development language">
                      Vyper (Experimental)</option>
                  </select>
                  <div id="tooltip_container"></div>
                </div>
                <span id="ContentPlaceHolder1_licenseType">
                  <div className="js-form-message form-group" style={{ display: "block" }}>
                    <label className="d-block mt-4">Please select Open Source License Type <a
                      href="/contract-license-types" target="_blank" data-toggle="tooltip"
                      title="Contract Source Code License Type, click for more info"><i
                        className="far fa-info-circle"></i></a></label>
                    <select name="ctl00$ContentPlaceHolder1$ddlLicenseType"
                      id="ContentPlaceHolder1_ddlLicenseType" title="Select a suitable license type"
                      className="custom-select custom-select-sm" required="" data-msg="Required"
                      data-error-className="u-has-error" data-success-className="u-has-success">
                      <option value="">[Please Select]</option>
                      <option value="1">1{")"} No License (None)</option>
                      <option value="2">2{")"} The Unlicense (Unlicense{")"}</option>
                      <option value="3">3{")"} MIT License (MIT{")"}</option>
                      <option value="4">4{")"} GNU General Public License v2.0 (GNU GPLv2{")"}</option>
                      <option value="5">5{")"} GNU General Public License v3.0 (GNU GPLv3{")"}</option>
                      <option value="6">6{")"} GNU Lesser General Public License v2.1 (GNU LGPLv2.1{")"}
                      </option>
                      <option value="7">7{")"} GNU Lesser General Public License v3.0 (GNU LGPLv3{")"}
                      </option>
                      <option value="8">8{")"} BSD 2-clause &quot;Simplified&quot; license (BSD-2-Clause{")"}
                      </option>
                      <option value="9">9{")"} BSD 3-clause &quot;New&quot; Or &quot;Revised&quot; license
                        (BSD-3-Clause{")"}</option>
                      <option value="10">10{")"} Mozilla Public License 2.0 (MPL-2.0{")"}</option>
                      <option value="11">11{")"} Open Software License 3.0 (OSL-3.0{")"}</option>
                      <option value="12">12{")"} Apache 2.0 (Apache-2.0{")"}</option>
                      <option value="13">13{")"} GNU Affero General Public License (GNU AGPLv3{")"}</option>
                      <option value="14">14{")"} Business Source License (BSL 1.1{")"}</option>
                    </select>
                  </div>
                </span>
                <p align="center" className="mt-3">
                  <span className="custom-control custom-checkbox align-items-center text-muted mb-2">
                    <input name="chkTermsOfUse" type="checkbox" id="chkTermsOfUse"
                      className="custom-control-input align-items-center" checked="checked" />
                    <label className="custom-control-label" for="ContentPlaceHolder1_chkRemember">
                      <span>I agree to the <a href='/terms'>terms of service</a></span>
                    </label>
                  </span>
                  <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Continue" onclick="var isValid = validatecheck(); if (isValid) {buttonclicked = true;};" id="ContentPlaceHolder1_btnSubmit" className="btn btn-primary mr-2" />
                  <input type="submit" name="ctl00$ContentPlaceHolder1$btnReset" value="Reset" id="ContentPlaceHolder1_btnReset" formnovalidate="formnovalidate" className="btn btn-soft-secondary" />
                </p>
              </div>
              <input type="hidden" name="ctl00$ContentPlaceHolder1$libcounter" id="ContentPlaceHolder1_libcounter" value="1" />
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
