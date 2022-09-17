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
          <h1 className="h4 mb-0">Top Statistics</h1>
        </div>
        <div id="overlayMain"></div>
        <div className="container space-bottom-2">
          <form method="post" action="./topstat" id="ctl00" className="js-validate">
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="703SFKZjPreaY33gbAPVJUrUdC32w0ZkZKt1EAB6S9CzdWXOoHeNW1qJSGnU3NYoJVdqXFvJAsqlFopZFZFnpgvUQo4Ti3YrbVQsBXXX8PY=" />
            </div>
            <div className="aspNetHidden">
              <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="19386328" />
            </div>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center p-0">
                <ul className="nav nav-custom nav-borderless nav_tabs1" id="nav_tabs" role="tablist">
                  <li id="ContentPlaceHolder1_li_Overview" className="nav-item"><a className="nav-link active" href="#Overview" data-toggle="tab" onclick="javascript:activaTab('Overview');">Overview</a></li>
                  <li id="ContentPlaceHolder1_li_Transaction" className="nav-item"><a className="nav-link" href="#Transaction" data-toggle="tab" onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('Transaction');">Transactions</a>
                  </li>
                  <li id="ContentPlaceHolder1_li_Token" className="nav-item"><a className="nav-link" href="#Token" data-toggle="tab" onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('Token');">Tokens</a>
                  </li>
                  <li id="ContentPlaceHolder1_li_Network" className="nav-item"><a className="nav-link" href="#Network" data-toggle="tab" onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('Network');">Network</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="Overview" role="tabpanel">
                    <div className="d-md-flex justify-content-between align-items-center">
                      <ul className="nav nav-pills nav-pills-secondary mb-3" id="nav_subtab_0" role="tablist">
                        <li id="ContentPlaceHolder1_li_Overview_Hour24" className="nav-item"><a className="nav-link active" href="#OverviewHour24" data-toggle="tab" onclick="javascript:activaTab('OverviewHour24');"> 1 Day</a></li>
                        <li id="ContentPlaceHolder1_li_Overview_Day3" className="nav-item"><a className="nav-link" href="#OverviewDay3" data-toggle="tab" onclick="javascript:activaTab('OverviewDay3');"> 3 Days</a></li>
                        <li id="ContentPlaceHolder1_li_Overview_Day7" className="nav-item"><a className="nav-link" href="#OverviewDay7" data-toggle="tab" onclick="javascript:activaTab('OverviewDay7');"> 7 Days</a></li>
                      </ul>
                      <div>
                        <p className="text-secondary mb-3" id="daterange"></p>
                      </div>
                    </div>
                    <div className="tab-pane fade show active" id="OverviewHour24">
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Transactions <span className="hash-tag"><a href="#Transaction"
                                id="a_TransactionHour24"
                                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('TransactionHour24');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div1a_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Sender</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>89,900.22847728
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Receiver</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>270,278.983535079
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Sent</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>31,476</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Received</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'>915,620</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Tokens <span className="hash-tag"><a href="#Token"
                                id="a_TokenHour24"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenHour24');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div1b_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Sender</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>343,929</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Receiver</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>285,091</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Total Uniques</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>423,099</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>1,238,657</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Network <span className="hash-tag"><a href="#Network"
                                id="a_NetworkHour24"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkHour24');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div1c_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Gas Used</div>
                                <div className='text-right'>Gas Used</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x1458c80a9038ea56ba1f16d32a5628310fbf1061'><a
                                  href='/address/0x1458c80a9038ea56ba1f16d32a5628310fbf1061'>0x1458c80a9038ea56ba1f16d32a5628310fbf1061</a></span>
                                </div>
                                <div className='text-secondary text-right'>3,902,698,539</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>31,476</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Validators </div>
                            <div id="ContentPlaceHolder1_Div1d_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Blocks Validator</div>
                                <div className='text-right'>Blocks Validated</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0xe2d3a739effcd3a99387d015e260eefac72ebea1'><a
                                  href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                                  MathWallet</a></span></div>
                                <div className='text-secondary text-right'>2,738</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="OverviewDay3" style={{ display: "none" }}>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Transactions <span className="hash-tag"><a href="#Transaction"
                                id="a_TransactionDay3"
                                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('TransactionDay3');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div16a_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Sender</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>152,450.90711802
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Receiver</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>391,961.9313746
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Sent</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>46,047</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Received</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'>1,339,676</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Tokens <span className="hash-tag"><a href="#Token" id="a_TokenDay3"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenDay3');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div16b_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Sender</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>508,296</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Receiver</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>418,334</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Total Uniques</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>622,935</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>1,802,546</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Network <span className="hash-tag"><a href="#Network"
                                id="a_NetworkDay3"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkDay3');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div16c_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Gas Used</div>
                                <div className='text-right'>Gas Used</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x1458c80a9038ea56ba1f16d32a5628310fbf1061'><a
                                  href='/address/0x1458c80a9038ea56ba1f16d32a5628310fbf1061'>0x1458c80a9038ea56ba1f16d32a5628310fbf1061</a></span>
                                </div>
                                <div className='text-secondary text-right'>3,902,698,539</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>46,047</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Validators <span className="hash-tag"><a href="#Mining"
                                id="a_MiningDay3"
                                onclick="javascript:showLoader(window.minerFrame_loaded);activaTab('MiningDay3');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div16d_body" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Blocks Validator</div>
                                <div className='text-right'>Blocks Validated</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0xee226379db83cffc681495730c11fdde79ba4c0c'><a
                                  href='/address/0xee226379db83cffc681495730c11fdde79ba4c0c'>Validator:
                                  InfStones</a></span></div>
                                <div className='text-secondary text-right'>4,108</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="OverviewDay7" style={{ display: "none" }}>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Transactions <span className="hash-tag"><a href="#Transaction"
                                id="a_TransactionDay7"
                                onclick="javascript:showLoader(window.transactionFrame_loaded);activaTab('TransactionDay7');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div4" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Sender</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>394,859.6801867
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top ROC Receiver</div>
                                <div className='text-right'>Total ROC</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'><i className='fab fa-binance text-secondary mr-1'></i>858,992.50715678
                                </div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Sent</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>103,271</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count Received</div>
                                <div className='text-right'>Total Txn</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><i className='far fa-file-alt text-secondary mr-1' data-toggle='tooltip' title='Contract'></i><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x10ed43c718714eb63d5aa57b78b54704e256024e'><a
                                  href='/address/0x10ed43c718714eb63d5aa57b78b54704e256024e'>PancakeSwap:
                                  Router v2</a></span></div>
                                <div className='text-secondary text-right'>3,020,789</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Tokens <span className="hash-tag"><a href="#Token" id="a_TokenDay7"
                                onclick="javascript:showLoader(window.tokenFrame_loaded);activaTab('TokenDay7');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div6" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Sender</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>1,171,807</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Unique Receiver</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>975,854</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Total Uniques</div>
                                <div className='text-right'>Total</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>1,442,592</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>
                                  <a href='/address/0x55d398326f99059ff775485246999027b3197955' data-toggle='tooltip' title='0x55d398326f99059ff775485246999027b3197955'><img className='u-xs-avatar mr-2' src='/token/images/busdt_32.png' /> Binance-Peg ROC-USD (ROC-USD)</a>
                                </div>
                                <div className='text-secondary text-right'>4,197,367</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Network <span className="hash-tag"><a href="#Network"
                                id="a_NetworkDay7"
                                onclick="javascript:showLoader(window.networkFrame_loaded);activaTab('NetworkDay7');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div9" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Gas Used</div>
                                <div className='text-right'>Gas Used</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0xa670a7d38bae8458310b4e6bb11a0a33ca4860ea'><a
                                  href='/address/0xa670a7d38bae8458310b4e6bb11a0a33ca4860ea'>0xa670a7d38bae8458310b4e6bb11a0a33ca4860ea</a></span>
                                </div>
                                <div className='text-secondary text-right'>10,098,070,948</div>
                              </div>
                              <hr className='pb-1'></hr>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Txn Count</div>
                                <div className='text-right'>Txn Count</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0x8894e0a0c962cb723c1976a4421c95949be2d4e3'><a
                                  href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>Binance:
                                  Hot Wallet 6</a></span></div>
                                <div className='text-secondary text-right'>103,271</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="card h-100 w-100 shadow-none">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                              Validators <span className="hash-tag"><a href="#Mining"
                                id="a_MiningDay7"
                                onclick="javascript:showLoader(window.minerFrame_loaded);activaTab('MiningDay7');">View
                                Top 20</a></span>
                            </div>
                            <div id="ContentPlaceHolder1_Div11" className="card-body">
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'>Top Blocks Validator</div>
                                <div className='text-right'>Blocks Validated</div>
                              </div>
                              <div className='media align-items-center mb-1'>
                                <div className='media-body'><span className='hash-tag text-truncate' data-toggle='tooltip' title='0xe2d3a739effcd3a99387d015e260eefac72ebea1'><a
                                  href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                                  MathWallet</a></span></div>
                                <div className='text-secondary text-right'>9,593</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Transaction" role="tabpanel">
                    <div id="loadingTransactioniframe" style={{ position: "absolute", left: "50%", marginLeft: "-31px" }}>
                      <div id="overlay" className="py-3 text-center">
                        <img src="/images/main/loadingblock.svg" alt="Loading" />
                      </div>
                    </div>
                    <div style={{ overflow: "auto", webkitOverflowScrolling: "touch", visibility: "hidden" }}>
                      <iframe width="100%" id="TransactionIframe" src="" scrolling="yes" frameborder="0" style={{ height: "200px" }}></iframe>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Token" role="tabpanel">
                    <div id="loadingTokeniframe" style={{ position: "absolute", left: "50%", marginLeft: "-31px" }}>
                      <div id="overlayToken" className="py-3 text-center">
                        <img src="/images/main/loadingblock.svg" alt="Loading" />
                      </div>
                    </div>
                    <div style={{ overflow: "auto", webkitOverflowScrolling: "touch", visibility: "hidden" }}>
                      <iframe width="100%" id="TokenIframe" src="" scrolling="yes" frameborder="0" style={{ height: "200px" }}></iframe>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Network" role="tabpanel">
                    <div id="loadingNetworkiframe" style={{ position: "absolute", left: "50%", marginLeft: "-31px" }}>
                      <div id="overlayNetwork" className="py-3 text-center">
                        <img src="/images/main/loadingblock.svg" alt="Loading" />
                      </div>
                    </div>
                    <div style={{ overflow: "auto", webkitOverflowScrolling: "touch", visibility: "hidden" }}>
                      <iframe width="100%" id="NetworkIframe" src="" scrolling="yes" frameborder="0" style={{ height: "200px" }}></iframe>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Mining" role="tabpanel">
                    <div id="loadingMineriframe" style={{ position: "absolute", left: "50%", marginLeft: "-31px" }}>
                      <div id="overlayMiner" className="py-3 text-center">
                        <img src="/images/main/loadingblock.svg" alt="Loading" />
                      </div>
                    </div>
                    <div style={{ overflow: "auto", webkitOverflowScrolling: "touch", visibility: "hidden" }}>
                      <iframe width="100%" id="MinerIframe" src="" scrolling="yes" frameborder="0" style={{ height: "200px" }}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
