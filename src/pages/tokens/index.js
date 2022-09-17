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
          <div id="ContentPlaceHolder1_divTokensTitle" className="py-3">
            <div className="mb-1 mb-md-0">
              <h1 id="ContentPlaceHolder1_h1Tag" className="h4 d-flex align-items-center mb-0">Token Tracker<a className="u-label u-label--xs u-label--secondary rounded color-strong ml-2" href='https://docs.binance.org/smart-chain/developer/BEP20.html' target="_blank" rel="nofollow" data-toggle="tooltip" title="External link to BEP-20 Information">BEP-20</a></h1>
            </div>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div id="ContentPlaceHolder1_searchBarDiv" className="card-header d-md-flex justify-content-between align-items-center">
              <div className="mb-1 mb-md-0">
                <h2 className="card-header-title">BEP-20 Tokens By MarketCapitalization</h2>
              </div>
              <div className="d-flex ml-auto">
                <div className="position-relative order-1 order-md-2">
                  <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration="300"
                    data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="Search for Token Name or Address">
                    <i className="fa fa-search btn-icon__inner"></i>
                  </a>
                  <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{ width: "310px" }}>
                    <form action="/tokens" method="get" autocomplete="off" spellcheck="false" className="js-focus-state input-group input-group-sm w-100">
                      <input id="searchtoken" name="q" type="search" value="" className="form-control" placeholder="Search for Token Name or Address" onkeyup="handleTokenSearch(this);" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" data-toggle="tooltip">Find</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="transfers" role="tabpanel" aria-labelledby="tokens-tab">
                  <div id="ContentPlaceHolder1_divpagingpanel" className="d-md-flex justify-content-between align-items-center mb-4">
                    <p className="mb-2 mb-lg-0">
                      <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse" style={{ display: "none", marginTop: "4px" }}>&nbsp;</i> Showing 449 Token Contracts (From a total of 2,695,331 Token Contracts)
                    </p>
                    <nav className="mb-4 mb-md-0" aria-label="page navigation">
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">First</span></li>
                        <li className="page-item disabled"><span className="page-link"><i
                          className="fa fa-chevron-left small"></i></span><span className="sr-only">Previous</span></li>
                        <li className="page-item disabled"><span className="page-link text-nowrap">Page
                          <strong className="font-weight-medium">1</strong> of <strong
                            className="font-weight-medium">9</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="tokens?p=2" aria-label="Next"><span
                          aria-hidden="True"><i
                            className="fa fa-chevron-right small"></i></span> <span
                              className="sr-only">Next</span></a></li>
                        <li className="page-item"><a className="page-link" href="tokens?p=9"><span
                          aria-hidden="True">Last</span> <span
                            className="sr-only">Last</span></a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="stickyTableHead" id="divSTContainer">
                    <div id="ContentPlaceHolder1_divresult" className="table-responsive mb-2 mb-md-0">
                      <table className="table table-text-normal table-hover" id="tblResult">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col" width="1" className="token-sticky-header">#</th>
                            <th scope="col" width="30" className="token-sticky-header">Token</th>
                            <th scope="col" width="5" className="text-nowrap"><a href='/tokens?sort=price_usd&order=desc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for descending sort'>Price</a>
                            </th>
                            <th scope="col" width="5" className="text-nowrap"><a href='/tokens?sort=percent_change_24h&order=desc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for descending sort'>Change
                              (%)</a></th>
                            <th scope="col" width="5" className="text-nowrap"><a href='/tokens?sort=24h_volume_usd&order=desc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for descending sort'>Volume
                              (24H)</a></th>
                            <th scope="col" width="5" className="text-nowrap"><strong><i
                              className='fa fa-angle-down'></i></strong>&nbsp;<a href='/tokens?sort=marketcap&order=asc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Sorted in descending order,&#013;Click for ascending sort'
                                style={{ textDecoration: "underline" }}>Circulating Market
                                Cap</a> <i className="far fa-question-circle text-muted" data-placement="right" data-boundary="viewport" data-toggle="tooltip" data-html="true" data-title="<p className='text-white text-left mb-0'>Calculated by multiplying the number of tokens in circulating supply across all chains with the current market price per token.</p>"
                                  data-original-title="" title=""></i></th>
                            <th scope="col" width="5" className="text-nowrap">On-Chain Market Cap <i className="far fa-question-circle text-muted" data-placement="right" data-boundary="viewport" data-toggle="tooltip" data-html="true" data-title="<p className='text-white text-left mb-0'>Calculated by multiplying the token's Total Supply on ROC with the current market price per token.</p>"
                              data-original-title="" title=""></i></th>
                            <th scope="col" width="5" className="text-nowrap"><a href='/tokens?sort=holders&order=desc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for descending sort'>Holders</a></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/ethereum_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8'>Binance-Peg
                                    Ethereum Token (ETH)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Ethereum is a global, open-source platform for decentralized applications. Eth is fueling transactions on the Chain. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1,506.26118896' data-original-title='' title=''>$1,506.2612</span>
                              <div className='small text-secondary'>0.074341&nbsp;BTC<span className='d-block'>5.350839&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -9.17%</span></td>
                            <td>$27,331,047,806.00</td>
                            <td>$183,956,877,925.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$2,116,296,970.49&nbsp;&nbsp;&nbsp;</td>
                            <td>1,354,852</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x55d398326f99059ff775485246999027b3197955'>Binance-Peg
                                    ROC-USD (ROC-USD)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>A pegged token by Binance which gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00' data-original-title='' title=''>$1.00</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003552&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.01%</span></td>
                            <td>$46,270,796,050.00</td>
                            <td>$67,565,242,513.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$4,979,997,922.00&nbsp;&nbsp;&nbsp;</td>
                            <td>5,135,803</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/centre-usdc_28.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'>Binance-Peg
                                    USD Coin (USDC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>USD Coin (known by its ticker USDC) is a stablecoin that is pegged to the U.S. dollar on a 1:1 basis.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00021742' data-original-title='' title=''>$1.0002</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003553&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.02%</span></td>
                            <td>$9,361,087,550.00</td>
                            <td>$52,229,827,354.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$1,179,256,337.35&nbsp;&nbsp;&nbsp;</td>
                            <td>554,473</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/binance_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'>Wrapped
                                    ROC (WROC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>As the native coin of Binance Chain, ROC has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$282.28058319' data-original-title='' title=''>$282.2806</span>
                              <div className='small text-secondary'>0.013932&nbsp;BTC<span className='d-block'>1.002773&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -4.75%</span></td>
                            <td>$1,229,945,949.00</td>
                            <td>$45,542,376,151.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$1,231,029,010.66&nbsp;&nbsp;&nbsp;</td>
                            <td>1,654,077</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/busd_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xe9e7cea3dedca5984780bafc599bd69add087d56'>Binance-Peg
                                    BUSD Token (BUSD)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>BUSD is a 1:1 USD-backed stablecoin issued by Paxos Trust Company, LLC in partnership with Binance. Paxos issues BUSD on the Ethereum blockchain while Binance offers a wrapped BUSD token
                                    (Binance-Peg) on ROC Chain. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                      data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00009719' data-original-title='' title=''>$1.0001</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003553&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.01%</span></td>
                            <td>$9,924,837,220.00</td>
                            <td>$19,296,683,915.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$4,851,470,610.64&nbsp;&nbsp;&nbsp;</td>
                            <td>3,789,264</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/xrp_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe'>Binance-Peg
                                    XRP Token (XRP)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger—an open-source, permissionless and decentralized blockchain technology that can settle transactions
                                    in 3-5 seconds. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip'
                                      data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.33627912' data-original-title='' title=''>$0.3363</span>
                              <div className='small text-secondary'>0.000017&nbsp;BTC<span className='d-block'>0.001195&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -3.77%</span></td>
                            <td>$1,866,766,396.00</td>
                            <td>$16,658,333,871.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$93,149,315.63&nbsp;&nbsp;&nbsp;</td>
                            <td>227,387</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/cardano_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47'>Binance-Peg
                                    Cardano Token (ADA)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.44075664' data-original-title='' title=''>$0.4408</span>
                              <div className='small text-secondary'>0.000022&nbsp;BTC<span className='d-block'>0.001566&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.44%</span></td>
                            <td>$1,259,358,517.00</td>
                            <td>$14,870,700,802.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$123,411,858.84&nbsp;&nbsp;&nbsp;</td>
                            <td>484,683</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/dogecoin_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xba2ae424d960c26247dd6c32edc70b295c744c43'>Binance-Peg
                                    Dogecoin Token (DOGE)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Dogecoin (DOGE) is based on the popular "doge" Internet meme and features a Shiba Inu on its logo. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency. that would have
                                    greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                      style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.0637933' data-original-title='' title=''>$0.0638</span>
                              <div className='small text-secondary'>0.000003&nbsp;BTC<span className='d-block'>0.000227&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.09%</span></td>
                            <td>$660,266,397.00</td>
                            <td>$8,463,505,916.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$89,310,620.56&nbsp;&nbsp;&nbsp;</td>
                            <td>715,225</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/polkadot_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x7083609fce4d1d8dc0c979aab8c869ea2c873402'>Binance-Peg
                                    Polkadot Token (DOT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Polkadot is a blockchain project that aims to connect blockchains, to enable the transfer of value and logic across chains. DOT is the native coin of the network. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$7.02569343' data-original-title='' title=''>$7.0257</span>
                              <div className='small text-secondary'>0.000347&nbsp;BTC<span className='d-block'>0.024958&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.55%</span></td>
                            <td>$444,661,748.00</td>
                            <td>$7,804,413,082.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$112,411,094.86&nbsp;&nbsp;&nbsp;</td>
                            <td>180,722</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/dai_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'>Binance-Peg
                                    Dai Token (DAI)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Dai is a stable cryptocurrency supported by Maker (MKR). To ensure price stability, Dai minimizes the price volatility against the US dollar, through an incentive structure for its participants.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00050654' data-original-title='' title=''>$1.0005</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003554&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.07%</span></td>
                            <td>$618,430,855.00</td>
                            <td>$6,947,096,012.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$162,082,059.32&nbsp;&nbsp;&nbsp;</td>
                            <td>115,718</td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/shibatoken_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x2859e4544c4bb03966803b044a93563bd2d0dd4d'>Binance-Peg
                                    SHIBA INU Token (SHIB)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>SHIBA INU is an experiment in decentralized spontaneous community building.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                    data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.00001247' data-original-title='' title=''>$0.00</span>
                              <div className='small text-secondary'>0.000000&nbsp;BTC<span className='d-block'>0.000000&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.66%</span></td>
                            <td>$791,953,762.00</td>
                            <td>$6,849,153,028.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$89,191,245.00&nbsp;&nbsp;&nbsp;</td>
                            <td>866,383</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/avax_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x1ce0c2827e2ef14d5c4f29a091d735a204794041'>Binance-Peg
                                    Avalanche Token (AVAX)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Avalanche is an umbrella platform for launching decentralized finance (DeFi) applications, financial assets, trading and other services.</p><span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block'
                                    data-toggle='tooltip' title='' data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$20.72833324' data-original-title='' title=''>$20.7283</span>
                              <div className='small text-secondary'>0.001023&nbsp;BTC<span className='d-block'>0.073635&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.04%</span></td>
                            <td>$575,773,770.00</td>
                            <td>$5,908,333,915.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$41,456,666.47&nbsp;&nbsp;&nbsp;</td>
                            <td>87,279</td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/matic_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd'>Matic
                                    Token (MATIC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Matic Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure
                                    development. </p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.781466' data-original-title='' title=''>$0.7815</span>
                              <div className='small text-secondary'>0.000039&nbsp;BTC<span className='d-block'>0.002776&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -3.13%</span></td>
                            <td>$596,317,016.00</td>
                            <td>$5,813,723,395.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$78,146,600.00&nbsp;&nbsp;&nbsp;</td>
                            <td>267,939</td>
                          </tr>
                          <tr>
                            <td>14</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/ethclassic_32.png?v=1' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x3d6545b08693dae087e957cb1180ee38b9e3c25e'>Binance-Peg
                                    Ethereum Classic (ETC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Ethereum Classic (ETC) is a hard fork of Ethereum (ETH) that launched in July 2016. Its main function is as a smart contract network, with the ability to host and support decentralized applications
                                    (DApps). Its native token is ETC.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                      data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$34.26689691' data-original-title='' title=''>$34.2669</span>
                              <div className='small text-secondary'>0.001691&nbsp;BTC<span className='d-block'>0.121730&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.71%</span></td>
                            <td>$1,673,462,703.00</td>
                            <td>$4,679,150,285.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$27,413,517.53&nbsp;&nbsp;&nbsp;</td>
                            <td>23,039</td>
                          </tr>
                          <tr>
                            <td>15</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/uniswap_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1'>Binance-Peg
                                    Uniswap (UNI)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Uniswap is an automated liquidity protocol powered by a constant product formula and implemented in a system of non-upgradeable smart contracts on the Ethereum blockchain. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$6.15111737' data-original-title='' title=''>$6.1511</span>
                              <div className='small text-secondary'>0.000304&nbsp;BTC<span className='d-block'>0.021851&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -9.63%</span></td>
                            <td>$202,557,288.00</td>
                            <td>$4,586,155,091.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$27,680,028.18&nbsp;&nbsp;&nbsp;</td>
                            <td>55,333</td>
                          </tr>
                          <tr>
                            <td>16</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/litecoin_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x4338665cbb7b2485a8855a139b75d5e34ab0db94'>Binance-Peg
                                    Litecoin Token (LTC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. Litecoin is an open source, global payment network that is fully decentralized
                                    without any central authorities.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                      data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$52.77349171' data-original-title='' title=''>$52.7735</span>
                              <div className='small text-secondary'>0.002605&nbsp;BTC<span className='d-block'>0.187472&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.14%</span></td>
                            <td>$579,150,938.00</td>
                            <td>$3,748,730,352.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$38,260,781.49&nbsp;&nbsp;&nbsp;</td>
                            <td>56,749</td>
                          </tr>
                          <tr>
                            <td>17</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/chainlink_32.png?v=2' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'>Binance-Peg
                                    ChainLink Token (LINK)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$6.59246612' data-original-title='' title=''>$6.5925</span>
                              <div className='small text-secondary'>0.000325&nbsp;BTC<span className='d-block'>0.023419&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.48%</span></td>
                            <td>$469,636,544.00</td>
                            <td>$3,240,856,149.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$56,695,208.62&nbsp;&nbsp;&nbsp;</td>
                            <td>115,339</td>
                          </tr>
                          <tr>
                            <td>18</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/cosmos_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x0eb3a705fc54725037cc9e008bdede697f62f335'>Binance-Peg
                                    Cosmos Token (ATOM)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$10.96088185' data-original-title='' title=''>$10.9609</span>
                              <div className='small text-secondary'>0.000541&nbsp;BTC<span className='d-block'>0.038937&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -12.18%</span></td>
                            <td>$600,306,920.00</td>
                            <td>$3,138,870,992.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$20,825,675.52&nbsp;&nbsp;&nbsp;</td>
                            <td>40,102</td>
                          </tr>
                          <tr>
                            <td>19</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/near_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x1fa4a73a3f0133f0025378af00236f3abdee5d63'>Binance-Peg
                                    NEAR Protocol (NEAR)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>NEAR Protocol is a decentralized application platform designed to make apps usable on the web. The network runs on a Proof-of-Stake (PoS) consensus mechanism called Nightshade, which aims
                                    to offer scalability and stable fees.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                      data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$3.97056613' data-original-title='' title=''>$3.9706</span>
                              <div className='small text-secondary'>0.000196&nbsp;BTC<span className='d-block'>0.014105&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.16%</span></td>
                            <td>$453,358,907.00</td>
                            <td>$3,060,928,435.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$23,823,396.77&nbsp;&nbsp;&nbsp;</td>
                            <td>27,483</td>
                          </tr>
                          <tr>
                            <td>20</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/bittorrent_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x8595f9da7b868b1822194faed312235e43007b49'>Binance-Peg
                                    BitTorrent Token (BTT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>BitTorrent is a popular peer-to-peer (P2P) file sharing and torrent platform.</p><span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block' data-toggle='tooltip'
                                    title='' data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.00269639' data-original-title='' title=''>$0.0027</span>
                              <div className='small text-secondary'>0.000000&nbsp;BTC<span className='d-block'>0.000010&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 1.38%</span></td>
                            <td>$1,048,627.00</td>
                            <td>$2,517,192,710.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$146,656,652.10&nbsp;&nbsp;&nbsp;</td>
                            <td>79,163</td>
                          </tr>
                          <tr>
                            <td>21</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/bitcoincash_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf'>Binance-Peg
                                    Bitcoin Cash Token (BCH)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Bitcoin ABC is an electronic cash platform that allows peer-to-peer online cash payments. It is a fork (a copy in a way) of Bitcoin (BTC).</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$117.51709853' data-original-title='' title=''>$117.5171</span>
                              <div className='small text-secondary'>0.005800&nbsp;BTC<span className='d-block'>0.417467&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -7.30%</span></td>
                            <td>$354,286,476.00</td>
                            <td>$2,251,233,191.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$18,802,735.76&nbsp;&nbsp;&nbsp;</td>
                            <td>14,915</td>
                          </tr>
                          <tr>
                            <td>22</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/btcb_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'>Binance-Peg
                                    BTCB Token (BTCB)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Bitcoin BEP2 (BTCB) is a token on Binance Chain issued by Binance, where the price is pegged to BTC at a rate of 1 BTCB = 1 BTC.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$20,266.96518842' data-original-title='' title=''>$20,266.9652</span>
                              <div className='small text-secondary'>1.000269&nbsp;BTC<span className='d-block'>71.996324&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.34%</span></td>
                            <td>$10,982,209.00</td>
                            <td>$2,132,380,809.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$2,280,053,850.66&nbsp;&nbsp;&nbsp;</td>
                            <td>475,448</td>
                          </tr>
                          <tr>
                            <td>23</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/onflow_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2'>Binance-Peg
                                    FLOW Token (FLOW)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Flow is a layer-1 blockchain that aims to be fast, decentralized, and developer-oriented. It is designed as the foundation to power games, apps, and the associated digital assets.</p>
                                  <span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block' data-toggle='tooltip' title='' data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg </span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.92' data-original-title='' title=''>$1.92</span>
                              <div className='small text-secondary'>0.000095&nbsp;BTC<span className='d-block'>0.006821&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.16%</span></td>
                            <td>$77,228,439.00</td>
                            <td>$1,988,756,337.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$6,336,192.00&nbsp;&nbsp;&nbsp;</td>
                            <td>2,827</td>
                          </tr>
                          <tr>
                            <td>24</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/chain-ROC_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x7324c7c0d95cebc73eea7e85cbaac0dbdf88a05b'>Chain
                                    (XCN)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Cloud.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.084801' data-original-title='' title=''>$0.0848</span>
                              <div className='small text-secondary'>0.000004&nbsp;BTC<span className='d-block'>0.000301&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.83%</span></td>
                            <td>$32,031,915.00</td>
                            <td>$1,816,478,748.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$36,660,388.57&nbsp;&nbsp;&nbsp;</td>
                            <td>5,784</td>
                          </tr>
                          <tr>
                            <td>25</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/eos_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6'>Binance-Peg
                                    EOS Token (EOS)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>EOS is a cryptocurrency token and blockchain that operates as a smart contract platform for the deployment of decentralized applications and decentralized autonomous corporations.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.52130342' data-original-title='' title=''>$1.5213</span>
                              <div className='small text-secondary'>0.000075&nbsp;BTC<span className='d-block'>0.005404&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.44%</span></td>
                            <td>$705,252,689.00</td>
                            <td>$1,519,770,891.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$20,750,578.59&nbsp;&nbsp;&nbsp;</td>
                            <td>33,330</td>
                          </tr>
                          <tr>
                            <td>26</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/frax_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'>Frax
                                    (FRAX)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is
                                    the value accrual and governance token of the entire Frax ecosystem.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00' data-original-title='' title=''>$1.00</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003552&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.07%</span></td>
                            <td>$7,012,843.00</td>
                            <td>$1,449,144,584.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,558,135.00&nbsp;&nbsp;&nbsp;</td>
                            <td>676</td>
                          </tr>
                          <tr>
                            <td>27</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/tezos_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x16939ef78684453bfdfb47825f8a5f714f12623a'>Binance-Peg
                                    Tezos Token (XTZ)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Tezos is a smart contract platform that uses blockchain voting to be self-governing by its token holders. Also, the platform aims to boost the security of smart contracts. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.48592321' data-original-title='' title=''>$1.4859</span>
                              <div className='small text-secondary'>0.000073&nbsp;BTC<span className='d-block'>0.005279&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.99%</span></td>
                            <td>$59,665,381.00</td>
                            <td>$1,347,397,032.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$7,281,023.72&nbsp;&nbsp;&nbsp;</td>
                            <td>17,569</td>
                          </tr>
                          <tr>
                            <td>28</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/axieinfinity_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'>Binance-Peg
                                    Axie Infinity Shard Token (AXS)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and
                                    build a land-based kingdom for their pets (known as Axies).</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                      data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$13.56' data-original-title='' title=''>$13.56</span>
                              <div className='small text-secondary'>0.000669&nbsp;BTC<span className='d-block'>0.048171&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.06%</span></td>
                            <td>$116,385,974.00</td>
                            <td>$1,217,750,518.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$16,407,600.00&nbsp;&nbsp;&nbsp;</td>
                            <td>77,427</td>
                          </tr>
                          <tr>
                            <td>29</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/elrond_32.png?v=2' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe'>Binance-Peg
                                    Elrond Token (EGLD)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Elrond is a blockchain protocol that seeks to offer extremely fast transaction speeds by using sharding. The project describes itself as a technology ecosystem for the new internet, which
                                    includes fintech, decentralized finance and the Internet of Things.
                                  </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$52.36244059' data-original-title='' title=''>$52.3624</span>
                              <div className='small text-secondary'>0.002584&nbsp;BTC<span className='d-block'>0.186012&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -7.65%</span></td>
                            <td>$88,126,971.00</td>
                            <td>$1,207,328,447.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$31,417,464.35&nbsp;&nbsp;&nbsp;</td>
                            <td>29,415</td>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/trueusd_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x14016e85a25aeb13065688cafb43044c2ef86784'>Binance-Peg
                                    TrueUSD Token (TUSD)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>TUSD is a regulated, exchange-independent stablecoin backed 1-for-1 with US Dollars.</p><span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block' data-toggle='tooltip'
                                    title='' data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.001' data-original-title='' title=''>$1.001</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003556&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.13%</span></td>
                            <td>$392,747,882.00</td>
                            <td>$1,097,159,624.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$113,113,000.00&nbsp;&nbsp;&nbsp;</td>
                            <td>12,808</td>
                          </tr>
                          <tr>
                            <td>31</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/paxdollar_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f'>Binance-Peg
                                    Pax Dollar Token (USDP)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Pax Dollar (USDP) is a digital dollar redeemable one-to-one for US dollars and regulated by the New York Department of Financial Services.</p><span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block'
                                    data-toggle='tooltip' title='' data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.00' data-original-title='' title=''>$1.00</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003552&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.09%</span></td>
                            <td>$3,041,033.00</td>
                            <td>$959,143,115.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$2,428,064.00&nbsp;&nbsp;&nbsp;</td>
                            <td>365</td>
                          </tr>
                          <tr>
                            <td>32</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/zcash_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb'>Binance-Peg
                                    Zcash Token (ZEC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Zcash (ZEC) is a decentralized and open-source privacy-focused cryptocurrency that enables selective transparency of transactions. Zcash transactions can either be transparent or shielded
                                    through a zero-knowledge proof called zk-SNARKs.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$61.53096215' data-original-title='' title=''>$61.531</span>
                              <div className='small text-secondary'>0.003037&nbsp;BTC<span className='d-block'>0.218582&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.81%</span></td>
                            <td>$98,218,202.00</td>
                            <td>$931,036,910.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$6,153,096.21&nbsp;&nbsp;&nbsp;</td>
                            <td>5,668</td>
                          </tr>
                          <tr>
                            <td>33</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/paxos_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094'>Binance-Peg
                                    Paxos Standard (PAX)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Paxos Standard (PAX) is a stablecoin that allows users to exchange US dollars for Paxos Standard Tokens to 'transact at the speed of the internet'.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.99989775' data-original-title='' title=''>$0.9999</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003552&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.01%</span></td>
                            <td>$127,525,140.00</td>
                            <td>$918,323,105.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,571,571.77&nbsp;&nbsp;&nbsp;</td>
                            <td>993</td>
                          </tr>
                          <tr>
                            <td>34</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/bittorrent_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x352Cb5E19b12FC216548a2677bD0fce83BaE434B'>BitTorrent
                                    (BTT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>BTT is the official token of BitTorrent Chain, mapped from BitTorrent Chain at a ratio of 1:1. BitTorrent Chain is a brand-new heterogeneous cross-chain interoperability protocol, which leverages
                                    sidechains for the scaling of smart contracts.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.00000087' data-original-title='' title=''>$0.00</span>
                              <div className='small text-secondary'>0.000000&nbsp;BTC<span className='d-block'>0.000000&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -3.32%</span></td>
                            <td>$28,648,376.00</td>
                            <td>$819,263,125.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$32,092,078.57&nbsp;&nbsp;&nbsp;</td>
                            <td>24,435</td>
                          </tr>
                          <tr>
                            <td>35</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/miota_32.png?=v1' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xd944f1d1e9d5f9bb90b62f9d45e447d989580782'>MIOTAC
                                    (IOTA)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>IOTA is a distributed ledger with its proprietary technology known as Tangle, a system of nodes that confirm transactions. It aims to offer greater speeds than conventional blockchains and
                                    an ideal footprint for the ever-expanding Internet of Things ecosystem.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.28137' data-original-title='' title=''>$0.2814</span>
                              <div className='small text-secondary'>0.000014&nbsp;BTC<span className='d-block'>0.001000&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.57%</span></td>
                            <td>$30,466,278.00</td>
                            <td>$780,038,417.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$7,289,187.26&nbsp;&nbsp;&nbsp;</td>
                            <td>17,807</td>
                          </tr>
                          <tr>
                            <td>36</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/makerdao_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x5f0da599bb2cccfcf6fdfd7d81743b6020864350'>Binance-Peg
                                    Maker (MKR)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$772.5239199' data-original-title='' title=''>$772.5239</span>
                              <div className='small text-secondary'>0.038128&nbsp;BTC<span className='d-block'>2.744312&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.60%</span></td>
                            <td>$232,666,583.00</td>
                            <td>$755,243,361.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,862,619.60&nbsp;&nbsp;&nbsp;</td>
                            <td>3,521</td>
                          </tr>
                          <tr>
                            <td>37</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/usdd-tron_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xd17479997F34dd9156Deef8F95A52D81D265be9c'>Decentralized
                                    USD (USDD)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>USDD is a fully decentralized over-collateralization stablecoin. </p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1.001' data-original-title='' title=''>$1.001</span>
                              <div className='small text-secondary'>0.000049&nbsp;BTC<span className='d-block'>0.003556&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 0.10%</span></td>
                            <td>$22,829,817.00</td>
                            <td>$744,306,505.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$110,691,910.33&nbsp;&nbsp;&nbsp;</td>
                            <td>1,117</td>
                          </tr>
                          <tr>
                            <td>38</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/ecash_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x0ef2e7602add1733bfdb17ac3094d0421b502ca3'>Binance-Peg
                                    eCash Token (XEC)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>eCash is the natural continuation of the Bitcoin Cash project. eCash follows through on key promises such as the innovative Avalanche consensus layer while also introducing concepts such
                                    as staking, fork-free network upgrades, and subchains.</p><span className='u-label u-label--xs u-label--badge-in u-label--secondary d-none d-md-inline-block' data-toggle='tooltip' title=''
                                      data-original-title='Binance Wrapped and Pegged Token Type'>Binance
                                    Peg</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.0000375' data-original-title='' title=''>$0.00</span>
                              <div className='small text-secondary'>0.000000&nbsp;BTC<span className='d-block'>0.000000&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -5.64%</span></td>
                            <td>$7,480,662.00</td>
                            <td>$717,460,796.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$1,382,746.56&nbsp;&nbsp;&nbsp;</td>
                            <td>6,165</td>
                          </tr>
                          <tr>
                            <td>39</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/ftm_32.png?=v2' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xad29abb318791d579433d831ed122afeaf29dcfe'>Fantom
                                    (FTM)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.276819' data-original-title='' title=''>$0.2768</span>
                              <div className='small text-secondary'>0.000014&nbsp;BTC<span className='d-block'>0.000983&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -6.89%</span></td>
                            <td>$286,875,073.00</td>
                            <td>$703,820,141.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$9,965,484.00&nbsp;&nbsp;&nbsp;</td>
                            <td>75,931</td>
                          </tr>
                          <tr>
                            <td>40</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/snx_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x9ac983826058b8a9c7aa1c9171441191232e8404'>Binance-Peg
                                    Synthetix Network Token (SNX)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets. </p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$2.9308054' data-original-title='' title=''>$2.9308</span>
                              <div className='small text-secondary'>0.000145&nbsp;BTC<span className='d-block'>0.010411&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-success text-nowrap'><i
                              className='fa  fa-caret-up'></i> 5.79%</span></td>
                            <td>$78,134,062.00</td>
                            <td>$684,978,265.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,223,885.94&nbsp;&nbsp;&nbsp;</td>
                            <td>8,538</td>
                          </tr>
                          <tr>
                            <td>41</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/paxosgold_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x7950865a9140cb519342433146ed5b40c6f210f7'>Binance-Peg
                                    PAX Gold (PAXG)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>PAX Gold (PAXG) tokens each represent one fine troy ounce of an LBMA-certified, London Good Delivery physical gold bar, secured in Brink’s vaults.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$1,731.75500401' data-original-title='' title=''>$1,731.755</span>
                              <div className='small text-secondary'>0.085470&nbsp;BTC<span className='d-block'>6.151883&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -0.87%</span></td>
                            <td>$20,151,119.00</td>
                            <td>$588,951,908.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$519,526.50&nbsp;&nbsp;&nbsp;</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>42</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/pancake_32.png?=v1' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'>PancakeSwap
                                    Token (Cake)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>
                                    PancakeSwap is a yield farming project whereby users can get FLIP (LP token) for staking and get CAKE token as reward. CAKE holders can swap CAKE for SYRUP for additional incentivized staking.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$3.79045008' data-original-title='' title=''>$3.7905</span>
                              <div className='small text-secondary'>0.000187&nbsp;BTC<span className='d-block'>0.013465&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -4.00%</span></td>
                            <td>$45,833,419.00</td>
                            <td>$546,505,692.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,345,259,402.23&nbsp;&nbsp;&nbsp;</td>
                            <td>1,246,724</td>
                          </tr>
                          <tr>
                            <td>43</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/zilliqa_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xb86abcb37c3a4b64f74f59301aff131a1becc787'>Zilliqa
                                    (ZIL)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Zilliqa (ZIL) is a public blockchain built on a sharded architecture. It has solved blockchain scalability and speed by implementing sharding.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block'
                                    style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.03693292' data-original-title='' title=''>$0.0369</span>
                              <div className='small text-secondary'>0.000002&nbsp;BTC<span className='d-block'>0.000131&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -4.81%</span></td>
                            <td>$172,591,620.00</td>
                            <td>$545,174,035.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$3,477,403.87&nbsp;&nbsp;&nbsp;</td>
                            <td>34,052</td>
                          </tr>
                          <tr>
                            <td>44</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/bat_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x101d82428437127bf1608f699cd651e6abf9766e'>Binance-Peg
                                    Basic Attention Token (BAT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>The Basic Attention Token is the new token for the digital advertising industry.</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }}
                                    data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.34023688' data-original-title='' title=''>$0.3402</span>
                              <div className='small text-secondary'>0.000017&nbsp;BTC<span className='d-block'>0.001209&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -7.20%</span></td>
                            <td>$71,228,982.00</td>
                            <td>$509,791,990.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$8,505,921.92&nbsp;&nbsp;&nbsp;</td>
                            <td>21,594</td>
                          </tr>
                          <tr>
                            <td>45</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/stepngmt_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1'>Green
                                    Metaverse Token (GMT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>STEPN is a “Web3 lifestyle app” with GameFi elements on the Solana blockchain. It combines aspects of a play-to-earn game with a fitness app to create a new category coined “move-to-earn.”
                                    Users buy NFT sneakers, which they can use to earn in-game currency while walking, running, or jogging.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.698235' data-original-title='' title=''>$0.6982</span>
                              <div className='small text-secondary'>0.000034&nbsp;BTC<span className='d-block'>0.002480&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -9.75%</span></td>
                            <td>$196,947,715.00</td>
                            <td>$418,990,022.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$29,823,269.57&nbsp;&nbsp;&nbsp;</td>
                            <td>93,728</td>
                          </tr>
                          <tr>
                            <td>46</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/trust_32.png?v=1' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x4b0f1812e5df2a09796481ff14017e6005508003'>Trust
                                    Wallet (TWT)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Utility token to increase adoption of cryptocurrency.</p>
                                  <span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip' data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.95277782' data-original-title='' title=''>$0.9528</span>
                              <div className='small text-secondary'>0.000047&nbsp;BTC<span className='d-block'>0.003385&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -3.19%</span></td>
                            <td>$16,731,775.00</td>
                            <td>$396,974,784.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$952,777,822.10&nbsp;&nbsp;&nbsp;</td>
                            <td>280,987</td>
                          </tr>
                          <tr>
                            <td>47</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/fraxfinanceshare_32_2.png?v=3' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee'>Frax
                                    Share (FXS)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide highly scalable, decentralized, algorithmic
                                    money in place of fixed-supply assets like BTC.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$5.87' data-original-title='' title=''>$5.87</span>
                              <div className='small text-secondary'>0.000290&nbsp;BTC<span className='d-block'>0.020853&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -4.71%</span></td>
                            <td>$5,725,344.00</td>
                            <td>$389,069,039.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$654,540.22&nbsp;&nbsp;&nbsp;</td>
                            <td>672</td>
                          </tr>
                          <tr>
                            <td>48</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/1inch_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x111111111117dc0aa78b770fa6a738034120c302'>1INCH
                                    Token (1INCH)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>1inch is a decentralized exchange aggregator that sources liquidity from various exchanges and is capable of splitting a single trade transaction across multiple DEXs. Smart contract technology
                                    empowers this aggregator enabling users to optimize and customize their trades.</p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.664865' data-original-title='' title=''>$0.6649</span>
                              <div className='small text-secondary'>0.000033&nbsp;BTC<span className='d-block'>0.002362&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -8.72%</span></td>
                            <td>$37,607,020.00</td>
                            <td>$385,584,964.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$16,621,625.00&nbsp;&nbsp;&nbsp;</td>
                            <td>94,771</td>
                          </tr>
                          <tr>
                            <td>49</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/galagames_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0x7ddee176f665cd201f93eede625770e2fd911990'>pTokens
                                    GALA (GALA)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Gala Games is dedicated to decentralizing the multi-billion dollar gaming industry by giving players access to their in-game items. Coming from the Co-founder of Zynga and some of the creative
                                    minds behind Farmville 2, Gala Games aims to revolutionize gaming. </p>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.05073' data-original-title='' title=''>$0.0507</span>
                              <div className='small text-secondary'>0.000003&nbsp;BTC<span className='d-block'>0.000180&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -4.52%</span></td>
                            <td>$214,852,591.00</td>
                            <td>$382,446,773.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$24,991,493.22&nbsp;&nbsp;&nbsp;</td>
                            <td>53,251</td>
                          </tr>
                          <tr>
                            <td>50</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/ankr_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'><a className='text-primary' href='/token/0xf307910a4c7bbc79691fd374889b36d8531b08e3'>Ankr
                                    (ANKR)</a></h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Web3 Infrastructure for All</p><span className='u-label u-label--xs u-label--badge-out u-label--secondary mt-1 d-none d-md-inline-block' style={{ letterSpacing: "0px !important", zIndex: "0" }} data-toggle='tooltip'
                                    data-original-title='Binance Cross-Chain Token Type'>Cross-Chain</span>
                                </div>
                              </div>
                            </td>
                            <td className='text-nowrap'><span data-toggle='tooltip' data-html='true' data-title='$0.03661819' data-original-title='' title=''>$0.0366</span>
                              <div className='small text-secondary'>0.000002&nbsp;BTC<span className='d-block'>0.000130&nbsp;ROC</span></div>
                            </td>
                            <td><span className='text-danger text-nowrap'><i
                              className='fa fa-caret-down'></i> -9.36%</span></td>
                            <td>$77,641,422.00</td>
                            <td>$353,837,892.00&nbsp;&nbsp;&nbsp;</td>
                            <td>$366,181,906.00&nbsp;&nbsp;&nbsp;</td>
                            <td>30,980</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <form method="post" action="./tokens" id="ctl00">
                    <div className="aspNetHidden">
                      <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                      <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                      <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                      <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="2iaeAkfQE4Kq70aB3pu6FHGJP3AIVBZi8Alp1W1Jl5EJPtyBXgyjNyUazu5RAKusQlteGAOeAmh3vXBXKeRpzoW/dsWUbjddW3I7SRSdxGk=" />
                    </div>

                    <div className="aspNetHidden">
                      <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="3C86B011" />
                      <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="7nW6q2XH41NAOn9Rp6QF90h4TqpSLHreVq1Kwa2EvEhTACFWTm3BfvYMuahygc5nGh4RvoFqml63cgUU5sV5dGlmnul6j0N83l6O849uhjt1iv1ZTdqGiGyor/sRo7Da+Yc8qPcpGD6UXmgGTYyn7Sm0scs8h20cJv8EicvX+B7BDgCgCM3cfEOT5OjR4xD5Eh3Bqop3DEXe04tOlhmpQg=="
                      />
                    </div>
                    <div id="ContentPlaceHolder1_divPagination" className="d-md-flex justify-content-between my-3">
                      <div className="d-flex align-items-center text-secondary mb-2 mb-md-0"> Show <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlRecordsPerPage"
                        className="custom-select custom-select-xs mx-2">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option selected="selected" value="50">50</option>
                        <option value="100">100</option>
                      </select> Records </div>
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">First</span></li>
                        <li className="page-item disabled"><span className="page-link"><i
                          className="fa fa-chevron-left small"></i></span><span className="sr-only">Previous</span></li>
                        <li className="page-item disabled"><span className="page-link text-nowrap">Page
                          <strong className="font-weight-medium">1</strong> of <strong
                            className="font-weight-medium">9</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="tokens?p=2" aria-label="Next"><span
                          aria-hidden="True"><i
                            className="fa fa-chevron-right small"></i></span> <span
                              className="sr-only">Next</span></a></li>
                        <li className="page-item"><a className="page-link" href="tokens?p=9"><span
                          aria-hidden="True">Last</span> <span
                            className="sr-only">Last</span></a></li>
                      </ul>
                    </div>
                  </form>
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
