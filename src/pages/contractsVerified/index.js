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
        <div className="bg-light py-3" >
          <div className="container">
            <h1 className="h4 font-weight-normal mb-0">Contracts <span className="small text-secondary">With verified
              source codes only</span></h1>
          </div>
        </div >
        <span id="ContentPlaceHolder1_lblAdResult"></span>
        <div id="ContentPlaceHolder1_mainrow" className="container space-bottom-2">
          <div className="card">
            <div className="card-header d-md-flex justify-content-between align-items-center">
              <div className="d-flex flex-wrap">
                <div className="position-relative mr-2 mb-2 mb-md-0">
                  <a id="selectType" className="btn btn-xss btn-custom dropdown-toggle" href="javascript:;" role="button" aria-controls="selectTypeButton" aria-haspopup="true" aria-expanded="false" data-unfold-target="#selectTypeButton" data-unfold-type="css-animation" data-unfold-duration="300"
                    data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="Select View / Filter Type">Select View / Filter Type <span
                      className='text-secondary mx-1'>|</span> Latest 500 Contracts</a>

                  <div id="selectTypeButton" className="dropdown-menu dropdown-unfold" aria-labelledby="selectType" style={{ minWidth: "200px" }}>
                    <a className="dropdown-item" href="/contractsVerified" data-toggle="tooltip" title="Show up to the latest 500 verified contract source codes">Latest 500
                      Contracts Verified</a>
                    <hr className="my-1"></hr>
                    <a className="dropdown-item" href="/contractsVerified?filter=opensourcelicense" data-toggle="tooltip" title="Display Contract Source codes with an Open Source License"><i
                      className="fas fa-lock-open-alt"></i> Open Source License</a>
                    <hr className="my-1"></hr>
                    <a className="dropdown-item" href="/contractsVerified?filter=solc">
                      <img className="mr-1" src="/images/compiler/Solidity_logo.png?v=0.0.2" width="13" />Solidity Compiler</a>
                    <a className="dropdown-item" href="/contractsVerified?filter=vyper">
                      <img className="mr-1" src="/images/compiler/Vyper_logo.png?v=0.0.2" width="13" />Vyper Compiler
                    </a>
                    <a className="dropdown-item" href="/contractsVerified?filter=audit" data-toggle="tooltip" title="Display Contract Source codes with audit report"><i
                      className="far fa-file-alt ml-1 mr-1 text-secondary"></i>Contract Security
                      Audit</a>
                  </div>
                </div>
                <div className="mr-2 mb-2 mb-md-0">
                  <h2 className="card-header-title"></h2>
                </div>
                <div className="mr-2 mb-2 mb-md-0"></div>
              </div>
              <div className="d-flex ml-auto">
                <div className="position-relative order-1 order-md-2" data-toggle="tooltip" title="Search Contract Name">
                  <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration="300"
                    data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                    <i className="fa fa-search btn-icon__inner"></i>
                  </a>
                  <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{ width: "265px" }}>
                    <form action="/contractsVerified" method="get" className="js-focus-state input-group input-group-sm w-100">
                      <input name="cn" type="search" maxlength="60" value="" className="form-control" placeholder="Search Contract Name" />
                      <input name="filter" type="hidden" value="" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" data-toggle="tooltip" title="Search Contract Name">Find</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="transfers" role="tabpanel" aria-labelledby="contractsverified-tab">
                  <div className="d-md-flex justify-content-between mb-4">
                    <p className="mb-2 mb-md-0"><i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ display: "none" }}></i> &nbsp;Showing the last 500 verified contracts source code </p>
                    <nav aria-label="page navigation">
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">First</span></li>
                        <li className="page-item disabled"><span className="page-link"><i
                          className="fa fa-chevron-left small"></i><span
                            className="sr-only">Previous</span></span>
                        </li>
                        <li className="page-item disabled"><span className="page-link">Page <strong
                          className="font-weight-medium">1</strong> of <strong
                            className="font-weight-medium">20</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="/contractsVerified/2" aria-label="Next"><span aria-hidden="true"><i
                          className="fa fa-chevron-right small"></i></span> <span
                            className="sr-only">Next</span></a></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Last"><a className="page-link" href="/contractsVerified/20" aria-label="Last"><span aria-hidden="true">Last</span> <span
                          className="sr-only">Last</span></a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="table-responsive mb-2 mb-md-0">
                    <table className="table table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" width="1">Address</th>
                          <th scope="col">Contract Name</th>
                          <th scope="col">Compiler</th>
                          <th scope="col">Version</th>
                          <th scope="col">Balance</th>
                          <th scope="col">Txns</th>
                          <th scope="col">Setting</th>
                          <th scope="col">Verified</th>
                          <th scope="col">Audited <span data-toggle="tooltip" title="Smart Contracts Audit and Security" size="2"><i
                            className="far fa-info-circle"></i></span></th>
                          <th scope="col">License <a href="/contract-license-types" target="_blank" data-toggle="tooltip" title="Contract Source Code License Type, click for more info"><i
                            className="far fa-info-circle"></i></a></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x3cd84CD845abD98F10cA7a2B46ccF95e560BBDAa' href='/address/0x3cd84CD845abD98F10cA7a2B46ccF95e560BBDAa#code'
                              className='hash-tag text-truncate'>0x3cd84CD845abD98F10cA7a2B46ccF95e560BBDAa</a>
                          </td>
                          <td>KinAlvey</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>12</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>Unlicense</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x07fA653B8916C58Ad2db065ADb44A45b57064906' href='/address/0x07fA653B8916C58Ad2db065ADb44A45b57064906#code'
                              className='hash-tag text-truncate'>0x07fA653B8916C58Ad2db065ADb44A45b57064906</a>
                          </td>
                          <td>GreenDot1</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='7 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.7.6
                          </td>
                          <td>0 ROC</td>
                          <td>5</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x5ce8e55e256e4bd58cea94963d4cb280de6b8bb2' href='/address/0x5ce8e55e256e4bd58cea94963d4cb280de6b8bb2#code'
                              className='hash-tag text-truncate'>0x5ce8e55e256e4bd58cea94963d4cb280de6b8bb2</a>
                          </td>
                          <td>SFCapital</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>1</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x790Bee866bBeA67c0AF14fDDee4C327032B8fC0D' href='/address/0x790Bee866bBeA67c0AF14fDDee4C327032B8fC0D#code'
                              className='hash-tag text-truncate'>0x790Bee866bBeA67c0AF14fDDee4C327032B8fC0D</a>
                          </td>
                          <td>CrytoTool</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='1 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.15
                          </td>
                          <td>0 ROC</td>
                          <td>7</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x444cF5dDC70d7fc3b80EF2dC816FCd87EAb567fd' href='/address/0x444cF5dDC70d7fc3b80EF2dC816FCd87EAb567fd#code'
                              className='hash-tag text-truncate'>0x444cF5dDC70d7fc3b80EF2dC816FCd87EAb567fd</a>
                          </td>
                          <td>MOAI</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.7
                          </td>
                          <td>0 ROC</td>
                          <td>5</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                              className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x34a458557A18E6AD4B730e16755487dce658EC62' href='/address/0x34a458557A18E6AD4B730e16755487dce658EC62#code'
                              className='hash-tag text-truncate'>0x34a458557A18E6AD4B730e16755487dce658EC62</a>
                          </td>
                          <td>AlphaLabz</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='1 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.15
                          </td>
                          <td>0 ROC</td>
                          <td>8</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x42c1b9692cab732cf08a49b5bcf77d03e930516c' href='/address/0x42c1b9692cab732cf08a49b5bcf77d03e930516c#code'
                              className='hash-tag text-truncate'>0x42c1b9692cab732cf08a49b5bcf77d03e930516c</a>
                          </td>
                          <td>Powerful</td>
                          <td>Solidity(Multi)</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='9 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.6.12
                          </td>
                          <td>0 ROC</td>
                          <td>1</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Library Used"><i
                              className="fas fa-book-open btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xd3feae9bc694cb0fbc92131681441149f3752fd5' href='/address/0xd3feae9bc694cb0fbc92131681441149f3752fd5#code'
                              className='hash-tag text-truncate'>0xd3feae9bc694cb0fbc92131681441149f3752fd5</a>
                          </td>
                          <td>ERC20Token</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='12 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.5.16
                          </td>
                          <td>0 ROC</td>
                          <td>1</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                            className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x831be9aaab288e5838385f9599b66d018e55b901' href='/address/0x831be9aaab288e5838385f9599b66d018e55b901#code'
                              className='hash-tag text-truncate'>0x831be9aaab288e5838385f9599b66d018e55b901</a>
                          </td>
                          <td>HOSHI</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='4 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.10
                          </td>
                          <td>0 ROC</td>
                          <td>33</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                              className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x1EC39cE87CC14E5e83F2d29D69e85095A622BC24' href='/address/0x1EC39cE87CC14E5e83F2d29D69e85095A622BC24#code'
                              className='hash-tag text-truncate'>0x1EC39cE87CC14E5e83F2d29D69e85095A622BC24</a>
                          </td>
                          <td>wALV</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>2</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                              className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x5a55da1042cbaf072af137aa23be39e232f02df6' href='/address/0x5a55da1042cbaf072af137aa23be39e232f02df6#code'
                              className='hash-tag text-truncate'>0x5a55da1042cbaf072af137aa23be39e232f02df6</a>
                          </td>
                          <td>ERC20Token</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='12 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.5.16
                          </td>
                          <td>0 ROC</td>
                          <td>2</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                            className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x86ca2da6dc96a8d3a50e2aaee27686fd2d0396cf' href='/address/0x86ca2da6dc96a8d3a50e2aaee27686fd2d0396cf#code'
                              className='hash-tag text-truncate'>0x86ca2da6dc96a8d3a50e2aaee27686fd2d0396cf</a>
                          </td>
                          <td>AlveyChain20</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.7
                          </td>
                          <td>0 ROC</td>
                          <td>14</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>Unlicense</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xc632d656b6d07f3e13a39506b8f9dedd7fcbff21' href='/address/0xc632d656b6d07f3e13a39506b8f9dedd7fcbff21#code'
                              className='hash-tag text-truncate'>0xc632d656b6d07f3e13a39506b8f9dedd7fcbff21</a>
                          </td>
                          <td>BTST</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>16</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x337d9d5830A4AE7F2E152615B131EF801e7D9D7d' href='/address/0x337d9d5830A4AE7F2E152615B131EF801e7D9D7d#code'
                              className='hash-tag text-truncate'>0x337d9d5830A4AE7F2E152615B131EF801e7D9D7d</a>
                          </td>
                          <td>WANGU</td>
                          <td>Solidity</td>
                          <td>0.8.16</td>
                          <td>0 ROC</td>
                          <td>6</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                              className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xec4391fc95dd054a409b0acf495dad242224d22f' href='/address/0xec4391fc95dd054a409b0acf495dad242224d22f#code'
                              className='hash-tag text-truncate'>0xec4391fc95dd054a409b0acf495dad242224d22f</a>
                          </td>
                          <td>JoninInu</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.11
                          </td>
                          <td>0<b>.</b>000147306848329697 ROC</td>
                          <td>10</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x130058336bd1c947b188f3065a6023032bbff83e' href='/address/0x130058336bd1c947b188f3065a6023032bbff83e#code'
                              className='hash-tag text-truncate'>0x130058336bd1c947b188f3065a6023032bbff83e</a>
                          </td>
                          <td>InfinityBrave</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>12</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xc6885898eebc019a888cb34deb148a4ccbc0cb96' href='/address/0xc6885898eebc019a888cb34deb148a4ccbc0cb96#code'
                              className='hash-tag text-truncate'>0xc6885898eebc019a888cb34deb148a4ccbc0cb96</a>
                          </td>
                          <td>Gamescom</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.7
                          </td>
                          <td>0 ROC</td>
                          <td>8</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xf04837b705b7f4b1931f95757f4a473cc9b4573c' href='/address/0xf04837b705b7f4b1931f95757f4a473cc9b4573c#code'
                              className='hash-tag text-truncate'>0xf04837b705b7f4b1931f95757f4a473cc9b4573c</a>
                          </td>
                          <td>Ggool</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.4
                          </td>
                          <td>0 ROC</td>
                          <td>23</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x7C61bAa20E6df3F6129Ce9de88c144b75247124C' href='/address/0x7C61bAa20E6df3F6129Ce9de88c144b75247124C#code'
                              className='hash-tag text-truncate'>0x7C61bAa20E6df3F6129Ce9de88c144b75247124C</a>
                          </td>
                          <td>RoastBeefBusd</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='12 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.4.26
                          </td>
                          <td>0 ROC</td>
                          <td>0</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> <span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Constructor Arguments"><i
                              className="fas fa-wrench btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x55a3C4358a3465759E9e93A857b14027569278D0' href='/address/0x55a3C4358a3465759E9e93A857b14027569278D0#code'
                              className='hash-tag text-truncate'>0x55a3C4358a3465759E9e93A857b14027569278D0</a>
                          </td>
                          <td>SUN</td>
                          <td>Solidity</td>
                          <td>0.8.16</td>
                          <td>0 ROC</td>
                          <td>7</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x647e7b5bFc32Fa4Ee4aA9A7f94C746A5355d819f' href='/address/0x647e7b5bFc32Fa4Ee4aA9A7f94C746A5355d819f#code'
                              className='hash-tag text-truncate'>0x647e7b5bFc32Fa4Ee4aA9A7f94C746A5355d819f</a>
                          </td>
                          <td>HTX</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='3 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.14
                          </td>
                          <td>0 ROC</td>
                          <td>554</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>None</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xBBf90BB476871EdE0DfD095ABCbE4F8a4d58103a' href='/address/0xBBf90BB476871EdE0DfD095ABCbE4F8a4d58103a#code'
                              className='hash-tag text-truncate'>0xBBf90BB476871EdE0DfD095ABCbE4F8a4d58103a</a>
                          </td>
                          <td>MOON</td>
                          <td>Solidity</td>
                          <td>0.8.16</td>
                          <td>0 ROC</td>
                          <td>3</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xbb60332bdcf065506c079c44327844acd6b40c04' href='/address/0xbb60332bdcf065506c079c44327844acd6b40c04#code'
                              className='hash-tag text-truncate'>0xbb60332bdcf065506c079c44327844acd6b40c04</a>
                          </td>
                          <td>PARACETAMOLINU</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='5 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.7
                          </td>
                          <td>0 ROC</td>
                          <td>1</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>Unlicense</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0xbAEe9D7DF337710db3D58Ebec095beb7C9B8D7A9' href='/address/0xbAEe9D7DF337710db3D58Ebec095beb7C9B8D7A9#code'
                              className='hash-tag text-truncate'>0xbAEe9D7DF337710db3D58Ebec095beb7C9B8D7A9</a>
                          </td>
                          <td>BitciRacingToken</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='1 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.8.15
                          </td>
                          <td>0 ROC</td>
                          <td>8</td>
                          <td>-</td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                        <tr>
                          <td><span data-toggle='tooltip' title='Verified Code' size='2'><i
                            className="fas fa-check-circle text-success"></i></span> <a data-toggle='tooltip' title='0x3b05D0f5af5B1dc00Cde791fe16657a2baB2FfFc' href='/address/0x3b05D0f5af5B1dc00Cde791fe16657a2baB2FfFc#code'
                              className='hash-tag text-truncate'>0x3b05D0f5af5B1dc00Cde791fe16657a2baB2FfFc</a>
                          </td>
                          <td>GreenDot</td>
                          <td>Solidity</td>
                          <td><span data-boundary='viewport' data-toggle='tooltip' title='7 known solidity compiler vulnerabilities exists for this compiler version'><i
                            className='fa fa-exclamation-triangle text-warning'></i></span> 0.7.6
                          </td>
                          <td>0 ROC</td>
                          <td>1</td>
                          <td><span aria-hidden="true" className="btn btn-xs btn-icon btn-soft-secondary rounded-circle" data-toggle='tooltip' title="Optimization Enabled"><i
                            className="fas fa-bolt btn-icon__inner"></i></span> </td>
                          <td>8/27/2022</td>
                          <td>-</td>
                          <td>MIT</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <form method="post" action="./contractsVerified" id="ctl00">
                    <div className="aspNetHidden">
                      <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                      <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                      <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                      <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="TB+9nNdnYDbUx825ZI6Y2qKLPQkPiZ2zUSznaenALzAUtWrC8/SHnoR1FTjrhbBujrYArS8sX+QXtMzEZEhd1TFrsc+Dc6gqcyKg/Yo8bQc=" />
                    </div>

                    <div className="aspNetHidden">
                      <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="8A79B484" />
                      <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="Uic8f/oRdSfRhFDEUZCWNASkgRL7Mdqq/45lJSlxGhB1aPvdiPp/9h474aHAuTszYt8iPFuk1PvdjG6Ehqv28gRNGIJGbryQXusPnuAB+QGXgD05HN8u0tZa7N2w4vaPOcZc5pdOBshefMikrI6H0aAj7UXXhvwoiafiQo42BdXvkB9Gvr/78l5kZ124WI4Q7Tht++gZZMFjhExMTtw+iQ=="
                      />
                    </div>
                    <div className="d-md-flex justify-content-between my-3">
                      <div className="d-flex align-items-center text-secondary mb-2 mb-md-0">
                        <span id="ContentPlaceHolder1_pageRecords" data-toggle="tooltip" title="Records per Page"> Show <select
                          name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage"
                          onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)"
                          id="ContentPlaceHolder1_ddlRecordsPerPage"
                          className="custom-select custom-select-xs mx-2">
                          <option value="10">10</option>
                          <option selected="selected" value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select> Records </span>
                      </div>
                      <ul className="pagination pagination-sm mb-0">
                        <li className="page-item disabled"><span className="page-link">First</span></li>
                        <li className="page-item disabled"><span className="page-link"><i
                          className="fa fa-chevron-left small"></i><span
                            className="sr-only">Previous</span></span>
                        </li>
                        <li className="page-item disabled"><span className="page-link">Page <strong
                          className="font-weight-medium">1</strong> of <strong
                            className="font-weight-medium">20</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="/contractsVerified/2" aria-label="Next"><span aria-hidden="true"><i
                          className="fa fa-chevron-right small"></i></span> <span
                            className="sr-only">Next</span></a></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Last"><a className="page-link" href="/contractsVerified/20" aria-label="Last"><span aria-hidden="true">Last</span> <span
                          className="sr-only">Last</span></a></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right mr-1"><br />Source Code <a href="source-code-usage-terms">Terms of Usage.</a>
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
