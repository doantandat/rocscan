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
        <form method="post" action="./tokenapprovalchecker" id="ctl00" className="js-validate">
          <div className="aspNetHidden">
            <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
            <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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"
            />
          </div>

          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="543FCFC8" />
            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="hZRA7a3/ei675JTJBpx5dVsuFufY4oCI2OHeoaYMZIQkEA/pDLNvh9FJ2v3OqyrNBrb8POta/4waXlHA4PD2YNo+2/QXKuZ/1QMe4Lg4ewqyoynuBOVptlMqQX7VRBflM/q5ZCIouU+DjmGDwbnOINJOsjmfrjQrPlt48au58EmTaqlgnoDZz1ATqdx0oSJX"
            />
          </div>
          <input type="hidden" name="ctl00$ContentPlaceHolder1$hdnAddress" id="hdnAddress" />
          <input type="hidden" name="ctl00$ContentPlaceHolder1$hdnFilteredContractName" id="hdnFilteredContractName" />
          <div style={{ minHeight: "50vh" }}>
            <div className="space-1 space-md-1">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6">
                    <h1 className="h4 mb-3"><i className="fas fa-user-check mr-1"></i>Token Approvals </h1>
                    <p className="lead"> Review and revoke your token approvals for any dApp. </p>
                    <div className="mb-5-alt js-form-message input-group mb-2">
                      <input name="ctl00$ContentPlaceHolder1$txtSearchInput" maxlength="255" id="ContentPlaceHolder1_txtSearchInput" className="form-control" type="text" aria-describedby="button-header-search" required="" data-msg="Search for your address" data-error-className="u-has-error"
                        data-success-className="u-has-success" placeholder="Search by Address" />
                      <div className="input-group-append">
                        <button onclick="__doPostBack('ctl00$ContentPlaceHolder1$btnSubmitSearch','')" id="ContentPlaceHolder1_btnSubmitSearch" className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="unapproveModal" tabindex="-1" role="dialog" aria-labelledby="unapproveModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title">
                    <h5>Revoke Approval</h5>
                  </div>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label for="txtToken">Token:</label>
                    <input type="text" className="form-control" id="txtToken" disabled />
                    <span id="errorTxtToken" className="invalid-feedback" style={{ display: "none" }}>Please
                      enter a valid Bsc Address</span>
                    <label for="txtSpender" className="mt-1">Spender:</label>
                    <input type="text" className="form-control" id="txtSpender" disabled />
                    <span id="errorTxtSpender" className="invalid-feedback" style={{ display: "none" }}>Please
                      enter a valid Bsc Address</span>
                    <button type="button" className="btn btn-sm btn-primary mt-2" id="btnUnapprove">Revoke</button>
                    <a className="btn btn-sm btn-primary mt-2" id="btnViewTx" style={{ display: "none" }} href="#" target="_blank">View your transaction</a>
                  </div>
                  <div className="alert alert-danger mt-2" role="alert" id="errorDiv" style={{ display: "none" }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="connectWalletModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Connect a Wallet </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <button type="button" value="metamask" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center" data-dismiss="modal">
                    <span className="text-dark d-flex align-items-center">MetaMask <span
                      className="badge badge-soft-secondary badge-custom-wallet ml-2">Popular</span>
                    </span>
                    <img width="25" src="../images/svg/brands/metamask.svg" alt="" />
                  </button>
                  <button type="button" value="walletconnect" className="btn btn-custom btn-custom-wallet btn-block d-flex justify-content-between align-items-center" data-dismiss="modal">
                    <span className="text-dark">WalletConnect</span>
                    <img width="25" src="../images/svg/brands/walletconnect.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
