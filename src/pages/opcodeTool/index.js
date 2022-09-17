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
            <div className="mb-2 mb-sm-0">
              <h1 className="h4 mb-0">Bytecode to Opcode Disassembler</h1>
            </div>
          </div>
          <p className="mb-0">Attempts to decode the low level Contract ByteCodes to Opcodes</p>
        </div>
        <div className="container space-bottom-2">
          <div className="py-4">
            <form method="post" action="./opcode-tool" id="ctl00" className="js-validate">
              <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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"
                />
              </div>
              <div className="aspNetHidden">
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="4CF962E7" />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="fcHh5r5ZcbYHoHiIny7yZj2FEGxsetrGwpSmxWkf2BYh7E8SxOHiU+Rtjlr9aO4a7FRKw5N8YQhfwhHnzvacO6onn4hmicYVAcyWFXWQ4kc5dbOjuoC1gNnnr5GDxyLqKSs6nNtGvhqikE3Xo4J1bg==" />
              </div>
              <div className="js-form-message mb-3">
                <textarea name="ctl00$ContentPlaceHolder1$txtByteCode" rows="10" cols="20" id="ContentPlaceHolder1_txtByteCode" className="form-control w-100" required="" data-error-className="u-has-error" data-success-className="u-has-success" placeholder="Enter Contract Bytecode (0x..)"
                  data-msg="Please enter contract bytecode"></textarea>
              </div>
              <div className="text-md-right">
                <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Decode" id="ContentPlaceHolder1_btnSubmit" className="btn btn-sm btn-primary" />
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
