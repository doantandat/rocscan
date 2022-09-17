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
        <div className="container py-3">
          <div className="d-sm-flex justify-content-between align-items-center">
            <div className="mb-2 mb-sm-0">
              <h1 className="h4 mb-0">ROC Smart Chain Gas Tracker</h1>
            </div>
            <div className="d-flex flex-wrap">
              <div className="text-secondary"> Next update in : <span id="countdowntimer">0</span>s </div>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col-lg-5 mb-3 mb-sm-0">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row align-items-center mb-3">
                    <div className="col-md-5 text-center text-md-left mb-2 mb-md-0">
                      <a id="btnViewSnapshot" className="btn btn-xs btn-soft-secondary d-none" onclick="switchToLive();" href="javascript:;"><i
                        className="fas fa-arrow-left mr-1"></i><span id="spanSnapshot">View
                          Live</span></a>
                    </div>
                    <div className="col-md-7 text-center text-md-right">
                      <div className="d-none" id="divTimestamp">
                        <span id='spanTimestamp' className="text-secondary mr-2"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center mb-3">
                    <div className="col-md-4 mb-1 mb-md-0">
                      <div className="card h-100 p-3 shadow-none">
                        <h3 className="h6 mb-0">
                          <b>Standard</b>
                        </h3>
                        <div id="divLowPrice">
                          <div className="h4 text-success mb-1"><span id="standardgas">5 Gwei</span>
                          </div>
                          <div className="text-secondary">(30-60 secs)</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-1 mb-md-0">
                      <div className="card h-100 p-3 shadow-none">
                        <h3 className="h6 mb-0">
                          <b>Fast</b>
                        </h3>
                        <div>
                          <div className="h4 text-primary mb-1"><span id="fastgas">5 Gwei</span></div>
                          <div className="text-secondary">(10-30 secs)</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-1 mb-md-0">
                      <div className="card h-100 p-3 shadow-none">
                        <h3 className="h6 mb-0">
                          <b>Rapid</b>
                        </h3>
                        <div>
                          <div className="h4 text-success mb-1">
                            <font color="brown"><span id="rapidgas">5 Gwei</span></font>
                          </div>
                          <div className="text-secondary">(5-10 secs)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="h6 font-weight-bold text-secondary mb-2 mb-md-0">Pending Transaction Pool Info:
                    </h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm1 mb-0">
                      <tbody>
                        <tr>
                          <td>Last Block :</td>
                          <td><span id="lastblock"><b>20803060</b></span></td>
                        </tr>
                        <tr>
                          <td><span title="Based on tracked transactions">Pending Queue</span> :
                          </td>
                          <td><span id="pendingcount"></span></td>
                        </tr>
                        <tr>
                          <td><span title="Based on last 5 blocks">Average Block Size </span> :
                          </td>
                          <td><span id="avgtxnsperblock"></span></td>
                        </tr>
                        <tr>
                          <td><span title="Based on last 5 blocks">Average Utilization</span> :
                          </td>
                          <td><span id="avgnetworkutilization"></span></td>
                        </tr>
                        <tr>
                          <td>Last Refreshed :</td>
                          <td><span id="lastupdated"></span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card h-100">
                <div className="card-body">
                  <div id="containerchart" style={{ width: "100%", height: "355px", margin: "0 auto" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4 text-center">
        </div>
        <div className="container space-bottom-2">
          <div id="ContentPlaceHolder1_mainrow" className="card">
            <div className="card-header sticky-card-header d-flex justify-content-between p-0">
              <ul className="nav  nav-custom nav-borderless nav_tabs1" id="nav_tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="gasguzzler-tab" data-toggle="tab" href="#gasguzzler" aria-controls="historicaldata" aria-selected="true" onclick="javascript:updatehash('');"><i className="fal fa-gas-pump mr-1"></i>Gas
                    Guzzlers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="gassender-tab" data-toggle="tab" href="#gassender" aria-controls="historicaldata" aria-selected="true" onclick="javascript:updatehash('gassender');"><i
                    className="fad fa-gas-pump mr-1"></i>Gas Spenders</a>
                </li>
              </ul>
              <div>
                <div className="position-relative py-2 mr-2 mb-2 mb-md-0"> Filter : <a id="selectTimer" className="btn btn-xss btn-custom dropdown-toggle" href="javascript:;" role="button" aria-controls="selectButton" aria-haspopup="true" aria-expanded="false" data-unfold-target="#selectButton" data-unfold-type="css-animation"
                  data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="5 mins"> 5 mins
                </a>
                  <div id="selectButton" className="dropdown-menu dropdown-unfold" aria-labelledby="selectTimer" style={{ minWidth: "100px", maxHeight: "250px", overflowY: "hidden" }}>
                    <a className="dropdown-item" href="/gastracker">5 Mins</a>
                    <a className="dropdown-item" href="/gastracker?data=30">30 Mins</a>
                    <a className="dropdown-item" href="/gastracker?data=60">60 Mins</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="gasguzzler" role="tabpanel" aria-labelledby="gasguzzler-tab">
                <div className="card-body mt-2">
                  <div className="d-md-flex justify-content-between mb-2">
                    <p className="mb-2 mb-md-0">
                      <b>Top 25 Gas Guzzlers</b> <span className="text-secondary">(Contracts / Accounts
                        that consume a lot of Gas)</span><br />
                    </p>
                    <nav aria-label="page navigation">
                      <span className="small text-secondary">
                        <span
                          className="u-label u-label--value u-label--secondary text-dark rounded mr-1">Last
                          updated at Block <a href='/block/20803060'>20803060</a></span></span>
                    </nav>
                  </div>
                  <div className="table-responsive mb-2 mb-md-0">
                    <table id="mytable" className="table table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" width="20">Rank</th>
                          <th scope="col">Address</th>
                          <th scope="col"> Fees Last 5 mins</th>
                          <th scope="col"> % Used 5 mins</th>
                          <th scope="col">Analytics</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className='text-right'>1 🥇</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: PancakeSwap: Router v2 (0x10ed43c718714eb63d5aa57b78b54704e256024e)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                              Router v2</a></span></td>

                          <td><span className='text-secondary' title='Fees'>1.77 ROC ($499.99)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 321,810,265'>4.28%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='4.28' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>2 🥈</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xdb475545112e8bf14cef2a77c67e4a20cff8dd18'>0xdb475545112e8bf14cef2a77c67e4a20cff8dd18</a>

                          </td>
                          <td><span className='text-secondary' title='Fees'>0.20 ROC ($55.41)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 39,281,581'>0.52%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '12%' }} aria-valuenow='0.52' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xdb475545112e8bf14cef2a77c67e4a20cff8dd18#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>3 🥉</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: BUSD-T Stablecoin (0x55d398326f99059ff775485246999027b3197955)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x55d398326f99059ff775485246999027b3197955'>BUSD-T
                              Stablecoin</a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.24 ROC ($66.34)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 36,657,417'>0.49%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '11%' }} aria-valuenow='0.49' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x55d398326f99059ff775485246999027b3197955#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>4</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xffe811714ab35360b67ee195ace7c10d93f89d8c'>0xffe811714ab35360b67ee195ace7c10d93f89d8c</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.11 ROC ($31.71)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 22,480,039'>0.30%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "7%" }} aria-valuenow='0.30' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xffe811714ab35360b67ee195ace7c10d93f89d8c#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>5</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x725e02c7f9168f45b3699cfb7c262fb6dd355e84'>0x725e02c7f9168f45b3699cfb7c262fb6dd355e84</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.09 ROC ($26.52)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 18,799,030'>0.25%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "6%" }} aria-valuenow='0.25' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x725e02c7f9168f45b3699cfb7c262fb6dd355e84#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>6</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: SafeMoon: Swap Router V2 (0x37da632c6436137bd4d0ca30c98d3c615974120b)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x37da632c6436137bd4d0ca30c98d3c615974120b'>SafeMoon:
                              Swap Router V2</a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.08 ROC ($22.77)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 16,144,811'>0.21%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "5%" }} aria-valuenow='0.21' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x37da632c6436137bd4d0ca30c98d3c615974120b#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>7</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x19e870855cb8fd8f6689743d3c28311c0d62a24c'>0x19e870855cb8fd8f6689743d3c28311c0d62a24c</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.08 ROC ($23.12)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 14,902,872'>0.20%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "5%" }} aria-valuenow='0.20' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x19e870855cb8fd8f6689743d3c28311c0d62a24c#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>8</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: Binance: BUSD Stablecoin (0xe9e7cea3dedca5984780bafc599bd69add087d56)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0xe9e7cea3dedca5984780bafc599bd69add087d56'>Binance:
                              BUSD Stablecoin</a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.09 ROC ($24.22)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 13,243,817'>0.18%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "4%" }} aria-valuenow='0.18' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xe9e7cea3dedca5984780bafc599bd69add087d56#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>9</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: PancakeSwap: Prediction V2 (0x18b2a687610328590bc8f2e5fedde3b582a49cda)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x18b2a687610328590bc8f2e5fedde3b582a49cda'>PancakeSwap:
                              Prediction V2</a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.08 ROC ($21.95)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 12,147,364'>0.16%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "4%" }} aria-valuenow='0.16' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x18b2a687610328590bc8f2e5fedde3b582a49cda#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>10</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xf8c13ebdd4e7a78603eca2c3043e4761d93074b1'>0xf8c13ebdd4e7a78603eca2c3043e4761d93074b1</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.06 ROC ($16.93)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 11,881,472'>0.16%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "4%" }} aria-valuenow='0.16' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xf8c13ebdd4e7a78603eca2c3043e4761d93074b1#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>11</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x6f42895f37291ec45f0a307b155229b923ff83f1'>0x6f42895f37291ec45f0a307b155229b923ff83f1</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($14.46)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 10,253,462'>0.14%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "3%" }} aria-valuenow='0.14' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x6f42895f37291ec45f0a307b155229b923ff83f1#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>12</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x1385e68e3b5ea66fc50a221f8dcbabbfd3ee282b'>0x1385e68e3b5ea66fc50a221f8dcbabbfd3ee282b</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($14.06)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 9,970,604'>0.13%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "3%" }} aria-valuenow='0.13' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1385e68e3b5ea66fc50a221f8dcbabbfd3ee282b#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>13</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x5acc84a3e955bdd76467d3348077d003f00ffb97'>0x5acc84a3e955bdd76467d3348077d003f00ffb97</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($13.71)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 9,717,849'>0.13%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "3%" }} aria-valuenow='0.13' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x5acc84a3e955bdd76467d3348077d003f00ffb97#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>14</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xc820d35cde84471adbb30d4eb3dccbeba03c5749'>0xc820d35cde84471adbb30d4eb3dccbeba03c5749</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($13.58)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 9,628,087'>0.13%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: "3%" }} aria-valuenow='0.13' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xc820d35cde84471adbb30d4eb3dccbeba03c5749#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>15</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x779c7a9f92ada6f94bb46b60de1db936097b91b5'>0x779c7a9f92ada6f94bb46b60de1db936097b91b5</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($10.97)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,775,274'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x779c7a9f92ada6f94bb46b60de1db936097b91b5#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>16</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xda2d21872999e700a715a1bda3153eb9079770bb'>0xda2d21872999e700a715a1bda3153eb9079770bb</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($10.83)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,676,431'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xda2d21872999e700a715a1bda3153eb9079770bb#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>17</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x21c3153f678c2ceb7a78df9764876512b70fea3c'>0x21c3153f678c2ceb7a78df9764876512b70fea3c</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($10.81)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,664,309'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x21c3153f678c2ceb7a78df9764876512b70fea3c#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>18</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xd0a01e04ec25e98bafc6ea22ec655b51c5b8ef86'>0xd0a01e04ec25e98bafc6ea22ec655b51c5b8ef86</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($10.56)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,398,596'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xd0a01e04ec25e98bafc6ea22ec655b51c5b8ef86#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>19</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x1420a3939a43962480ec1b2288cc5aa27cdeac1d'>0x1420a3939a43962480ec1b2288cc5aa27cdeac1d</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($10.56)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,265,395'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1420a3939a43962480ec1b2288cc5aa27cdeac1d#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>20</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag: Metamask: Swap Router (0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31'>Metamask:
                              Swap Router</a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($9.57)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,782,452'>0.09%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.09' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>21</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x2d18f2d27d50c9b4013deba3d54f60996bd8847e'>0x2d18f2d27d50c9b4013deba3d54f60996bd8847e</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($9.42)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,678,830'>0.09%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.09' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x2d18f2d27d50c9b4013deba3d54f60996bd8847e#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>22</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0xc64dc4a80ea745e1ba2c8ebdfdf7863d8e806a41'>0xc64dc4a80ea745e1ba2c8ebdfdf7863d8e806a41</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($12.75)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,306,740'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xc64dc4a80ea745e1ba2c8ebdfdf7863d8e806a41#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>23</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x0a29702d828c3bd9ba20c8d0cd46dfb853422e98'>0x0a29702d828c3bd9ba20c8d0cd46dfb853422e98</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.81)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,244,209'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x0a29702d828c3bd9ba20c8d0cd46dfb853422e98#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>24</span></td>
                          <td><span data-toggle="tooltip" data-original-title="Public Tag:  1inch v4: Router  (0x1111111254fb6c44bac0bed2854e76f90643097d)"><i
                            className="far fa-file-alt text-secondary" data-toggle="tooltip"
                            data-original-title="Contract"></i> <a
                              href='/address/0x1111111254fb6c44bac0bed2854e76f90643097d'>
                              1inch v4: Router </a></span></td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($11.66)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,150,232'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1111111254fb6c44bac0bed2854e76f90643097d#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>25</span></td>
                          <td><i className="far fa-file-alt text-secondary" data-toggle="tooltip" data-original-title="Contract"></i> <a href='/address/0x8d8800687afea249451734af243a8983c8c2a9e5'>0x8d8800687afea249451734af243a8983c8c2a9e5</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.60)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,095,952'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '2%' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='4.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x8d8800687afea249451734af243a8983c8c2a9e5#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                      </tbody >
                    </table >
                  </div >
                </div >
              </div >
              <div className="tab-pane fade" id="gassender" role="tabpanel" aria-labelledby="gassender-tab">
                <div className="card-body mt-2">
                  <div className="d-md-flex justify-content-between mb-2">
                    <p className="mb-2 mb-md-0">
                      <b>Top 25 Gas Spenders</b> <span className="text-secondary">(Sending Accounts that
                        pay a lot of Gas)</span><br />
                    </p>
                  </div>
                  <div className="table-responsive mb-2 mb-md-0" id="divTblResp2">
                    <table id="mytable2" className="table table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" width="20">Rank</th>
                          <th scope="col">Address</th>
                          <th scope="col"> Fees Last 5 mins</th>
                          <th scope="col"> % Used 5 mins</th>
                          <th scope="col">Analytics</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className='text-right'>1 🥇</span></td>
                          <td><a href='/address/0x343022cd1f42adc91e398bcd5af519d05561459d'>0x343022cd1f42adc91e398bcd5af519d05561459d</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.11 ROC ($29.85)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 21,161,223'>0.28%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.28' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x343022cd1f42adc91e398bcd5af519d05561459d#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>2 🥈</span></td>
                          <td><a href='/address/0xc265870ef8be0d91907e83fc6b15e10c660875a4'>0xc265870ef8be0d91907e83fc6b15e10c660875a4</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.09 ROC ($26.52)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 18,799,030'>0.25%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.25' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xc265870ef8be0d91907e83fc6b15e10c660875a4#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>3 🥉</span></td>
                          <td><a href='/address/0x0a329f5d38b863e59f9e96a4fe1b7ac55674bab1'>0x0a329f5d38b863e59f9e96a4fe1b7ac55674bab1</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.12 ROC ($35.20)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 17,825,341'>0.24%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.24' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x0a329f5d38b863e59f9e96a4fe1b7ac55674bab1#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>4</span></td>
                          <td><a href='/address/0x1249f7da015ed27e4260ba3aa7aa54ae8f303726'>0x1249f7da015ed27e4260ba3aa7aa54ae8f303726</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.06 ROC ($16.88)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 11,849,607'>0.16%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.16' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1249f7da015ed27e4260ba3aa7aa54ae8f303726#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>5</span></td>
                          <td><a href='/address/0xa2208246f3c25733915c75126fe9acba33564f33'>0xa2208246f3c25733915c75126fe9acba33564f33</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.05 ROC ($14.06)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 9,970,604'>0.13%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.13' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xa2208246f3c25733915c75126fe9acba33564f33#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr>
                        <tr>
                          <td><span className='text-right'>6</span></td>
                          <td><a href='/address/0x71b742880b1b2945ff5625004786be1316c7590a'>0x71b742880b1b2945ff5625004786be1316c7590a</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($11.15)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,904,838'>0.11%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.11' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x71b742880b1b2945ff5625004786be1316c7590a#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>7</span></td>
                          <td><a href='/address/0x0a43fd3b3faf178e30bef94692753c6b1737e27f'>0x0a43fd3b3faf178e30bef94692753c6b1737e27f</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.04 ROC ($11.17)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 7,695,846'>0.10%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.10' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x0a43fd3b3faf178e30bef94692753c6b1737e27f#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>8</span></td>
                          <td><a href='/address/0x98a2e49084a474203b5ee807f9dddcd305d73ab7'>0x98a2e49084a474203b5ee807f9dddcd305d73ab7</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($9.71)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,883,012'>0.09%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.09' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x98a2e49084a474203b5ee807f9dddcd305d73ab7#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>9</span></td>
                          <td><a href='/address/0xeea63c93fc184b6eb1d163d6bd9fc1aed548c430'>0xeea63c93fc184b6eb1d163d6bd9fc1aed548c430</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($9.54)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,761,191'>0.09%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.09' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xeea63c93fc184b6eb1d163d6bd9fc1aed548c430#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>10</span></td>
                          <td><a href='/address/0x53886e5386914a5d68bc16d5b4717684b1f3a6bb'>0x53886e5386914a5d68bc16d5b4717684b1f3a6bb</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($9.40)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,665,519'>0.09%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.09' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x53886e5386914a5d68bc16d5b4717684b1f3a6bb#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>11</span></td>
                          <td><a href='/address/0xe136454d62e3a1e1fbd9d338804122a576323881'>0xe136454d62e3a1e1fbd9d338804122a576323881</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.67)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,149,538'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xe136454d62e3a1e1fbd9d338804122a576323881#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>12</span></td>
                          <td><a href='/address/0xf9d592beb8604d55fd5c324260f6202ec79b5328'>0xf9d592beb8604d55fd5c324260f6202ec79b5328</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.62)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,110,207'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xf9d592beb8604d55fd5c324260f6202ec79b5328#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>13</span></td>
                          <td><a href='/address/0x78815067c3926cc33f7790d87460bec779f42d4d'>0x78815067c3926cc33f7790d87460bec779f42d4d</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.59)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 6,090,418'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x78815067c3926cc33f7790d87460bec779f42d4d#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>14</span></td>
                          <td><a href='/address/0x124575a1bba6263c9ffb1081870dbb2f90cf3924'>0x124575a1bba6263c9ffb1081870dbb2f90cf3924</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.46)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,998,637'>0.08%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.08' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x124575a1bba6263c9ffb1081870dbb2f90cf3924#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>15</span></td>
                          <td><a href='/address/0x46fc7972e3a63d1176e42f6b7d92ac3bdd112c9d'>0x46fc7972e3a63d1176e42f6b7d92ac3bdd112c9d</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($7.99)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,555,851'>0.07%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.07' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x46fc7972e3a63d1176e42f6b7d92ac3bdd112c9d#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>16</span></td>
                          <td><a href='/address/0x653dc63d5a4f3c4774411ba7e6e0d34103d37517'>0x653dc63d5a4f3c4774411ba7e6e0d34103d37517</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($8.63)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,433,836'>0.07%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.07' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x653dc63d5a4f3c4774411ba7e6e0d34103d37517#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>17</span></td>
                          <td><a href='/address/0xad80d41076781e92e049b3fa6db66e692884ff2f'>0xad80d41076781e92e049b3fa6db66e692884ff2f</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($7.44)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,272,808'>0.07%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.07' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xad80d41076781e92e049b3fa6db66e692884ff2f#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>18</span></td>
                          <td><a href='/address/0x1cab8e7dc7fcaf0747bf911c78ce5d50f078a031'>0x1cab8e7dc7fcaf0747bf911c78ce5d50f078a031</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($7.24)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,129,973'>0.07%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.07' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x1cab8e7dc7fcaf0747bf911c78ce5d50f078a031#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>19</span></td>
                          <td><a href='/address/0x5576d8c9f2940a0f0c8a72b140d62a744cecfcb1'>0x5576d8c9f2940a0f0c8a72b140d62a744cecfcb1</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.03 ROC ($7.12)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 5,046,851'>0.07%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.07' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x5576d8c9f2940a0f0c8a72b140d62a744cecfcb1#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>20</span></td>
                          <td><a href='/address/0x312515b51ae10ae98761073c608c86f4403c673a'>0x312515b51ae10ae98761073c608c86f4403c673a</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($6.86)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 4,862,328'>0.06%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.06' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x312515b51ae10ae98761073c608c86f4403c673a#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>21</span></td>
                          <td><a href='/address/0xbb1acf268701be61b9beb2fa03aad2fce4ab7fc7'>0xbb1acf268701be61b9beb2fa03aad2fce4ab7fc7</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($6.26)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 4,438,210'>0.06%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.06' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xbb1acf268701be61b9beb2fa03aad2fce4ab7fc7#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>22</span></td>
                          <td><a href='/address/0xe63bc410734260791b1ddbb3da456e7afd8e1b30'>0xe63bc410734260791b1ddbb3da456e7afd8e1b30</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($6.39)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 4,416,536'>0.06%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.06' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xe63bc410734260791b1ddbb3da456e7afd8e1b30#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>23</span></td>
                          <td><a href='/address/0xe42456c58d94055c2de8e3a8d86c55da32ef5869'>0xe42456c58d94055c2de8e3a8d86c55da32ef5869</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($6.00)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 4,252,812'>0.06%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.06' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xe42456c58d94055c2de8e3a8d86c55da32ef5869#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>24</span></td>
                          <td><a href='/address/0x416111885713ca058a4c3cc664e0358cade316fe'>0x416111885713ca058a4c3cc664e0358cade316fe</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($5.38)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 3,816,175'>0.05%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.05' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0x416111885713ca058a4c3cc664e0358cade316fe#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                        <tr>
                          <td><span className='text-right'>25</span></td>
                          <td><a href='/address/0xfb156fceae7c2d10cef830b62a80309c4bfae1e8'>0xfb156fceae7c2d10cef830b62a80309c4bfae1e8</a>
                          </td>

                          <td><span className='text-secondary' title='Fees'>0.02 ROC ($4.80)</span>
                          </td>
                          <td><span data-toggle='tooltip' title='Gas Units Used : 3,402,558'>0.05%</span>
                            <div className='progress mt-1 mr-5' style={{ height: '2px' }}>
                              <div className='progress-bar bg-primary' role='progressbar' style={{ width: '100%;' }} aria-valuenow='0.05' aria-valuemin='0' aria-valuemax='0.28'></div>
                            </div>
                          </td>
                          <td><a href='/address/0xfb156fceae7c2d10cef830b62a80309c4bfae1e8#analytics-txfees'><i
                            className="ml-2 fas fa-chart-line fa-lg"></i></a></td>
                        </tr >
                      </tbody >
                    </table >
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
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
