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
        <div className="container d-lg-flex align-items-lg-center min-height-550 space-1">
          <div className="w-lg-60 w-xl-50">
            <div className="mb-5">
              <h1 className="text-primary font-weight-normal">Search not <span className="font-weight-semi-bold">found</span></h1>
              <p className="mb-0">Oops! The search string you entered was: <b>dădadawd</b>
                <p>Sorry! This is an invalid search string.</p>
              </p>
              <p>If you think this is a problem with us, please <a href="/contactus">tell us</a>.</p>
            </div>
            <a className="btn btn-primary btn-wide transition-3d-hover" href="/">Back Home</a>
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
