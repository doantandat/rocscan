import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouteCus from "./../routecus/RouteCus";
class Header extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    }
  }



  render()
  {

    let { showMenu } = this.state
    // let { match } = this.props;
    return (
      <header id="header" className="u-header">
        <div className="u-header__section py-1">
          <div id="logoAndNav" className="container">
            <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
              <div className="w-lg-auto">
                <Link className="navbar-brand logo-header_ pt-md-0" to="/" target="_parent" aria-label="RocScan" style={{ display: "flex", alignItems: "center" }}>
                  <img id="logo-header" width="160" src="/images/logoRoc.png" alt="RocScan Logo" style={{ width: "50px", height: "auto" }} />
                  <div className="_r" style={{ display: "flex", flexDirection: "column", paddingLeft: "10px", paddingBottom: "10px", justifyContent: "center" }}>
                    <span style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                      RocScan
                    </span>
                    <span style={{ fontSize: "0.6em", fontWeight: 500 }}>
                      A product of Etherscan
                    </span>
                  </div>
                </Link>
              </div>
              <div>
                <button type="button" className="navbar-toggler btn u-hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                  <span id="hamburgerTrigger" className="u-hamburger__box">
                    <span className="u-hamburger__inner"></span>
                  </span>
                </button>
              </div>
              <div className="d-flex flex-column w-100">
                <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse order-md-2">
                  <ul className="navbar-nav u-header__navbar-nav px-2 px-md-0">
                    <li id="LI_default" className="nav-item u-header__nav-item active" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link className="nav-link u-header__nav-link" to="/" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Home</Link>
                    </li>
                    <li id="LI_blockchain" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link id="blockchainMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" to="" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Blockchain</Link>
                      <ul id="blockchainSubMenu" className="hs-sub-menu u-header__sub-menu  u-header__sub-menu--spacer" aria-labelledby="blockchainMegaMenu" style={{ minWidth: "230px" }}>
                        <li id="LI_accountall"><Link to="/accounts" className="nav-link u-header__sub-menu-nav-link">Top Accounts</Link></li>
                        <li className="dropdown-divider"></li>
                        <li id="LI12"><Link to="/txs" className="nav-link u-header__sub-menu-nav-link">View Txns</Link></li>
                        <li id="LI16"><Link to="/txsPending" className="nav-link u-header__sub-menu-nav-link">View Pending Txns</Link>
                        </li>
                        <li id="LI14"><Link to="/txsInternal" className="nav-link u-header__sub-menu-nav-link">View Contract Internal
                          Txns</Link></li>
                        <li className="dropdown-divider"></li>
                        <li id="LI_blocks">
                          <Link id="navBlocks" className="nav-link u-header__sub-menu-nav-link" to="/blocks" aria-haspopup="true" aria-expanded="false" aria-controls="navSubBlocks">View Blocks</Link>
                        </li>
                        <li id="LI_blocks2">
                          <Link className="nav-link u-header__sub-menu-nav-link" to="/blocks_forked">Forked Blocks (Reorgs)</Link>
                        </li>
                        <li id="LI8" className="d-none"><Link className="nav-link u-header__sub-menu-nav-link" to="/uncles">View Uncles</Link></li>
                        <li className="divider"></li>
                        <li className="dropdown-divider"></li>
                        <li id="LI_contract_verified"><Link to="/contractsVerified" className="nav-link u-header__sub-menu-nav-link">Verified Contracts</Link>
                        </li>
                      </ul>
                    </li>
                    <li id="LI_validators" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link id="validatorMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" to="" aria-haspopup="true" aria-expanded="false" aria-labelledby="validatorSubMenu">Validators</Link>
                      <ul id="validatorSubMenu" className="hs-sub-menu u-header__sub-menu  u-header__sub-menu--spacer" aria-labelledby="validatorMegaMenu" style={{ minWidth: "230px" }}>
                        <li id="LI4"><Link className="nav-link u-header__sub-menu-nav-link" to="/validators">Validators Leaderboard</Link></li>
                        <li id="LI5"><Link className="nav-link u-header__sub-menu-nav-link" to="/validatorset">View Validators Set Info</Link></li>
                      </ul>
                    </li>
                    <li id="LI_Tokens" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link id="testTokensMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" to="" aria-haspopup="true" aria-expanded="false" aria-labelledby="testTokensSubMenu">Tokens</Link>
                      <ul id="testTokensSubMenu" className="hs-sub-menu u-header__sub-menu  u-header__sub-menu--spacer" aria-labelledby="testTokensMegaMenu" style={{ minWidth: "230px" }}>
                        <li id="LI18"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokens">ROC-20 Tokens By MarketCap</Link></li>
                        <li id="LI2"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokens-volume">ROC-20 Tokens By Volume</Link></li>
                        <li id="LI3"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokentxns">View ROC-20 Transfers</Link></li>
                        <li className="dropdown-divider"></li>
                        <li id="LI42"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokens-nft">ERC721 Top Tokens</Link></li>
                        <li id="LI40"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokentxns-nft">View ERC721 Transfers</Link></li>
                        <li className="dropdown-divider"></li>
                        <li id="LI30"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokens-nft1155">ERC-1155 Top Tokens</Link></li>
                        <li id="LI33"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokentxns-nft1155">View ERC-1155 Transfers <sup></sup></Link>
                        </li>
                      </ul>
                    </li>
                    <li id="LI_resources" className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link id="resourcesMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" to="" aria-haspopup="true" aria-expanded="false" aria-labelledby="resourcesSubMenu">Resources</Link>
                      <ul id="resourcesSubMenu" className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer" aria-labelledby="resourcesMegaMenu" style={{ minWidth: "230px" }}>
                        <li id="LI_charts2"><Link className="nav-link u-header__sub-menu-nav-link" to="/charts">Charts &amp; Stats</Link></li>
                        <li id="LI_topstat"><Link className="nav-link u-header__sub-menu-nav-link" to="/topstat">Top Statistics</Link></li>
                        <li id="LI39"><Link className="nav-link u-header__sub-menu-nav-link" to="/apis">Developer APIs</Link></li>
                      </ul>
                    </li>
                    <li id="LI_Misc" className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="right">
                      <Link id="moreMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" to="" aria-haspopup="true" aria-expanded="false">More</Link>
                      <div className="hs-mega-menu w-80 u-header__sub-menu" aria-labelledby="moreMegaMenu">
                        <div className="row u-header__mega-menu-wrapper">
                          <div className="col-sm-6 col-md-4 col-lg mb-4 mb-lg-0">
                            <span className="u-header__sub-menu-title">Developers</span>
                            <ul className="u-header__sub-menu-nav-group mb-3">
                              <li id="LI11"><Link className="nav-link u-header__sub-menu-nav-link" to="https://docs.RocScan.com/" target="_blank"><i
                                className="fa fa-angle-right small mr-1"></i>API
                                Documentation</Link></li>
                              <li id="LI20"><Link className="nav-link u-header__sub-menu-nav-link" to="/verifyContract"><i
                                className="fa fa-angle-right small mr-1"></i>Verify
                                Contract</Link></li>
                              <li id="LI23"><Link className="nav-link u-header__sub-menu-nav-link" to="/opcode-tool"><i
                                className="fa fa-angle-right small mr-1"></i>Byte to
                                Opcode</Link></li>
                              <li id="LI15"><Link className="nav-link u-header__sub-menu-nav-link" to="/pushTx"><i
                                className="fa fa-angle-right small mr-1"></i>Broadcast
                                TXN</Link></li>
                              <li id="LI7"><Link className="nav-link u-header__sub-menu-nav-link" to="/vyper"><i
                                className="fa fa-angle-right small mr-1"></i>Vyper
                                Online Compiler</Link></li>
                              <li id="LI6"><Link className="nav-link u-header__sub-menu-nav-link" to="/contractdiffchecker"><i
                                className="fa fa-angle-right small mr-1"></i>Contract
                                Diff Checker</Link></li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg mb-4 mb-lg-0">
                            <span className="u-header__sub-menu-title">Explore</span>
                            <ul className="u-header__sub-menu-nav-group mb-3">
                              <li id="LI21"><Link className="nav-link u-header__sub-menu-nav-link" to="/gastracker"><i
                                className="fa fa-angle-right small mr-1"></i>Gas
                                Tracker<sup><span
                                  className='badge badge-success font-size-default ml-1'>
                                  New</span></sup></Link></li>
                              <li id="LI9"><Link className="nav-link u-header__sub-menu-nav-link" to="/dextracker"><i
                                className="fa fa-angle-right small mr-1"></i>DEX Tracker
                                <sup><span
                                  className='badge badge-success font-size-default ml-1'>
                                  New</span></sup></Link></li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg mb-4 mb-lg-0">
                            <span className="u-header__sub-menu-title">Tools</span>
                            <ul className="u-header__sub-menu-nav-group mb-3">
                              <li id="LI41"><Link className="nav-link u-header__sub-menu-nav-link" to="/labelcloud"><i
                                className="fa fa-angle-right small mr-1"></i>Label Word
                                Cloud</Link></li>
                              <li id="LI29"><Link className="nav-link u-header__sub-menu-nav-link" to="/verifiedSignatures"><i
                                className="fa fa-angle-right small mr-1"></i>Verified
                                Signature</Link></li>
                              <li id="LI28"><Link className="nav-link u-header__sub-menu-nav-link" to="/tokenapprovalchecker"><i
                                className="fa fa-angle-right small mr-1"></i>Token
                                Approvals <sup><span
                                  className='badge badge-secondary font-size-default ml-1'>
                                  Beta</span></sup></Link></li>
                              <li id="LI50"><Link className="nav-link u-header__sub-menu-nav-link" to="/unitconverter"><i
                                className="fa fa-angle-right small mr-1"></i>Unit
                                Converter </Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="u-header__nav-separator"></li>
                    <li className="nav-item my-2 my-md-0">
                      <Link className="u-header__nav-link" to="/login">
                        <i className="fa fa-user-circle mr-1"></i>Sign In </Link>
                    </li>
                    <li className="u-header__nav-separator"></li>
                    <li className="nav-item hs-has-sub-menu u-header__nav-item my-md-n1" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut">
                      <Link id="explorersWithDropdown" className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle--mobile pr-0" to="" aria-haspopup="true" aria-expanded="false" aria-labelledby="explorersDropdown">
                        <span className="btn btn-sm btn-icon btn-soft-primary cursor-pointer d-none d-md-inline-block">
                          <img className="u-xs-avatar btn-icon__inner"
                            src="/images/logoRoc.png" alt="Binance Logo1" />
                        </span>
                        <span className="d-inline-block d-md-none">Explorers</span>
                      </Link>
                      <ul id="explorersDropdown" className="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer dropdown-menu-md-right animated fadeOut" aria-labelledby="explorersWithDropdown" style={{ minWidth: "130px", display: "none" }}>
                        <li id="LI_Mainnet"><Link className="nav-link u-header__sub-menu-nav-link" to="https://RocScan.com">ROC Mainnet</Link></li>
                        <li id="LI_testnet"><Link className="nav-link u-header__sub-menu-nav-link" to="https://testnet.RocScan.com">ROC Testnet</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}



export default Header;
