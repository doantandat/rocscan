import React, { Component } from "react";


import { Link } from "react-router-dom";
class Footer extends Component
{




  render()
  {



    return (
      <> <footer className="bg-dark py-4" style={{ backgroundImage: "url(/images/svg/components/abstract-shapes-20.svg?v=2)" }}>
        <div className="container">
          <div className="row justify-content-md-between font-size-1 py-2">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="d-flex h-100 flex-column">
                <div className="d-flex align-items-center mb-4">
                  <img width="25" src="/images/logoRoc.png" alt="Binance Logo" />
                  <span className="h5 text-white mb-0 ml-3">Rocket Raccoon</span>
                </div>
                <p className="text-white"> RocScan is a Block Explorer and Analytics Platform for ROC Smart Chain
                </p>
                <div className="d-flex align-items-center mb-4">
                  <span>
                    <button type="button"
                      className="btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2"
                      onclick="addNetwork('web3');">
                      <img className="mr-1" width="15" src="/images/svg/brands/metamask.svg" alt="Metamask" />
                      Add ROC Network </button>
                  </span>
                  <Link className="btn btn-xss btn-soft-light mr-2" to="/settings">
                    <i className="fa fa-cogs mr-1"></i>Preferences </Link>
                  <button id="darkModaBtn" type="button" data-toggle="tooltip" data-title="Day/Night Mode" className="btn btn-sm btn-icon btn-soft-light">
                    <i id="darkModaBtnIcon" className="fa fa-moon"></i></button>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <h4 className="h6 text-white heading-border">Company</h4>
              <ul className="list-group list-group-sm list-group-transparent list-group-white list-group-flush list-group-borderless mb-0">
                <li><Link className="list-group-item" to="/contactusadvertise">Advertise<sup><span
                  className="badge badge-success font-size-default ml-1">New</span></sup></Link></li>
                <li><Link className="list-group-item" to="/delegate">Delegate to RocScan<sup><span
                  className="badge badge-info font-size-default ml-1">Staking</span></sup></Link></li>
                <li><Link className="list-group-item" to="/contactus">Contact Us</Link></li>
                <li><Link className="list-group-item" to="/brandassets">Brand Assets</Link></li>
                <li><a className="list-group-item" to="/terms">Terms of Service</a></li>
                <li><a className="list-group-item" href="//etherscan.io/bugbounty" target="_blank">Bug Bounty</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <h4 className="h6 text-white heading-border">Community</h4>
              <ul className="list-group list-group-sm list-group-transparent list-group-white list-group-flush list-group-borderless mb-0">
                <li><a className="list-group-item" href="https://docs.RocScan.com/" target="_blank">API
                  Documentation</a></li>
                <li><a className="list-group-item" target="_blank" href="https://RocScan.freshdesk.com/support/solutions">Knowledge Base</a></li>
                <li><a className="list-group-item" rel="nofollow noopener" target="_blank" href="https://RocScan.freshstatus.io/">Network Status</a></li>
                <li><a className="list-group-item" rel="nofollow noopener" target="_blank" href="https://www.binance.org/en/smartChain">Learn ROC</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4 mb-lg-0">
              <h4 className="h6 text-white heading-border">Products</h4>
              <ul className="list-group list-group-sm list-group-transparent list-group-white list-group-flush list-group-borderless mb-0">
                <li><Link className="list-group-item" to="/apis" title="Developer APIs">Developer APIs</Link></li>
                <li><a className="list-group-item" href="https://etherscan.io" title="Etherscan, Ethereum Explorer" target="_blank">Etherscan</a></li>
                <li><a className="list-group-item" href="https://blockscan.com/" title="Decentralized Web (.ens,.crypto) Search Engine" target="_blank">Blockscan</a>
                </li>
                <li><a className="list-group-item" href="https://diemscan.io/" title="Blockchain Explorer for Diem" target="_blank">DiemScan</a></li>
                <li><a className="list-group-item" href="https://polygonscan.com" title="Polygonscan, Polygon PoS Chain Explorer" target="_blank">Polygonscan</a></li>
              </ul>
            </div>
          </div>
          <hr className="opacity-md"></hr>
          <div className="row justify-content-between align-items-center font-size-1">
            <div className="col-md-6 mb-2 mb-md-0 d-flex">
              <p className="mb-0 text-white">RocScan © 2022 (ROC-D) <span className="mx-1">|</span> ⛏ Built by the same team behind <a className="text-primary" href="https://etherscan.io/" target="_blank"><b>Etherscan</b></a> <span className="mx-1">|</span> <a className="text-white-70" href="/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f">Donate</a>                        <i className="fas fa-heart text-danger"></i>
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="btn btn-sm btn-icon btn-soft-light btn-pill" to="/contactus" data-toggle="tooltip" data-placement="top" title="Contact Us">
                    <i className="far fa-envelope btn-icon__inner"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-sm btn-icon btn-soft-light btn-pill" href="https://twitter.com/RocScan" rel="nofollow noopener" target="_blank" data-toggle="tooltip" data-placement="top" title="Twitter">
                    <i className="fab fa-twitter btn-icon__inner"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-sm btn-icon btn-soft-light btn-pill" href="https://medium.com/@RocScan" rel="nofollow noopener" target="_blank" data-toggle="tooltip" data-placement="top" title="Medium">
                    <i className="fab fa-medium btn-icon__inner"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        <div id="divcookie" className="fixed-bottom w-md-75 w-xl-50 mx-md-auto mx-3" style={{ display: "none" }}>
          <div className="alert alert-light border shadow p-3" role="alert">
            <div className="d-md-flex justify-content-center align-items-center">
              <span>
                <p className="text-dark mr-3 mb-2 mb-md-0">
                  <i className="far fa-cookie-bite text-secondary mr-1"></i>This website <Link
                    to='/terms#cookiestatement' target='_blank'>uses cookies to improve your experience</Link>
                  and has an updated <Link to='/privacyPolicy'>Privacy Policy</Link>.
                </p>
              </span>
              <div>
                <button id="btnCookie" className="btn btn-sm btn-primary text-nowrap py-1" data-dismiss="alert" aria-label="Close">Got It</button>
              </div>
            </div>
          </div>
        </div>
        <a className="js-go-to u-go-to" href="#" data-position='{"bottom": 20, "right": 15 }' data-type="fixed" data-offset-top="400" data-compensation="#header" data-show-effect="slideInUp" data-hide-effect="slideOutDown">
          <span className="fa fa-arrow-up u-go-to__inner"></span>
        </a>
      </>
    );
  }
}



export default Footer;
