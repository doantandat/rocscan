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
        <form method="post" action="./contractdiffchecker" id="ctl00">
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="v8HllI5AxkXhgmPfN4WwHCm8kAcNRTvuXLcP/ZW2n6QQB7Ke8X74BQwor07+A3bQ6itaDshOkq3wQzIqLXDuB3dkEWsFOX13VRANqlxLh0vTgrRJ5hUwaLvmRHXFk+0+BIN/YB8wmSXKLDSyn+PUCfCqhNAbjtjNylKgBW66ZadOflinVXMO+HxT6tQ1DwoveMCQyH7MGVaxi7zhL1m8aGHmkMZqQCR+qocLLi1iP+wCaeb8Lc2pvh4iNBdC6loVXCtbX6DKysxPS51WzZRLtp6QIHPDKf63yMoiO4da79QBxuZAJazxrVG7QVGxta3Qy6ugkwG3h0Ra6hluw9LvkjoOuGS3/+HCONqn//CkTq2oVtcCWA5HPmIAPsmwKg2TKSTTWYDFM1Z8ynGhXhwYxIPgqeoaHGqUlZlzpx/h951PZXgvvnpwSGcBgJQHeswmrErZHAFHoLGRtTKGCvFo4oYT9ZBEBh3kEcI5rp93RcFTOD1AuKmhWrl1DuhnnyLljLkbWCyvwhZkcOK95/gdfhmnoV5RpGsJzmYAb8DoOSnGri1IwA102o9ct/OhcWaIfJ90IINzqeCW4bqLk86DG6J9D6Q5hIH8ROhfAXQxWdiray6xqyp1ZZmmosIPwbynV9Y8+y+2v0dv3QYQLv5s6mIdgyL9d0XtGe6JzyswIRhkG4vpHyiUPjG9q+wdDvx+gHCoKw6vJA96N7HBa+GK45F0W8a41CGH+xFrGAX5bUSONqey06VFfsQOvpTZXVJo2Cn8lVjNDXN5WZeugquIrh0TrDVSRZBnCcKw/R+LV9i6knwBTykgbD2KyYi+Wzon68G0LfSpK4sru4P/8xs+Fv3gUHTfcs9gVHLstqHHtUOLG9qhpP0nVlI6Qb39ag+VNFZpF/u0JcRZeV5ZyVJyJVBOtUojM4xUsNecoopbs5EA+SBNavvhTm8pNvdw2gVdiwbBVOsnpurnz3Di2vXmfA8hwlb0LFjeKue3e6LqMwA2Jz2nIzkPalcLck/JIP9HNSVUyfTV/8SsMZVQCZCGLVJg9UKAI2Yvx+Nn/iQ0aipaMCCRrcCNMkTnSKghbBdyM+XuLbIlEx/dhJR6aPIx8LKeM0jzfNBxS1ZlQg3+gQeXEB3dhopqPXtj7tI+LoboRaUl04SPnTZWl+197NbQCZTb5mLYoii1EHh9AehJ0nGYza80a09RQz7ompEO5XGS2nLAh6jtdM/Ccc385K5dQ85RsIizSebhK8zFeZaWZWs/YSrMP+4uc4dAPjkIfFXxfDH0nEd47gHRsHilQdTVxIpaAGFFyZuBclx6XntCp5OkRUFWS/xVnpqgLHxvQN9zvAuuaoaLX8KYUsag4AXSbSfuXlcIsFxMGEBtkXlf1NT/PY0PVYJyBHs/Q3U5ZPMUcqW7W1uRajfPWaad8Pi4aAt59u5WljDmv32vE1UFKYj5EdZLCo46EAMtb0KVwS7yDqOTuMCbyPNOLgFYu82pad6cZxOjAhvHVRCVEAAb7soYlV+KhhrqbakO611b7cdz7YTLoMu91c4OZFj47OG2HinZ+5rDSbB3EqGoxTZTUjc="
            />
          </div>
          <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="74562E0C" />
            <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="tQs+f8/xRsed6ZvsW+VdoOR2gVibDJY3chkKkdUX+GJy11q+iSx/Sy07rjFzfHqeC0vWGO6MAyaNQ35dLAEGHpfNf0fp/rorB5G8JqM9T5PBtbmo+kJ7rhpYkHlB71rhV5EV8DbYgIA36qChjzYhvg==" />
          </div>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center border-bottom py-3">
              <div className="mb-1 mb-md-0">
                <h1 className="h4 mb-0"> Contract Diff Checker </h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small p-0 mb-0" id="olBreadCrumb">
                </ol>
              </nav>
            </div>
          </div>
          <div className="container space-1 space-bottom-2">
            <div id="ContentPlaceHolder1_divSummary" className="row mx-gutters-sm-1 mb-3">
              <input name="ctl00$ContentPlaceHolder1$hdnContContAddres1" type="hidden" id="ContentPlaceHolder1_hdnContContAddres1" />
              <input name="ctl00$ContentPlaceHolder1$hdnContContAddres2" type="hidden" id="ContentPlaceHolder1_hdnContContAddres2" />
              <div className="col-md-12">
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0 contAddress">
                <label>Contract Address 1</label>
                <div className="input-group input-group-sm mb-4">
                  <input id="txtContAddres1" type="text" className="form-control" placeholder="Enter Contract Address 1 and Press Enter" aria-label="Enter Contract Address 1 and Press Enter" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onclick="onLookUpClick1();">Lookup</button>
                  </div>
                </div>
                <div className="card p-4">
                  <div id="ContentPlaceHolder1_divBlankConent1" className="text-center w-lg-75 w-xl-50 mx-auto space-1">
                    <img id='empty-nodata-state-1' width='75' className='mb-3' src='../images/svg/components/empty-nodata-state.svg' alt='' />
                    <p className="mb-0">Please enter a contract address above to load the contract details and source code.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 contAddress">
                <label>Contract Address 2</label>
                <div className="input-group input-group-sm mb-4">
                  <input id="txtContAddres2" type="text" className="form-control" placeholder="Contract Address 2" aria-label="Contract Address 2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onclick="onLookUpClick2();">Lookup</button>
                  </div>
                </div>
                <div className="card p-4">
                  <div id="ContentPlaceHolder1_divBlankConent2" className="text-center w-lg-75 w-xl-50 mx-auto space-1">
                    <img id='empty-nodata-state-2' width='75' className='mb-3' src='../images/svg/components/empty-nodata-state.svg' alt='' />
                    <p className="mb-0">Please enter a contract address above to load the contract details and source code.</p>
                  </div>
                </div>
              </div>
              <div className="top d-none">
                <strong>Context size (optional):</strong>
                <input type="text" id="contextSize" value="" />
              </div>
              <div className="col-12 mt-4">
                <div id="diffoutput" className="table-responsive"></div>
              </div>
              <div className="col-12 text-center mt-4">
                <button type="button" className="btn btn-sm btn-secondary divDiff" onclick="checkContractDiff(0);" style={{ display: "none" }}>Compare Difference</button>
                <button type="button" className="btn btn-sm btn-secondary btnback" onclick="backToSummary();" style={{ display: "none" }}>Back</button>
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
