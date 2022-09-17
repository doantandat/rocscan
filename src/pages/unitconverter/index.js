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

        <div className="container mb-4">
          <div className="border-bottom py-3 mb-3">
            <div className="mb-2 mb-sm-0">
              <h1 className="h4 d-flex mb-0">
                <figure className="u-sm-avatar mr-2">
                  <img src="images/svg/icons/icon-10.svg" alt="SVG" />
                </figure>
                <span>Unit Converter</span>
              </h1>
            </div>
          </div>
          <p> ROC is often used in different denominations of its currency, such as Wei for interacting with smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them! </p>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-body">
              <div className='d-flex justify-content-end mb-3'>
                <a id="btnReset" href="/unitconverter">[Reset]</a>
              </div>
              <div className="input-group mb-3 mt-3">
                <input name="ctl00$ContentPlaceHolder1$wei" type="text" id="wei" className="form-control convertedValue" placeholder="Wei" aria-label="Wei" value="1000000000000000000" />
                <div className="input-group-append">
                  <span className="input-group-text">Wei (10<sup>-18</sup>)</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="KWei" aria-label="KWei" id="kwei" />
                <div className="input-group-append">
                  <span className="input-group-text">KWei</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="MWei" aria-label="MWei" id="mwei" />
                <div className="input-group-append">
                  <span className="input-group-text">MWei</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="GWei" aria-label="GWei" id="gwei" />
                <div className="input-group-append">
                  <span className="input-group-text">GWei (10<sup>-9</sup>)</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="Szabo" aria-label="Szabo" id="szabo" />
                <div className="input-group-append">
                  <span className="input-group-text">Szabo</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="Finney" aria-label="Finney" id="finney" />
                <div className="input-group-append">
                  <span className="input-group-text">Finney</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="ROC" aria-label="ROC" id="ether" />
                <div className="input-group-append">
                  <span className="input-group-text">ROC (1)</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="KROC" aria-label="KROC" id="kether" />
                <div className="input-group-append">
                  <span className="input-group-text">KROC</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="MROC" aria-label="MROC" id="mether" />
                <div className="input-group-append">
                  <span className="input-group-text">MROC</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="GROC" aria-label="GROC" id="gether" />
                <div className="input-group-append">
                  <span className="input-group-text">GROC</span>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control convertedValue" placeholder="TROC" aria-label="TROC" id="tether" />
                <div className="input-group-append">
                  <span className="input-group-text">TROC</span>
                </div>
              </div>
            </div>
          </div>
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
