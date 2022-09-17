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

        <div className="container">
          <div className="border-bottom py-3 mb-3">
            <div className="d-flex mb-2 mb-sm-0">
              <h1 className="h4 mb-0">Vyper Online Compiler (Experimental)</h1>
            </div>
          </div>
          <p className="mb-0">Compiles Vyper source code and outputs the ABI, ByteCode and Runtime Bytecode </p>
          <p className="mb-0">
            <span id="spinwheel" style={{ display: "none" }}>
              <img src="/images/spinnergear.svg" width="40" /> Please wait..</span>
          </p>
        </div>
        <div className="container space-bottom-2">
          <div className="py-4">
            <form method="post" action="./vyper" id="ctl00" className="js-validate">
              <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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"
                />
              </div>
              <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="AF372940" />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="iscn9gHnn/ktse0Y9s35kDzfmOft3EQXq5XRGzEnsda+uses+DwqLADBL0ZelvWNwX5yiDl6UkBTfCQaSsl8roLydys8d2IJurH4/pfSIatCUCpKduTfRxkoclWQ3vPcyxw7dPVuUF8sJAIKFOO94S+Xe7lMpIPFciogn0TWPhFBe8YL7VAbdj0XOMbIljjLjWtIUUDDJmyUCfWAY8y2YXlqgOh+cs9PkVl3Q47uaCepVy7xmkStcYPKgQv+4BsQiHDNw2A4ZDpazOFWQVQtr8CtvzkhP/x8242FYjPsRaa8oVWCaLbNRnAGW2/bW0Kim58hky3BUD1aTocGY8cfuWgNtFD5tBk5Q/RFlUIE0wZ3TYQddlT0jJo4Q2tKETBQO27ZMK1d9QzkBzzwz+3T1Q6IRakBZPLFXJOwDaMX7OK4H+BV0MuGFyEHcTyt39q6BdX4fTP5nGDEVu7qOeDPAazmrC7r0kQfSda3j5i4BLwONeelE2hFeKD2jUlR9WMUWnP9cGT/JUsczTJDmjxCF+UvjpbfZvnMIYkYoJSa4WQU52VoJAtrAbrNPTJicf2i20dv4arMWAper6FqKhaCtXMjQUuONavpq5wTIcuTKeuKMSh2hLrek9/KfFFxhJxWry00MwJ5Qg5QTG+bgb4+vOS947CrtPbhnCRhb/mB3wZCGfsXkJri4pX74DmRXrA7yfXVftaHxLVtrQbLEvHDxua0LOr7nsUdr2TEjUITw29Cpl/al67p8/opnHyWixmcgorSsX+wW1s6TIzcW39YFBKHetfpzxIBhwn+L/GLUR5p+QgdSMB7DGd0HVscr2hHcy7E1m0ytwKsMUjnmFh0fbA1otf01OMeNzrk4W+528JdAMAAjsCCF/uervIdhs/bVab7hjIgMT4QsGSzm8UwXwPotIkBtAau/hzSQqMwwgc="
                />
              </div>
              <div className="js-form-message form-group">
                <label for="ddlCompilerVersions" id="lblCompilerVersion">[Step 1] Select Compiler
                  Version</label>
                <div className="js-focus-state input-group input-group-sm mb-2 w-50">
                  <select name="ctl00$ContentPlaceHolder1$ddlCompilerVersions" id="ContentPlaceHolder1_ddlCompilerVersions" className="custom-select custom-select-sm" required="" data-msg="Compiler Version Required" data-error-className="u-has-error" data-success-className="u-has-success">
                    <option value="">[Please Select]</option>
                    <option value="vyper:0.3.6">vyper:0.3.6</option>
                    <option value="vyper:0.3.5">vyper:0.3.5</option>
                    <option value="vyper:0.3.4">vyper:0.3.4</option>
                    <option value="vyper:0.3.3">vyper:0.3.3</option>
                    <option value="vyper:0.3.2">vyper:0.3.2</option>
                    <option value="vyper:0.3.1">vyper:0.3.1</option>
                    <option value="vyper:0.3.0">vyper:0.3.0</option>
                    <option value="vyper:0.2.16">vyper:0.2.16</option>
                    <option value="vyper:0.2.15">vyper:0.2.15</option>
                    <option value="vyper:0.2.13">vyper:0.2.13</option>
                    <option value="vyper:0.2.12">vyper:0.2.12</option>
                    <option value="vyper:0.2.11">vyper:0.2.11</option>
                    <option value="vyper:0.2.8">vyper:0.2.8</option>
                    <option value="vyper:0.2.7">vyper:0.2.7</option>
                    <option value="vyper:0.2.5">vyper:0.2.5</option>
                    <option value="vyper:0.2.4">vyper:0.2.4</option>
                    <option value="vyper:0.2.3">vyper:0.2.3</option>
                    <option value="vyper:0.2.2">vyper:0.2.2</option>
                    <option value="vyper:0.2.1">vyper:0.2.1</option>
                    <option value="vyper:0.2.0">vyper:0.2.0</option>
                    <option value="vyper:0.1.0b17">vyper:0.1.0b17</option>
                    <option value="vyper:0.1.0b16">vyper:0.1.0b16</option>
                    <option value="vyper:0.1.0b15">vyper:0.1.0b15</option>
                    <option value="vyper:0.1.0b14">vyper:0.1.0b14</option>
                    <option value="vyper:0.1.0b13.hotfix">vyper:0.1.0b13.hotfix</option>
                    <option value="vyper:0.1.0b13">vyper:0.1.0b13</option>
                    <option value="vyper:0.1.0b12">vyper:0.1.0b12</option>
                    <option value="vyper:0.1.0b11">vyper:0.1.0b11</option>
                    <option value="vyper:0.1.0b10">vyper:0.1.0b10</option>
                    <option value="vyper:0.1.0b9">vyper:0.1.0b9</option>
                    <option value="vyper:0.1.0b8">vyper:0.1.0b8</option>
                    <option value="vyper:0.1.0b7">vyper:0.1.0b7</option>
                    <option value="vyper:0.1.0b4">vyper:0.1.0b4</option>
                  </select>
                </div>
              </div>
              <div className="js-form-message form-group mb-3">
                <label for="txtSourceCode" id="lblSourceCode">[Step 2] Enter Source Code Below </label>
                <div className="js-focus-state">
                  <textarea name="ctl00$ContentPlaceHolder1$txtSourceCode" rows="10" cols="20" id="ContentPlaceHolder1_txtSourceCode" className="form-control w-100" required="" data-msg="Please enter Source Code" data-error-className="u-has-error" data-success-className="u-has-success"
                    placeholder="Please enter Source Code"></textarea>
                </div>
              </div>
              <p className="font-size-1"><strong>Tip:</strong> Try compiling the sample
                <font color="blue"><a rel='nofollow noopener' href="https://raw.githubusercontent.com/prysmaticlabs/prysm/62f304e668bc78c4078cd376ba141b58eea777ef/contracts/deposit-contract/depositContract.v.py" target="_blank">Prysmaticlabs Contract</a></font>
                (for vyper version 0.1.0b7)</p>
              <div className="text-md-right">
                <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Compile Vyper" onclick="var isValid = validatecheck(&#39;&#39;); if (isValid) {var $btn = $(&#39;#spinwheel&#39;); $btn.show(); window.location.hash = &#39;#&#39;; buttonclicked = true;};"
                  id="ContentPlaceHolder1_btnSubmit" className="btn btn-sm btn-primary mr-2" />
                <input type="submit" name="ctl00$ContentPlaceHolder1$btnReset" value="Reset" id="ContentPlaceHolder1_btnReset" className="btn btn-sm btn-soft-secondary" formnovalidate="formnovalidate" />
              </div>
              <div className="mt-2">
                <input type="hidden" name="ctl00$ContentPlaceHolder1$hidABIcode" id="ContentPlaceHolder1_hidABIcode" />
                <input type="hidden" name="ctl00$ContentPlaceHolder1$hidBytecode" id="ContentPlaceHolder1_hidBytecode" />
              </div>
              <div id="ContentPlaceHolder1_pnlDeploy" className="mt-2 text-md-right" style={{ display: "none" }}> Deploy Contract? <a href="#" id="connectWeb3Provider" style={{ display: "none" }} onclick="connectProvider(); return false;">Connect to Web3 Provider</a><a href="#" id="submitContract" style={{ display: "none" }} onclick="deployContract();">Broadcast</a>
              </div>
            </form>
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
