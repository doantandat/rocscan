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
          <div className="py-3">
            <h1 className="h4 mb-0">Label Word Cloud<span className="small text-secondary ml-1"></span></h1>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-body p-4">
              <div className="w-100 mx-auto">
                <div id="container"></div>
              </div>
              <hr className="hr-space-lg"></hr>
              <div className="mt-5 mb-4 pb-4">
                <form className="w-100 w-lg-50 mx-auto">
                  <div className="input-group">
                    <input type='text' id='myInput2' aria-describedby='inputSearch' className='form-control' onkeyup="searchLabels()" placeholder="Search Labels " />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <span className="fas fa-search"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="adult" aria-haspopup="True" aria-expanded="False"><span>Adult <span
                    className="badge badge-secondary ml-1">25</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Adult"><a className="py-1 px-3 d-block" href="/tokens/label/adult"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (25)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="advertising" aria-haspopup="True" aria-expanded="False"><span>Advertising <span
                    className="badge badge-secondary ml-1">8</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Advertising"><a className="py-1 px-3 d-block" href="/tokens/label/advertising"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (8)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="agriculture" aria-haspopup="True" aria-expanded="False"><span>Agriculture <span
                    className="badge badge-secondary ml-1">17</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Agriculture"><a className="py-1 px-3 d-block" href="/tokens/label/agriculture"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (17)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="airdrop-distributor" aria-haspopup="True" aria-expanded="False"><span>Airdrop / Distributor <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Airdrop / Distributor"><a className="py-1 px-3 d-block" href="/tokens/label/airdrop-distributor"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="algorithmic-stablecoin" aria-haspopup="True" aria-expanded="False"><span>Algorithmic Stablecoin <span
                    className="badge badge-secondary ml-1">12</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Algorithmic Stablecoin"><a className="py-1 px-3 d-block" href="/tokens/label/algorithmic-stablecoin"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (12)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="amm" aria-haspopup="True" aria-expanded="False"><span>AMM <span
                    className="badge badge-secondary ml-1">10</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="AMM"><a className="py-1 px-3 d-block" href="/tokens/label/amm"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (10)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="analytics" aria-haspopup="True" aria-expanded="False"><span>Analytics <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Analytics"><a className="py-1 px-3 d-block" href="/tokens/label/analytics"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="app-development" aria-haspopup="True" aria-expanded="False"><span>App Development <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="App Development"><a className="py-1 px-3 d-block" href="/tokens/label/app-development"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="apparel" aria-haspopup="True" aria-expanded="False"><span>Apparel <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Apparel"><a className="py-1 px-3 d-block" href="/tokens/label/apparel"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="ar" aria-haspopup="True" aria-expanded="False"><span>AR <span
                    className="badge badge-secondary ml-1">6</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="AR"><a className="py-1 px-3 d-block" href="/tokens/label/ar"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (6)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="art" aria-haspopup="True" aria-expanded="False"><span>Art <span
                    className="badge badge-secondary ml-1">16</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Art"><a className="py-1 px-3 d-block" href="/tokens/label/art"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (16)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="artificial-intelligence" aria-haspopup="True" aria-expanded="False"><span>Artificial Intelligence <span
                    className="badge badge-secondary ml-1">15</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Artificial Intelligence"><a className="py-1 px-3 d-block" href="/tokens/label/artificial-intelligence"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (15)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="asset-management" aria-haspopup="True" aria-expanded="False"><span>Asset Management <span
                    className="badge badge-secondary ml-1">12</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Asset Management"><a className="py-1 px-3 d-block" href="/tokens/label/asset-management"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (12)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="asset-token" aria-haspopup="True" aria-expanded="False"><span>Asset Token <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Asset Token"><a className="py-1 px-3 d-block" href="/tokens/label/asset-token"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="auction" aria-haspopup="True" aria-expanded="False"><span>Auction <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Auction"><a className="py-1 px-3 d-block" href="/tokens/label/auction"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="augmented-finance" aria-haspopup="True" aria-expanded="False"><span>Augmented Finance <span
                    className="badge badge-secondary ml-1">66</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Augmented Finance"><a className="py-1 px-3 d-block" href="/accounts/label/augmented-finance"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (66)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="banking" aria-haspopup="True" aria-expanded="False"><span>Banking <span
                    className="badge badge-secondary ml-1">6</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Banking"><a className="py-1 px-3 d-block" href="/tokens/label/banking"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (6)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="beverage" aria-haspopup="True" aria-expanded="False"><span>Beverage <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Beverage"><a className="py-1 px-3 d-block" href="/tokens/label/beverage"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="binance" aria-haspopup="True" aria-expanded="False"><span>Binance <span
                    className="badge badge-secondary ml-1">35</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Binance"><a className="py-1 px-3 d-block" href="/accounts/label/binance"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (28)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/binance"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="binance-pegged" aria-haspopup="True" aria-expanded="False"><span>Binance-Peg <span
                    className="badge badge-secondary ml-1">108</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Binance-Peg"><a className="py-1 px-3 d-block" href="/accounts/label/binance-pegged"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (42)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/binance-pegged"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (66)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="bitcoin-pegged" aria-haspopup="True" aria-expanded="False"><span>Bitcoin Pegged <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Bitcoin Pegged"><a className="py-1 px-3 d-block" href="/accounts/label/bitcoin-pegged"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/bitcoin-pegged"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="blockchain" aria-haspopup="True" aria-expanded="False"><span>Blockchain <span
                    className="badge badge-secondary ml-1">79</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Blockchain"><a className="py-1 px-3 d-block" href="/accounts/label/blockchain"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/blockchain"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (78)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="blocked" aria-haspopup="True" aria-expanded="False"><span>Blocked <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Blocked"><a className="py-1 px-3 d-block" href="/tokens/label/blocked"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="ROC-smart-chain" aria-haspopup="True" aria-expanded="False"><span>ROC Smart Chain <span
                    className="badge badge-secondary ml-1">10</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="ROC Smart Chain"><a className="py-1 px-3 d-block" href="/accounts/label/ROC-smart-chain"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (10)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="bridge" aria-haspopup="True" aria-expanded="False"><span>Bridge <span
                    className="badge badge-secondary ml-1">32</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Bridge"><a className="py-1 px-3 d-block" href="/accounts/label/bridge"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (22)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/bridge"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (10)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="bridged-token" aria-haspopup="True" aria-expanded="False"><span>Bridged Token <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Bridged Token"><a className="py-1 px-3 d-block" href="/tokens/label/bridged-token"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="ROCswap" aria-haspopup="True" aria-expanded="False"><span>ROCSwap <span
                    className="badge badge-secondary ml-1">651</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="ROCSwap"><a className="py-1 px-3 d-block" href="/accounts/label/ROCswap"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (650)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/ROCswap"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="burgerswap" aria-haspopup="True" aria-expanded="False"><span>BurgerSwap <span
                    className="badge badge-secondary ml-1">786</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="BurgerSwap"><a className="py-1 px-3 d-block" href="/accounts/label/burgerswap"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (786)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="burn" aria-haspopup="True" aria-expanded="False"><span>Burn <span
                    className="badge badge-secondary ml-1">23</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Burn"><a className="py-1 px-3 d-block" href="/accounts/label/burn"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (22)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/burn"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="bzx" aria-haspopup="True" aria-expanded="False"><span>bZx <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="bZx"><a className="py-1 px-3 d-block" href="/accounts/label/bzx"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/bzx"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="chainlink" aria-haspopup="True" aria-expanded="False"><span>Chainlink <span
                    className="badge badge-secondary ml-1">84</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Chainlink"><a className="py-1 px-3 d-block" href="/accounts/label/chainlink"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (84)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="charity" aria-haspopup="True" aria-expanded="False"><span>Charity <span
                    className="badge badge-secondary ml-1">134</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Charity"><a className="py-1 px-3 d-block" href="/accounts/label/charity"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/charity"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (132)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="cloud" aria-haspopup="True" aria-expanded="False"><span>Cloud <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Cloud"><a className="py-1 px-3 d-block" href="/tokens/label/cloud"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="collectibles" aria-haspopup="True" aria-expanded="False"><span>Collectibles <span
                    className="badge badge-secondary ml-1">13</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Collectibles"><a className="py-1 px-3 d-block" href="/tokens/label/collectibles"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (13)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="commodity" aria-haspopup="True" aria-expanded="False"><span>Commodity <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Commodity"><a className="py-1 px-3 d-block" href="/tokens/label/commodity"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="communication" aria-haspopup="True" aria-expanded="False"><span>Communication <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Communication"><a className="py-1 px-3 d-block" href="/tokens/label/communication"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="company-funds" aria-haspopup="True" aria-expanded="False"><span>Company Funds <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Company Funds"><a className="py-1 px-3 d-block" href="/tokens/label/company-funds"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="computing" aria-haspopup="True" aria-expanded="False"><span>Computing <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Computing"><a className="py-1 px-3 d-block" href="/tokens/label/computing"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="contract-deployer" aria-haspopup="True" aria-expanded="False"><span>Contract Deployer <span
                    className="badge badge-secondary ml-1">8225</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Contract Deployer"><a className="py-1 px-3 d-block" href="/accounts/label/contract-deployer"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (8224)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/contract-deployer"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="cream-finance" aria-haspopup="True" aria-expanded="False"><span>Cream.Finance <span
                    className="badge badge-secondary ml-1">36</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Cream.Finance"><a className="py-1 px-3 d-block" href="/accounts/label/cream-finance"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (13)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/cream-finance"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (23)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="crowdfunding" aria-haspopup="True" aria-expanded="False"><span>Crowdfunding <span
                    className="badge badge-secondary ml-1">15</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Crowdfunding"><a className="py-1 px-3 d-block" href="/tokens/label/crowdfunding"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (15)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="crypto-card" aria-haspopup="True" aria-expanded="False"><span>Crypto Card <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Crypto Card"><a className="py-1 px-3 d-block" href="/tokens/label/crypto-card"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="currency" aria-haspopup="True" aria-expanded="False"><span>Currency <span
                    className="badge badge-secondary ml-1">14</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Currency"><a className="py-1 px-3 d-block" href="/tokens/label/currency"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (14)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="dao" aria-haspopup="True" aria-expanded="False"><span>DAO <span
                    className="badge badge-secondary ml-1">57</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="DAO"><a className="py-1 px-3 d-block" href="/tokens/label/dao"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (57)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="data" aria-haspopup="True" aria-expanded="False"><span>Data <span
                    className="badge badge-secondary ml-1">13</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Data"><a className="py-1 px-3 d-block" href="/tokens/label/data"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (13)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="dating" aria-haspopup="True" aria-expanded="False"><span>Dating <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Dating"><a className="py-1 px-3 d-block" href="/tokens/label/dating"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="decentralized-web" aria-haspopup="True" aria-expanded="False"><span>Decentralized Web <span
                    className="badge badge-secondary ml-1">64</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Decentralized Web"><a className="py-1 px-3 d-block" href="/tokens/label/decentralized-web"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (64)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="defi" aria-haspopup="True" aria-expanded="False"><span>DeFi <span
                    className="badge badge-secondary ml-1">872</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="DeFi"><a className="py-1 px-3 d-block" href="/accounts/label/defi"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (21)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/defi"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (851)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="deflationary" aria-haspopup="True" aria-expanded="False"><span>Deflationary <span
                    className="badge badge-secondary ml-1">412</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Deflationary"><a className="py-1 px-3 d-block" href="/accounts/label/deflationary"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/deflationary"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (411)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="derivatives" aria-haspopup="True" aria-expanded="False"><span>Derivatives <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Derivatives"><a className="py-1 px-3 d-block" href="/tokens/label/derivatives"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="design" aria-haspopup="True" aria-expanded="False"><span>Design <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Design"><a className="py-1 px-3 d-block" href="/tokens/label/design"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="dex" aria-haspopup="True" aria-expanded="False"><span>DEX <span
                    className="badge badge-secondary ml-1">103</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="DEX"><a className="py-1 px-3 d-block" href="/accounts/label/dex"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (7)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/dex"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (96)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="dforce" aria-haspopup="True" aria-expanded="False"><span>dForce <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="dForce "><a className="py-1 px-3 d-block" href="/tokens/label/dforce"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="donate" aria-haspopup="True" aria-expanded="False"><span>Donate <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Donate"><a className="py-1 px-3 d-block" href="/accounts/label/donate"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (7)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="e-commerce" aria-haspopup="True" aria-expanded="False"><span>E-Commerce <span
                    className="badge badge-secondary ml-1">56</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="E-Commerce"><a className="py-1 px-3 d-block" href="/accounts/label/e-commerce"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/e-commerce"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (55)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="education" aria-haspopup="True" aria-expanded="False"><span>Education <span
                    className="badge badge-secondary ml-1">50</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Education"><a className="py-1 px-3 d-block" href="/accounts/label/education"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/education"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (49)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="electronics" aria-haspopup="True" aria-expanded="False"><span>Electronics <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Electronics"><a className="py-1 px-3 d-block" href="/tokens/label/electronics"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="energy-sector" aria-haspopup="True" aria-expanded="False"><span>Energy Sector <span
                    className="badge badge-secondary ml-1">33</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Energy Sector"><a className="py-1 px-3 d-block" href="/tokens/label/energy-sector"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (33)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="entertainment" aria-haspopup="True" aria-expanded="False"><span>Entertainment <span
                    className="badge badge-secondary ml-1">51</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Entertainment"><a className="py-1 px-3 d-block" href="/accounts/label/entertainment"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/entertainment"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (50)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="environment" aria-haspopup="True" aria-expanded="False"><span>Environment <span
                    className="badge badge-secondary ml-1">50</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Environment"><a className="py-1 px-3 d-block" href="/tokens/label/environment"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (50)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="escrow" aria-haspopup="True" aria-expanded="False"><span>Escrow <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Escrow"><a className="py-1 px-3 d-block" href="/tokens/label/escrow"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="esports" aria-haspopup="True" aria-expanded="False"><span>Esports <span
                    className="badge badge-secondary ml-1">10</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Esports"><a className="py-1 px-3 d-block" href="/tokens/label/esports"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (10)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="events" aria-haspopup="True" aria-expanded="False"><span>Events <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Events"><a className="py-1 px-3 d-block" href="/tokens/label/events"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="exchange" aria-haspopup="True" aria-expanded="False"><span>Exchange <span
                    className="badge badge-secondary ml-1">96</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Exchange"><a className="py-1 px-3 d-block" href="/accounts/label/exchange"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (30)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/exchange"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (66)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="exploit" aria-haspopup="True" aria-expanded="False"><span>Exploit <span
                    className="badge badge-secondary ml-1">43</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Exploit"><a className="py-1 px-3 d-block" href="/txs/label/exploit"><span
                      className="btn btn-xs btn-icon btn-soft-success rounded-circle mr-1"><i
                        className="fa fa-exchange-alt btn-icon__inner mr-1"></i></span>Transactions
                      (3)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/accounts/label/exploit"><span
                        className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                          className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                        (40)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="factory-contract" aria-haspopup="True" aria-expanded="False"><span>Factory Contract <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Factory Contract"><a className="py-1 px-3 d-block" href="/accounts/label/factory-contract"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="farming" aria-haspopup="True" aria-expanded="False"><span>Farming <span
                    className="badge badge-secondary ml-1">12</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Farming"><a className="py-1 px-3 d-block" href="/tokens/label/farming"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (12)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="fashion" aria-haspopup="True" aria-expanded="False"><span>Fashion <span
                    className="badge badge-secondary ml-1">8</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Fashion"><a className="py-1 px-3 d-block" href="/tokens/label/fashion"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (8)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="fiat-gateway" aria-haspopup="True" aria-expanded="False"><span>Fiat Gateway <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Fiat Gateway"><a className="py-1 px-3 d-block" href="/tokens/label/fiat-gateway"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="finance" aria-haspopup="True" aria-expanded="False"><span>Finance <span
                    className="badge badge-secondary ml-1">195</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Finance"><a className="py-1 px-3 d-block" href="/accounts/label/finance"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/finance"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (194)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="fintech" aria-haspopup="True" aria-expanded="False"><span>Fintech <span
                    className="badge badge-secondary ml-1">17</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Fintech"><a className="py-1 px-3 d-block" href="/tokens/label/fintech"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (17)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="fitness" aria-haspopup="True" aria-expanded="False"><span>Fitness <span
                    className="badge badge-secondary ml-1">30</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Fitness"><a className="py-1 px-3 d-block" href="/tokens/label/fitness"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (30)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="food" aria-haspopup="True" aria-expanded="False"><span>Food <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Food"><a className="py-1 px-3 d-block" href="/tokens/label/food"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="freelance" aria-haspopup="True" aria-expanded="False"><span>Freelance <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Freelance"><a className="py-1 px-3 d-block" href="/tokens/label/freelance"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="fund" aria-haspopup="True" aria-expanded="False"><span>Fund <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Fund"><a className="py-1 px-3 d-block" href="/tokens/label/fund"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="gambling" aria-haspopup="True" aria-expanded="False"><span>Gambling <span
                    className="badge badge-secondary ml-1">58</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Gambling"><a className="py-1 px-3 d-block" href="/accounts/label/gambling"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/gambling"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (57)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="gaming" aria-haspopup="True" aria-expanded="False"><span>Gaming <span
                    className="badge badge-secondary ml-1">819</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Gaming"><a className="py-1 px-3 d-block" href="/accounts/label/gaming"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/gaming"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (817)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="genesis" aria-haspopup="True" aria-expanded="False"><span>Genesis <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Genesis"><a className="py-1 px-3 d-block" href="/accounts/label/genesis"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="gold" aria-haspopup="True" aria-expanded="False"><span>Gold <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Gold"><a className="py-1 px-3 d-block" href="/tokens/label/gold"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="governance" aria-haspopup="True" aria-expanded="False"><span>Governance <span
                    className="badge badge-secondary ml-1">21</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Governance"><a className="py-1 px-3 d-block" href="/tokens/label/governance"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (21)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="harvest-finance" aria-haspopup="True" aria-expanded="False"><span>Harvest Finance <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Harvest Finance"><a className="py-1 px-3 d-block" href="/accounts/label/harvest-finance"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (3)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="healthcare" aria-haspopup="True" aria-expanded="False"><span>Healthcare <span
                    className="badge badge-secondary ml-1">34</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Healthcare"><a className="py-1 px-3 d-block" href="/tokens/label/healthcare"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (34)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="heist" aria-haspopup="True" aria-expanded="False"><span>Heist <span
                    className="badge badge-secondary ml-1">56</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Heist"><a className="py-1 px-3 d-block" href="/txs/label/heist"><span
                      className="btn btn-xs btn-icon btn-soft-success rounded-circle mr-1"><i
                        className="fa fa-exchange-alt btn-icon__inner mr-1"></i></span>Transactions
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/accounts/label/heist"><span
                        className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                          className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                        (51)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/heist"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="hospitality" aria-haspopup="True" aria-expanded="False"><span>Hospitality <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Hospitality"><a className="py-1 px-3 d-block" href="/tokens/label/hospitality"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="hot-wallet" aria-haspopup="True" aria-expanded="False"><span>Hot Wallet <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Hot Wallet"><a className="py-1 px-3 d-block" href="/accounts/label/hot-wallet"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="hotbit" aria-haspopup="True" aria-expanded="False"><span>Hotbit <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Hotbit"><a className="py-1 px-3 d-block" href="/accounts/label/hotbit"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/hotbit"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="hotel" aria-haspopup="True" aria-expanded="False"><span>Hotel <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Hotel"><a className="py-1 px-3 d-block" href="/tokens/label/hotel"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="human-resource" aria-haspopup="True" aria-expanded="False"><span>Human Resource <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Human Resource"><a className="py-1 px-3 d-block" href="/tokens/label/human-resource"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="hyperjump" aria-haspopup="True" aria-expanded="False"><span>HyperJump <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="HyperJump"><a className="py-1 px-3 d-block" href="/accounts/label/hyperjump"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="identity" aria-haspopup="True" aria-expanded="False"><span>Identity <span
                    className="badge badge-secondary ml-1">8</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Identity"><a className="py-1 px-3 d-block" href="/tokens/label/identity"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (8)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="incubator" aria-haspopup="True" aria-expanded="False"><span>Incubator <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Incubator"><a className="py-1 px-3 d-block" href="/tokens/label/incubator"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="insurance" aria-haspopup="True" aria-expanded="False"><span>Insurance <span
                    className="badge badge-secondary ml-1">9</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Insurance"><a className="py-1 px-3 d-block" href="/tokens/label/insurance"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (9)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="interoperability-cross-chain" aria-haspopup="True" aria-expanded="False"><span>Interoperability / Cross-Chain
                    <span className="badge badge-secondary ml-1">20</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Interoperability / Cross-Chain"><a className="py-1 px-3 d-block" href="/tokens/label/interoperability-cross-chain"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (20)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="investment" aria-haspopup="True" aria-expanded="False"><span>Investment <span
                    className="badge badge-secondary ml-1">51</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Investment"><a className="py-1 px-3 d-block" href="/tokens/label/investment"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (51)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="iot" aria-haspopup="True" aria-expanded="False"><span>IoT <span
                    className="badge badge-secondary ml-1">6</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="IoT"><a className="py-1 px-3 d-block" href="/tokens/label/iot"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (6)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="iron-finance" aria-haspopup="True" aria-expanded="False"><span>IRON Finance <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="IRON Finance"><a className="py-1 px-3 d-block" href="/txs/label/iron-finance"><span
                      className="btn btn-xs btn-icon btn-soft-success rounded-circle mr-1"><i
                        className="fa fa-exchange-alt btn-icon__inner mr-1"></i></span>Transactions
                      (1)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="knowledge" aria-haspopup="True" aria-expanded="False"><span>Knowledge <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Knowledge"><a className="py-1 px-3 d-block" href="/tokens/label/knowledge"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="land" aria-haspopup="True" aria-expanded="False"><span>Land <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Land"><a className="py-1 px-3 d-block" href="/tokens/label/land"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="launchpad" aria-haspopup="True" aria-expanded="False"><span>Launchpad <span
                    className="badge badge-secondary ml-1">49</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Launchpad"><a className="py-1 px-3 d-block" href="/accounts/label/launchpad"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/launchpad"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (48)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="legal" aria-haspopup="True" aria-expanded="False"><span>Legal <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Legal"><a className="py-1 px-3 d-block" href="/tokens/label/legal"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="liquidity" aria-haspopup="True" aria-expanded="False"><span>Liquidity <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Liquidity"><a className="py-1 px-3 d-block" href="/tokens/label/liquidity"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="loans" aria-haspopup="True" aria-expanded="False"><span>Loans <span
                    className="badge badge-secondary ml-1">54</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Loans"><a className="py-1 px-3 d-block" href="/tokens/label/loans"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (54)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="logistics" aria-haspopup="True" aria-expanded="False"><span>Logistics <span
                    className="badge badge-secondary ml-1">5</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Logistics"><a className="py-1 px-3 d-block" href="/tokens/label/logistics"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (5)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="loyalty-and-rewards" aria-haspopup="True" aria-expanded="False"><span>Loyalty and Rewards <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Loyalty and Rewards"><a className="py-1 px-3 d-block" href="/tokens/label/loyalty-and-rewards"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="mainnet-launched" aria-haspopup="True" aria-expanded="False"><span>Mainnet Launched <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Mainnet Launched"><a className="py-1 px-3 d-block" href="/tokens/label/mainnet-launched"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="marketing" aria-haspopup="True" aria-expanded="False"><span>Marketing <span
                    className="badge badge-secondary ml-1">20</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Marketing"><a className="py-1 px-3 d-block" href="/tokens/label/marketing"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (20)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="marketplace" aria-haspopup="True" aria-expanded="False"><span>Marketplace <span
                    className="badge badge-secondary ml-1">79</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Marketplace"><a className="py-1 px-3 d-block" href="/tokens/label/marketplace"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (79)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="mdex" aria-haspopup="True" aria-expanded="False"><span>Mdex <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Mdex"><a className="py-1 px-3 d-block" href="/accounts/label/mdex"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="media" aria-haspopup="True" aria-expanded="False"><span>Media <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Media"><a className="py-1 px-3 d-block" href="/tokens/label/media"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="meme" aria-haspopup="True" aria-expanded="False"><span>MEME <span
                    className="badge badge-secondary ml-1">396</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="MEME"><a className="py-1 px-3 d-block" href="/tokens/label/meme"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (396)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="metaverse" aria-haspopup="True" aria-expanded="False"><span>Metaverse <span
                    className="badge badge-secondary ml-1">289</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Metaverse"><a className="py-1 px-3 d-block" href="/accounts/label/metaverse"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/metaverse"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (288)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="mining" aria-haspopup="True" aria-expanded="False"><span>Mining <span
                    className="badge badge-secondary ml-1">22</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Mining"><a className="py-1 px-3 d-block" href="/accounts/label/mining"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/mining"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (21)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="mobile" aria-haspopup="True" aria-expanded="False"><span>Mobile <span
                    className="badge badge-secondary ml-1">6</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Mobile"><a className="py-1 px-3 d-block" href="/tokens/label/mobile"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (6)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="movie-film" aria-haspopup="True" aria-expanded="False"><span>Movie / Film <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Movie / Film"><a className="py-1 px-3 d-block" href="/tokens/label/movie-film"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="multichain" aria-haspopup="True" aria-expanded="False"><span>Multichain <span
                    className="badge badge-secondary ml-1">200</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Multichain"><a className="py-1 px-3 d-block" href="/accounts/label/multichain"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (102)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/multichain"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (98)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="music" aria-haspopup="True" aria-expanded="False"><span>Music <span
                    className="badge badge-secondary ml-1">21</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Music"><a className="py-1 px-3 d-block" href="/tokens/label/music"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (21)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="network" aria-haspopup="True" aria-expanded="False"><span>Network <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Network"><a className="py-1 px-3 d-block" href="/tokens/label/network"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="news" aria-haspopup="True" aria-expanded="False"><span>News <span
                    className="badge badge-secondary ml-1">6</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="News"><a className="py-1 px-3 d-block" href="/tokens/label/news"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (6)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="nft" aria-haspopup="True" aria-expanded="False"><span>NFT <span
                    className="badge badge-secondary ml-1">712</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="NFT "><a className="py-1 px-3 d-block" href="/accounts/label/nft"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (8)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/nft"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (704)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="oil" aria-haspopup="True" aria-expanded="False"><span>Oil <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Oil"><a className="py-1 px-3 d-block" href="/tokens/label/oil"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="old-contract" aria-haspopup="True" aria-expanded="False"><span>Old Contract <span
                    className="badge badge-secondary ml-1">620</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Old Contract "><a className="py-1 px-3 d-block" href="/accounts/label/old-contract"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (387)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/old-contract"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (233)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="oracle" aria-haspopup="True" aria-expanded="False"><span>Oracle <span
                    className="badge badge-secondary ml-1">11</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Oracle"><a className="py-1 px-3 d-block" href="/tokens/label/oracle"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (11)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="pancake-bunny" aria-haspopup="True" aria-expanded="False"><span>Pancake Bunny <span
                    className="badge badge-secondary ml-1">58</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Pancake Bunny"><a className="py-1 px-3 d-block" href="/accounts/label/pancake-bunny"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (58)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="pancakeswap" aria-haspopup="True" aria-expanded="False"><span>PancakeSwap <span
                    className="badge badge-secondary ml-1">1171133</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="PancakeSwap"><a className="py-1 px-3 d-block" href="/accounts/label/pancakeswap"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1171131)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/pancakeswap"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="payments" aria-haspopup="True" aria-expanded="False"><span>Payments <span
                    className="badge badge-secondary ml-1">91</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Payments"><a className="py-1 px-3 d-block" href="/tokens/label/payments"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (91)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="pet" aria-haspopup="True" aria-expanded="False"><span>Pet <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Pet"><a className="py-1 px-3 d-block" href="/tokens/label/pet"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="phish-hack" aria-haspopup="True" aria-expanded="False"><span>Phish / Hack <span
                    className="badge badge-secondary ml-1">113</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Phish / Hack"><a className="py-1 px-3 d-block" href="/accounts/label/phish-hack"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (87)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/phish-hack"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (26)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="platform" aria-haspopup="True" aria-expanded="False"><span>Platform <span
                    className="badge badge-secondary ml-1">37</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Platform"><a className="py-1 px-3 d-block" href="/accounts/label/platform"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/platform"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (36)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="play-to-earn" aria-haspopup="True" aria-expanded="False"><span>Play-to-Earn <span
                    className="badge badge-secondary ml-1">233</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Play-to-Earn"><a className="py-1 px-3 d-block" href="/accounts/label/play-to-earn"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/play-to-earn"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (231)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="portfolio-tracker" aria-haspopup="True" aria-expanded="False"><span>Portfolio Tracker <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Portfolio Tracker"><a className="py-1 px-3 d-block" href="/tokens/label/portfolio-tracker"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="pos" aria-haspopup="True" aria-expanded="False"><span>PoS <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="PoS"><a className="py-1 px-3 d-block" href="/tokens/label/pos"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="precious-metals" aria-haspopup="True" aria-expanded="False"><span>Precious Metals <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Precious Metals"><a className="py-1 px-3 d-block" href="/tokens/label/precious-metals"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="prediction-market" aria-haspopup="True" aria-expanded="False"><span>Prediction Market <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Prediction Market"><a className="py-1 px-3 d-block" href="/tokens/label/prediction-market"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="privacy" aria-haspopup="True" aria-expanded="False"><span>Privacy <span
                    className="badge badge-secondary ml-1">19</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Privacy"><a className="py-1 px-3 d-block" href="/tokens/label/privacy"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (19)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="protocol" aria-haspopup="True" aria-expanded="False"><span>Protocol <span
                    className="badge badge-secondary ml-1">41</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Protocol"><a className="py-1 px-3 d-block" href="/tokens/label/protocol"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (41)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="real-estate" aria-haspopup="True" aria-expanded="False"><span>Real Estate <span
                    className="badge badge-secondary ml-1">41</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Real Estate"><a className="py-1 px-3 d-block" href="/tokens/label/real-estate"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (41)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="rebase-token" aria-haspopup="True" aria-expanded="False"><span>Rebase Token <span
                    className="badge badge-secondary ml-1">13</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Rebase Token"><a className="py-1 px-3 d-block" href="/tokens/label/rebase-token"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (13)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="remittance+" aria-haspopup="True" aria-expanded="False"><span>Remittance <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Remittance "><a className="py-1 px-3 d-block" href="/tokens/label/remittance+"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="ren" aria-haspopup="True" aria-expanded="False"><span>Ren <span
                    className="badge badge-secondary ml-1">7</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Ren"><a className="py-1 px-3 d-block" href="/tokens/label/ren"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (7)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="research" aria-haspopup="True" aria-expanded="False"><span>Research <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Research"><a className="py-1 px-3 d-block" href="/tokens/label/research"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="restaurant" aria-haspopup="True" aria-expanded="False"><span>Restaurant <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Restaurant"><a className="py-1 px-3 d-block" href="/tokens/label/restaurant"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="retail" aria-haspopup="True" aria-expanded="False"><span>Retail <span
                    className="badge badge-secondary ml-1">8</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Retail"><a className="py-1 px-3 d-block" href="/tokens/label/retail"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (8)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="scam" aria-haspopup="True" aria-expanded="False"><span>Scam <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Scam"><a className="py-1 px-3 d-block" href="/accounts/label/scam"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (2)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/scam"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="security" aria-haspopup="True" aria-expanded="False"><span>Security <span
                    className="badge badge-secondary ml-1">28</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Security"><a className="py-1 px-3 d-block" href="/tokens/label/security"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (28)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="services-solutions" aria-haspopup="True" aria-expanded="False"><span>Services / Solutions <span
                    className="badge badge-secondary ml-1">24</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Services / Solutions"><a className="py-1 px-3 d-block" href="/tokens/label/services-solutions"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (24)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="smart-contract" aria-haspopup="True" aria-expanded="False"><span>Smart Contract <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Smart Contract"><a className="py-1 px-3 d-block" href="/tokens/label/smart-contract"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="social-media" aria-haspopup="True" aria-expanded="False"><span>Social Media <span
                    className="badge badge-secondary ml-1">51</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Social Media"><a className="py-1 px-3 d-block" href="/tokens/label/social-media"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (51)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="social-networking" aria-haspopup="True" aria-expanded="False"><span>Social Networking <span
                    className="badge badge-secondary ml-1">17</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Social Networking"><a className="py-1 px-3 d-block" href="/tokens/label/social-networking"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (17)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="software" aria-haspopup="True" aria-expanded="False"><span>Software <span
                    className="badge badge-secondary ml-1">11</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Software"><a className="py-1 px-3 d-block" href="/tokens/label/software"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (11)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="sports" aria-haspopup="True" aria-expanded="False"><span>Sports <span
                    className="badge badge-secondary ml-1">52</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Sports"><a className="py-1 px-3 d-block" href="/accounts/label/sports"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/sports"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (51)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="stablecoin" aria-haspopup="True" aria-expanded="False"><span>Stablecoin <span
                    className="badge badge-secondary ml-1">24</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Stablecoin"><a className="py-1 px-3 d-block" href="/tokens/label/stablecoin"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (24)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="staking" aria-haspopup="True" aria-expanded="False"><span>Staking <span
                    className="badge badge-secondary ml-1">169</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Staking"><a className="py-1 px-3 d-block" href="/accounts/label/staking"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (5)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/staking"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (164)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="storage" aria-haspopup="True" aria-expanded="False"><span>Storage <span
                    className="badge badge-secondary ml-1">3</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Storage"><a className="py-1 px-3 d-block" href="/tokens/label/storage"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (3)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="streaming" aria-haspopup="True" aria-expanded="False"><span>Streaming <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Streaming"><a className="py-1 px-3 d-block" href="/tokens/label/streaming"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="supply-chain" aria-haspopup="True" aria-expanded="False"><span>Supply Chain <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Supply Chain"><a className="py-1 px-3 d-block" href="/tokens/label/supply-chain"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="swipe-io" aria-haspopup="True" aria-expanded="False"><span>Swipe.io <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Swipe.io"><a className="py-1 px-3 d-block" href="/accounts/label/swipe-io"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/swipe-io"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="swipeswap" aria-haspopup="True" aria-expanded="False"><span>SwipeSwap <span
                    className="badge badge-secondary ml-1">16</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="SwipeSwap"><a className="py-1 px-3 d-block" href="/accounts/label/swipeswap"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (16)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="synapse" aria-haspopup="True" aria-expanded="False"><span>Synapse <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Synapse"><a className="py-1 px-3 d-block" href="/accounts/label/synapse"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (4)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="system-contract" aria-haspopup="True" aria-expanded="False"><span>System Contracts <span
                    className="badge badge-secondary ml-1">10</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="System Contracts"><a className="py-1 px-3 d-block" href="/accounts/label/system-contract"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (10)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="technology" aria-haspopup="True" aria-expanded="False"><span>Technology <span
                    className="badge badge-secondary ml-1">70</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Technology"><a className="py-1 px-3 d-block" href="/tokens/label/technology"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (70)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="token-contract" aria-haspopup="True" aria-expanded="False"><span>Token Contract <span
                    className="badge badge-secondary ml-1">10362</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Token Contract"><a className="py-1 px-3 d-block" href="/accounts/label/token-contract"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (10357)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/token-contract"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (5)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="tokenized-asset" aria-haspopup="True" aria-expanded="False"><span>Tokenized Asset <span
                    className="badge badge-secondary ml-1">18</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Tokenized Asset"><a className="py-1 px-3 d-block" href="/tokens/label/tokenized-asset"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (18)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="tools" aria-haspopup="True" aria-expanded="False"><span>Tools <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Tools"><a className="py-1 px-3 d-block" href="/tokens/label/tools"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="trading" aria-haspopup="True" aria-expanded="False"><span>Trading <span
                    className="badge badge-secondary ml-1">44</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Trading"><a className="py-1 px-3 d-block" href="/tokens/label/trading"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (44)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="transportation" aria-haspopup="True" aria-expanded="False"><span>Transportation <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Transportation"><a className="py-1 px-3 d-block" href="/tokens/label/transportation"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="travel" aria-haspopup="True" aria-expanded="False"><span>Travel <span
                    className="badge badge-secondary ml-1">22</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Travel"><a className="py-1 px-3 d-block" href="/tokens/label/travel"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (22)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="typhoon-network" aria-haspopup="True" aria-expanded="False"><span>Typhoon Network <span
                    className="badge badge-secondary ml-1">22</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Typhoon Network"><a className="py-1 px-3 d-block" href="/accounts/label/typhoon-network"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (22)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="unicrypt" aria-haspopup="True" aria-expanded="False"><span>Unicrypt <span
                    className="badge badge-secondary ml-1">9</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Unicrypt"><a className="py-1 px-3 d-block" href="/accounts/label/unicrypt"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (7)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/unicrypt"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="validator" aria-haspopup="True" aria-expanded="False"><span>Validators <span
                    className="badge badge-secondary ml-1">41</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Validators"><a className="py-1 px-3 d-block" href="/accounts/label/validator"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (41)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="vaults" aria-haspopup="True" aria-expanded="False"><span>Vaults <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Vaults"><a className="py-1 px-3 d-block" href="/accounts/label/vaults"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (4)</a></div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="vehicle" aria-haspopup="True" aria-expanded="False"><span>Vehicle <span
                    className="badge badge-secondary ml-1">2</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Vehicle"><a className="py-1 px-3 d-block" href="/tokens/label/vehicle"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (2)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="venture-capital" aria-haspopup="True" aria-expanded="False"><span>Venture Capital <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Venture Capital"><a className="py-1 px-3 d-block" href="/tokens/label/venture-capital"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="venus-protocol" aria-haspopup="True" aria-expanded="False"><span>Venus Protocol <span
                    className="badge badge-secondary ml-1">33</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Venus Protocol"><a className="py-1 px-3 d-block" href="/accounts/label/venus-protocol"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (9)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/venus-protocol"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (24)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="video" aria-haspopup="True" aria-expanded="False"><span>Video <span
                    className="badge badge-secondary ml-1">4</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Video"><a className="py-1 px-3 d-block" href="/tokens/label/video"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (4)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="vr" aria-haspopup="True" aria-expanded="False"><span>VR <span
                    className="badge badge-secondary ml-1">1</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="VR"><a className="py-1 px-3 d-block" href="/tokens/label/vr"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (1)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="wallet-app" aria-haspopup="True" aria-expanded="False"><span>Wallet App <span
                    className="badge badge-secondary ml-1">35</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Wallet App"><a className="py-1 px-3 d-block" href="/tokens/label/wallet-app"><span
                      className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                        className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (35)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="website-down" aria-haspopup="True" aria-expanded="False"><span>Website Down <span
                    className="badge badge-secondary ml-1">48</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Website Down"><a className="py-1 px-3 d-block" href="/accounts/label/website-down"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/website-down"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (47)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="wormhole" aria-haspopup="True" aria-expanded="False"><span>Wormhole <span
                    className="badge badge-secondary ml-1">62</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Wormhole"><a className="py-1 px-3 d-block" href="/accounts/label/wormhole"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (32)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/wormhole"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (30)</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 secondary-container">
                  <div className="dropdown"><button className="btn btn-sm btn-block btn-custom btn-custom-toggle dropdown-toggle" type="button" data-toggle="dropdown" data-url="yield-farming" aria-haspopup="True" aria-expanded="False"><span>Yield Farming <span
                    className="badge badge-secondary ml-1">384</span></span></button>
                    <div className="dropdown-menu list-unstyled py-2 mb-0 w-100 font-size-base" aria-labelledby="Yield Farming"><a className="py-1 px-3 d-block" href="/accounts/label/yield-farming"><span
                      className="btn btn-xs btn-icon btn-soft-danger rounded-circle mr-1"><i
                        className="far fa-file-alt btn-icon__inner mr-1"></i></span>Accounts
                      (1)</a>
                      <div className="dropdown-divider"></div><a className="py-1 px-3 d-block" href="/tokens/label/yield-farming"><span
                        className="btn btn-xs btn-icon btn-soft-warning rounded-circle mr-1"><i
                          className="far fa-coin btn-icon__inner mr-1"></i></span>Tokens (383)</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 pl-1 label" id="tagfooter"></div>

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
