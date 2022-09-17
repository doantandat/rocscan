import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import
{
  submitApprove,
  checkApprove,
  openEggs,
  getInfoBox,
  getPrices
} from "../../service/index";

class Home extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      prices: {
        updated_at: '',
        data: {
          name: "Rocket Raccoon",
          symbol: "ROC",
          price: "0.00",
          price_BNB: "0.00"
        }
      }
    }
  }
  componentDidMount()
  {
    this._getPrices()
  }


  _getPrices = async () =>
  {
    getPrices().then(response => response.text())
      .then(result =>
      {
        if (result) {
          result = JSON.parse(result);
        }
        console.log(result)
        this.setState(state =>
        {
          return {
            prices: result
          }
        })
      })
      .catch(error => console.log('error', error));

  }
  render()
  {

    return (
      <>
        <section className="bg-dark" style={{ backgroundImage: "url(/images/svg/components/abstract-shapes-20.svg)" }}>
          <div className="container space-top-2 space-bottom-3">
            <div className="row justify-content-between align-items-center mb-4">
              <div className="col-md-12 col-lg-7">
                <div className="pr-lg-4 pr-xll-5">
                  <h1 className="h4 mb-3" style={{ color: "#FBDA3C" }}> ROC Smart Chain Explorer </h1>
                  <form className="mb-3" action="/search" method="GET">
                    <div className="input-group input-group-shadow">
                      <div className="input-group-prepend d-none d-md-block">
                        <select name="f" className="custom-select custom-arrow-select input-group-text font-size-base filterby text-left">
                          <option selected defaultValue={"0"}>All Filters</option>
                          <option value="1">Addresses</option>
                          <option value="2">Tokens</option>
                          <option value="3">Name Tags</option>
                          <option value="4">Labels</option>
                          <option value="5">Websites</option>
                        </select>
                      </div>
                      <input id="txtSearchInput" type="text" className="form-control searchautocomplete" placeholder="Search by Address / Txn Hash / Block / Token" aria-describedby="button-header-search" name="q" onKeyUp="handleSearchText(this);" />
                      <input type="hidden" value="" id="hdnSearchText" />
                      <input id="hdnIsTestNet" value="False" type="hidden" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="text-white-70 mb-0" style={{ minHeight: "22px" }}>
                    <ins data-revive-zoneid="1" data-revive-id="d2636ef8c49e3f153802edf66c0e240f"></ins>
                    <script async src="//mct.RocScan.com/www/d/asyncjses.php"></script>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                {/* <div className="d-none d-lg-block text-center pl-lg-4 pl-xll-5">
                  <a className="d-inline-block d-sm-none position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/7MP4XDDQCB3Z58YWS5RBWWJ3T">
                    <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ left: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_321x101.gif" alt="Ads" /></a>
                  <a className="d-none d-sm-inline-block d-lg-none position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/7C8Z911SZP8ES9T73A4XYUP7D">
                    <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ left: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_730x90.jpg" alt="Ads" /></a>
                  <a className="d-none d-lg-inline-block-alt position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/S3F6JX2QEH5I7NBWARVR5Z4MY">
                    <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ right: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_321x101.gif" alt="Ads" /></a>
                </div> */}
              </div>
            </div>
          </div>
        </section >
        <div className="container space-bottom-1 mt-n5">
          <div id="ContentPlaceHolder1_mainboxes" className="card mb-4">
            <div className="card-body">
              <div className="row mx-gutters-md-1">
                <div className="col-md-6 col-lg-4">
                  <div className="media align-items-center">
                    <figure className="u-sm-avatar mr-2">
                      <div className="u-xs-avatar mx-auto">
                        <img src="/images/logoRoc.png" alt="ROC" style={{ width: "19px", height: "19px" }} />
                      </div>
                    </figure>
                    <div className="media-body">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">ROC Price</h2>
                      <span className='text-size-1 color'>${Number(this.state.prices.data.price).toFixed(4)}<span className="text-secondary color"> @ {Number(this.state.prices.data.price_BNB).toFixed(6)}
                        BNB</span><span className='text-danger small'> (0.00%)</span></span>
                    </div>
                  </div>
                  <hr className="hr-space-lg"></hr>
                  <div className="media align-items-center">
                    <figure className="u-sm-avatar mr-2">
                      <img src="/images/svg/icons/icon-8.svg" alt="Market Cap" />
                    </figure>
                    <div className="media-body">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">Market Cap
                      </h2>
                      <span className='text-size-1 color'>${Number(this.state.prices.data.price * 1000000000).toFixed(2)}
                        {/* <span
                        className='text-secondary'>(22,538,894 ROC)</span> */}
                      </span>
                    </div>
                  </div>
                  <hr className="d-block d-md-none hr-space-lg"></hr>
                </div>
                <div className="col-md-6 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-md">
                  <div className="media align-items-center">
                    <figure className="u-sm-avatar mr-2">
                      <img src="/images/svg/icons/icon-2-1.svg?v=1.3" alt="Network Difficulty" />
                    </figure>
                    <div className="media-body">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">Transactions</h2>
                      <a href='/txs' className='text-size-1 text-link' rel='tooltip' data-toggle='tooltip' data-placement='left' data-html='true' title='Total Transactions Counter<br>(Update every 5 mins)'>999
                        M</a><span className='text-secondary small' rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='Transactions per Second'> (29.7 TPS)</span>
                    </div>
                    <div className="text-right">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">Med Gas Price</h2>
                      <a href='/gastracker' className='text-size-1 text-link'>5 Gwei <span
                        className='text-secondary small'>($0.00)</span></a>
                    </div>
                  </div>
                  <hr className="hr-space-lg"></hr>
                  <div className="media align-items-center">
                    <figure className="u-sm-avatar mr-2">
                      <img src="/images/svg/icons/icon-51.svg?v=1.6" alt="SVG" />
                    </figure>
                    <div className="media-body">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">Latest Block</h2>
                      <a className='text-size-1 text-link' href="blocks" rel='tooltip' data-placement='bottom' title="The latest Block No"><span
                        id='lastblock'>12798733</span></a>
                      <a data-toggle='tooltip' href='/chart/blocktime' className='small text-secondary  text-link' data-placement='right' data-title='Average Block Time (The latest 5000 blocks)'>(<span
                        id='avgblocktime'>3.0s</span>)</a>
                    </div>
                    <div className="text-right">
                      <h2 className="font-size-1 text-uppercase text-secondary mb-0">Voting Power</h2>
                      <a className="text-size-1 text-link" href="/chart/hashrate">
                        <a className='text-size-1 text-link' href='/chart/votingpower7d'>0<b>.</b>04964 ROC</a></a>
                    </div>
                  </div>
                  <hr className="d-block d-md-none hr-space-lg"></hr>
                </div>
                <div className="col-md-12 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-lg">
                  <hr className="d-none d-md-block d-lg-none my-4"></hr>
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="font-size-1 text-uppercase text-secondary mb-0">ROC TRANSACTION HISTORY LAST 14 DAYS</h2>
                    <div className="position-relative float-right z-index-2">
                      <a id="customchartsinvoker" className="btn btn-xs btn-icon btn-soft-secondary" href="javascript:;" role="button" aria-controls="customcharts" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-target="#customcharts" data-unfold-type="css-animation"
                        data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                        <i className="fa fa-ellipsis-v btn-icon__inner"></i>
                      </a>
                      <div id="customcharts" className="dropdown-menu dropdown-menu-right dropdown-unfold" aria-labelledby="customchartsinvoker">
                        <a className="dropdown-item" href="/chart/tx">View Detailed Chart</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="container-1" className="" style={{ height: "106px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none text-center pl-lg-4 pl-xll-5 mb-4">
            {/* <a className="d-inline-block d-sm-none position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/7MP4XDDQCB3Z58YWS5RBWWJ3T">
              <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ left: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_321x101.gif" alt="Ads" /></a>
            <a className="d-none d-sm-inline-block d-lg-none position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/7C8Z911SZP8ES9T73A4XYUP7D">
              <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ left: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_730x90.jpg" alt="Ads" /></a>
            <a className="d-none d-lg-inline-block-alt position-relative text-dark" target="_blank" href="https://goto.RocScan.com/rd/S3F6JX2QEH5I7NBWARVR5Z4MY">
              <span className="showcase-banner-text bg-white font-size-1 shadow rounded px-1" style={{ right: "1rem" }}>Ad</span><img className="img-fluid rounded" src="/images/gen/aax_052_321x101.gif" alt="Ads" /></a> */}
          </div>
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card h-100">
                <div className="card-header">
                  <h2 className="card-header-title">Latest Blocks</h2>
                </div>
                <div className="js-scrollbar card-body overflow-hidden" style={{ height: "400px" }}>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798733'>12798733</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 12
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798733" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964 ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798732'>12798732</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 15
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xe9ae3261a475a27bb1028f140bc2a7c843318afd'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798732" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964  ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798731'>12798731</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 18
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798731" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964  ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798730'>12798730</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 21
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798730" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964  ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798729'>12798729</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 24
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798729" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964  ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary'><span
                          className='btn-icon__inner text-dark'>Bk</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none color'>Block</span>
                          <a href='/block/12798728'>12798728</a><span className='d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap'> 27
                            secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-flex justify-content-between'>
                        <div className='text-nowrap'><span className='d-block mb-1 mb-sm-0 color'>Validated By <a
                          className='hash-tag text-truncate'
                          href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                          Rocket Raccoon</a></span><a href="/txs?block=12798728" data-toggle='tooltip' title="Transactions in this Block">1 txns
                          </a> <span className="small text-secondary">in 3 secs</span><span className='d-inline-block d-sm-none'><span
                            className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap'
                            data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964
                            ROC</span></span>
                        </div>
                        <div className='d-none d-sm-block'><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Block Reward'>0<b>.</b>04964 ROC</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="card-footer">
                  <Link className="btn btn-xs btn-block btn-soft-primary" to="/blocks">View all blocks</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-header">
                  <h2 className="card-header-title">Latest Transactions</h2>
                </div>
                <div className="js-scrollbar card-body overflow-hidden" style={{ height: "400px" }}>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0x9038f26efba50ed7e00de732d31e7093f207a149c6b6691cfcc766fc501c04c19'>0x9038f26efba50ed7e00de732d31e7093f207a149c6b6691cfcc766fc501c04c19</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d9'>0xea0a6e3c511bbd10f4519ece37dc24887e11b55d9</a></span><span className='d-sm-block color'>To <a
                            href='/address/0x0000000000000000000000000000000000001000'
                            className='hash-tag text-truncate'>0x0000000000000000000000000000000000001000</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0<b>.</b>04964 ROC</span></div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0x2920138363d034966662623e479329946205e6f36ee6ba1c4a8f37fd74bfac6a9'>0x2920138363d034966662623e479329946205e6f36ee6ba1c4a8f37fd74bfac6a9</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0x028a6cb5708378fb8e93d326b370d15dbf5b86ef9'>0x028a6cb5708378fb8e93d326b370d15dbf5b86ef9</a></span><span className='d-sm-block color'>To <a
                            href='/address/0x6c6ee9b4ee43e18e7c418f00efc0868347939f539'
                            className='hash-tag text-truncate'>0x6c6ee9b4ee43e18e7c418f00efc0868347939f539</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0.04964 ROC</span></div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0xe21464e1662fd33d9e12de79d3156f43163cd8653f15726d15db956a62dddf3c9'>0xe21464e1662fd33d9e12de79d3156f43163cd8653f15726d15db956a62dddf3c9</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0x94433e7401c5159b5ee2ab06ccfefdd822bc3a7c9'>0x94433e7401c5159b5ee2ab06ccfefdd822bc3a7c9</a></span><span className='d-sm-block color'>To <a
                            href='/address/0xb5a6b2e99eabf8bae6e157253eb9cb747eab97869'
                            className='hash-tag text-truncate'>0xb5a6b2e99eabf8bae6e157253eb9cb747eab97869</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0.04964 ROC</span></div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0xab43ed5a2af5a44ce6c1e21f0ec6fde485362b4c5108bc0a75084f637617bd1a9'>0xab43ed5a2af5a44ce6c1e21f0ec6fde485362b4c5108bc0a75084f637617bd1a9</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0x7278e0602bcee01ebecede20b7bf916feb3703fa9'>0x7278e0602bcee01ebecede20b7bf916feb3703fa9</a></span><span className='d-sm-block color'>To <a
                            href='/address/0x55d398326f99059ff775485246999027b31979559'
                            className='hash-tag text-truncate'>0x55d398326f99059ff775485246999027b31979559</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0.04964 ROC</span></div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0x9cf0b0c11eb1036ebb36e248546d29222713fe939066ef55ecad82fa23968d8c9'>0x9cf0b0c11eb1036ebb36e248546d29222713fe939066ef55ecad82fa23968d8c9</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0xa6df210aa50d0b3656555df64874b1cb9c9e2e699'>0xa6df210aa50d0b3656555df64874b1cb9c9e2e699</a></span><span className='d-sm-block color'>To <a
                            href='/address/0xe9e7cea3dedca5984780bafc599bd69add087d569'
                            className='hash-tag text-truncate'>0xe9e7cea3dedca5984780bafc599bd69add087d569</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0.04964 ROC</span></div>
                      </div>
                    </div>
                  </div>
                  <hr className='hr-space'></hr>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <div className='media align-items-sm-center mr-4 mb-1 mb-sm-0'>
                        <div className='d-none d-sm-flex mr-2'><span className='btn btn-icon btn-soft-secondary rounded-circle'><span
                          className='btn-icon__inner text-dark'>Tx</span></span>
                        </div>
                        <div className='media-body'><span className='d-inline-block d-sm-none mr-1 color'>TX#</span><a className='hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate' href='/tx/0x356a98c41596e5239b761ed145050444bf6efb85e61db644a96c8b4aad8a33ab9'>0x356a98c41596e5239b761ed145050444bf6efb85e61db644a96c8b4aad8a33ab9</a>
                          <span className='d-none d-sm-block small text-secondary'>12 secs ago</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <div className='d-sm-flex justify-content-between'>
                        <div className='text-nowrap mr-4 mb-1 mb-sm-0'><span className="color">From <a
                          className='hash-tag text-truncate'
                          href='/address/0x85cf2d9371796273862a81d63b4cd8c1c7a0397c9'>0x85cf2d9371796273862a81d63b4cd8c1c7a0397c9</a></span><span className='d-sm-block color'>To <a
                            href='/address/0x55d398326f99059ff775485246999027b31979559'
                            className='hash-tag text-truncate'>0x55d398326f99059ff775485246999027b31979559</a></span>
                        </div>
                        <div><span className='u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap' data-toggle='tooltip' title='Amount'>0.04964 ROC</span></div>
                      </div>
                    </div>
                  </div>


                </div>
                <div className="card-footer">
                  <Link className="btn btn-xs btn-block btn-soft-primary" to="/txs">View all transactions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ >
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
