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
      <main id="content" className="bg-img-hero-center" style={{ backgroundImage: "url(images/error-404.svg)" }} role="main">
        <div className="container d-lg-flex align-items-lg-center min-height-100vh">
          <div className="w-lg-60 w-xl-50">
            <div className="mb-5">
              <h1 className="text-secondary font-weight-normal"><span className="font-weight-semi-bold mr-2">Sorry!</span>We encountered an unexpected error.</h1>
              <p className="mb-0 ">Please try back again shortly</p>
            </div>
            <a className="btn btn-primary btn-wide transition-3d-hover" href="/">Back Home</a>
          </div>
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
