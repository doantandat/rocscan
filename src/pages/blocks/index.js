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
          <div className="d-md-flex justify-content-between align-items-center py-3">
            <div className="mb-1 mb-md-0">
              <h1 className="h4 font-weight-normal mb-0">Blocks&nbsp;<span className="small text-secondary"></span>
                <p className="mb-0 text-break small">
                  <span className="small text-secondary"></span>
                </p>
              </h1>
            </div>
            <div><span style={{ minWidth: '68px' }} className='u-label u-label--sm u-label--warning rounded text-dark text-center'><span
              data-toggle='tooltip' data-boundary='viewport' data-html='true' title=''
              data-original-title='Total Sum of Fees Burnt since the introduction of BEP-95'
              aria-describedby='tooltip847798'>🔥 Fees Burnt: </span><span data-toggle='tooltip' title='$32,226,443.90'>114,444.56 ROC</span></span>
            </div>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-body">
              <div id="ContentPlaceHolder1_topPageDiv" className="d-md-flex justify-content-between mb-4">
                <p className="mb-2 mb-md-0"><i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ display: "none" }}></i> Block #12802670 to #12802694 (Total of 20,802,695 blocks) </p>
                <nav aria-label="page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    {/* <li className="page-item disabled"><span className="page-link">First</span></li> */}
                    <li className="page-item disabled"><span className="page-link"><i
                      className="fa fa-chevron-left small"></i></span><span className="sr-only">Previous</span></li>
                    <li className="page-item disabled"><span className="page-link text-nowrap">Page <strong
                      className="font-weight-medium">1</strong> of <strong
                        className="font-weight-medium">1</strong></span></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="blocks?p=2" aria-label="Next"><span aria-hidden="True"><i
                      className="fa fa-chevron-right small"></i></span> <span
                        className="sr-only">Next</span></a></li>
                    {/* <li className="page-item"><a className="page-link" href="blocks?p=832108"><span
                      aria-hidden="True">Last</span> <span className="sr-only">Last</span></a>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="table-responsive mb-2 mb-md-0">
                <table className="table table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <a href="javascript:;" onclick="switchAgeToDateTime(this)" id="lnkAgeDateTime"></a>
                      </th>
                      <th scope="col">Txn</th>
                      <th scope="col">Validator</th>
                      <th scope="col">Gas Used</th>
                      <th scope="col">Gas Limit</th>
                      <th scope="col">Reward</th>
                      <th scope="col">Fees Burnt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href='/block/12802694'>12802694</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='13 secs ago'>2022-08-27 8:08:30</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:30'>13 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802694'>120</a></td>
                      <td><a href='/address/0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73'>Validator: Rocket Raccoon
                        III</a></td>
                      <td>12,350,114 <span className="small text-secondary">(16.42%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: '16.42%' }} aria-valuenow='16.42' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,226,584</td>
                      <td>0<b>.</b>09771 ROC</td>
                      <td>0<b>.</b>00977 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802693'>12802693</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='16 secs ago'>2022-08-27 8:08:27</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:27'>16 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802693'>135</a></td>
                      <td><a href='/address/0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a'>Validator: Rocket Raccoon</a>
                      </td>
                      <td>16,253,141 <span className="small text-secondary">(21.55%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "21.55%" }} aria-valuenow='21.55' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,425,982</td>
                      <td>0<b>.</b>09063 ROC</td>
                      <td>0<b>.</b>00906 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802692'>12802692</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='19 secs ago'>2022-08-27 8:08:24</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:24'>19 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802692'>94</a></td>
                      <td><a href='/address/0x72b61c6014342d914470ec7ac2975be345796c2b' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x72b61c6014342d914470ec7ac2975be345796c2b'>Validator: Rocket Raccoon
                        Club</a></td>
                      <td>9,011,847 <span className="small text-secondary">(11.96%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "11.96%" }} aria-valuenow='11.96' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,352,397</td>
                      <td>0<b>.</b>04861 ROC</td>
                      <td>0<b>.</b>00486 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802691'>12802691</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='22 secs ago'>2022-08-27 8:08:21</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:21'>22 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802691'>81</a></td>
                      <td><a href='/address/0x70f657164e5b75689b64b7fd1fa275f334f28e18' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x70f657164e5b75689b64b7fd1fa275f334f28e18'>Validator:
                        Rocket Raccoon</a></td>
                      <td>8,742,277 <span className="small text-secondary">(11.56%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "11.56%" }} aria-valuenow='11.56' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,596,470</td>
                      <td>0<b>.</b>04871 ROC</td>
                      <td>0<b>.</b>00487 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802690'>12802690</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='25 secs ago'>2022-08-27 8:08:18</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:18'>25 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802690'>94</a></td>
                      <td><a href='/address/0x685b1ded8013785d6623cc18d214320b6bb64759' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x685b1ded8013785d6623cc18d214320b6bb64759'>Validator:
                        Rocket Raccoon</a></td>
                      <td>10,079,324 <span className="small text-secondary">(13.35%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "13.35%" }} aria-valuenow='13.35' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,522,719</td>
                      <td>0<b>.</b>05393 ROC</td>
                      <td>0<b>.</b>00539 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802689'>12802689</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='28 secs ago'>2022-08-27 8:08:15</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:15'>28 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802689'>80</a></td>
                      <td><a href='/address/0x61dd481a114a2e761c554b641742c973867899d3' className='hash-tag text-truncate' data-toggle='tooltip' title='0x61dd481a114a2e761c554b641742c973867899d3'>0x61dd481a114a2e761c554b641742c973867899d3</a>
                      </td>
                      <td>8,977,434 <span className="small text-secondary">(11.90%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "11.90%" }} aria-valuenow='11.90' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,449,040</td>
                      <td>0<b>.</b>04724 ROC</td>
                      <td>0<b>.</b>00472 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802688'>12802688</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='31 secs ago'>2022-08-27 8:08:12</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:12'>31 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802688'>100</a></td>
                      <td><a href='/address/0x3f349bbafec1551819b8be1efea2fc46ca749aa1' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x3f349bbafec1551819b8be1efea2fc46ca749aa1'>Validator: Rocket Raccoon</a></td>
                      <td>13,219,709 <span className="small text-secondary">(17.54%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: '17.54%' }} aria-valuenow='17.54' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,375,433</td>
                      <td>0<b>.</b>06791 ROC</td>
                      <td>0<b>.</b>00679 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802687'>12802687</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='34 secs ago'>2022-08-27 8:08:09</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:09'>34 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802687'>122</a></td>
                      <td><a href='/address/0x2d4c407bbe49438ed859fe965b140dcf1aab71a9' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x2d4c407bbe49438ed859fe965b140dcf1aab71a9'>Validator:
                        Rocket Raccoon</a></td>
                      <td>14,270,351 <span className="small text-secondary">(18.88%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "18.88%" }} aria-valuenow='18.88' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,587,079</td>
                      <td>0<b>.</b>07682 ROC</td>
                      <td>0<b>.</b>00768 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802686'>12802686</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='37 secs ago'>2022-08-27 8:08:06</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:06'>37 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802686'>94</a></td>
                      <td><a href='/address/0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9' className='hash-tag text-truncate' data-toggle='tooltip' title='0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9'>0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9</a>
                      </td>
                      <td>9,964,759 <span className="small text-secondary">(13.23%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "13.23%" }} aria-valuenow='13.23' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,292,967</td>
                      <td>0<b>.</b>056 ROC</td>
                      <td>0<b>.</b>0056 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802685'>12802685</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='40 secs ago'>2022-08-27 8:08:03</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:03'>40 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802685'>99</a></td>
                      <td><a href='/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b'>Validator: Rocket Raccoon</a>
                      </td>
                      <td>9,940,814 <span className="small text-secondary">(13.25%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "13.25%" }} aria-valuenow='13.25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,000,000</td>
                      <td>0<b>.</b>05821 ROC</td>
                      <td>0<b>.</b>00582 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802684'>12802684</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='43 secs ago'>2022-08-27 8:08:00</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:08:00'>43 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802684'>178</a></td>
                      <td><a href='/address/0x2465176c461afb316ebc773c61faee85a6515daa' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x2465176c461afb316ebc773c61faee85a6515daa'>Validator: Rocket Raccoon</a></td>
                      <td>14,680,724 <span className="small text-secondary">(19.57%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "19.57%" }} aria-valuenow='19.57' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,998,856</td>
                      <td>0<b>.</b>12159 ROC</td>
                      <td>0<b>.</b>01215 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802683'>12802683</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='46 secs ago'>2022-08-27 8:07:57</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:57'>46 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802683'>108</a></td>
                      <td><a href='/address/0xef0274e31810c9df02f98fafde0f841f4e66a1cd' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xef0274e31810c9df02f98fafde0f841f4e66a1cd'>Validator:
                        Rocket Raccoon</a></td>
                      <td>9,351,620 <span className="small text-secondary">(12.52%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "12.52%" }} aria-valuenow='12.52' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,707,033</td>
                      <td>0<b>.</b>05657 ROC</td>
                      <td>0<b>.</b>00565 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802682'>12802682</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='49 secs ago'>2022-08-27 8:07:54</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:54'>49 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802682'>114</a></td>
                      <td><a href='/address/0xee226379db83cffc681495730c11fdde79ba4c0c' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xee226379db83cffc681495730c11fdde79ba4c0c'>Validator:
                        Rocket Raccoon</a></td>
                      <td>13,055,833 <span className="small text-secondary">(17.41%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "17.41%" }} aria-valuenow='17.41' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,000,000</td>
                      <td>0<b>.</b>07035 ROC</td>
                      <td>0<b>.</b>00703 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802681'>12802681</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='52 secs ago'>2022-08-27 8:07:51</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:51'>52 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802681'>80</a></td>
                      <td><a href='/address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xea0a6e3c511bbd10f4519ece37dc24887e11b55d'>Validator:
                        Rocket Raccoon</a></td>
                      <td>10,147,207 <span className="small text-secondary">(13.52%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "13.52%" }} aria-valuenow='13.52' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,073,241</td>
                      <td>0<b>.</b>06109 ROC</td>
                      <td>0<b>.</b>0061 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802680'>12802680</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='55 secs ago'>2022-08-27 8:07:48</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:48'>55 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802680'>107</a></td>
                      <td><a href='/address/0xe9ae3261a475a27bb1028f140bc2a7c843318afd' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xe9ae3261a475a27bb1028f140bc2a7c843318afd'>Validator:
                        Rocket Raccoon</a></td>
                      <td>14,716,384 <span className="small text-secondary">(19.62%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "19.62%" }} aria-valuenow='19.62' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,000,000</td>
                      <td>0<b>.</b>07608 ROC</td>
                      <td>0<b>.</b>0076 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802679'>12802679</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='58 secs ago'>2022-08-27 8:07:45</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:45'>58 secs ago</span>
                      </td>
                      <td><a href='/txs?block=12802679'>107</a></td>
                      <td><a href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                        Rocket Raccoon</a></td>
                      <td>13,106,367 <span className="small text-secondary">(17.50%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "17.50%" }} aria-valuenow='17.50' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,896,313</td>
                      <td>0<b>.</b>06792 ROC</td>
                      <td>0<b>.</b>00679 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802678'>12802678</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:42</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:42'>1 min ago</span></td>
                      <td><a href='/txs?block=12802678'>152</a></td>
                      <td><a href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator: Rocket Raccoon</a>
                      </td>
                      <td>13,486,766 <span className="small text-secondary">(18.08%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "18.08%" }} aria-valuenow='18.08' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,604,889</td>
                      <td>0<b>.</b>07236 ROC</td>
                      <td>0<b>.</b>00723 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802677'>12802677</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:39</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:39'>1 min ago</span></td>
                      <td><a href='/txs?block=12802677'>117</a></td>
                      <td><a href='/address/0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5'>Validator: Rocket Raccoon</a></td>
                      <td>13,102,752 <span className="small text-secondary">(17.58%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "17.58%" }} aria-valuenow='17.58' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,532,105</td>
                      <td>0<b>.</b>08119 ROC</td>
                      <td>0<b>.</b>00811 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802676'>12802676</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:36</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:36'>1 min ago</span></td>
                      <td><a href='/txs?block=12802676'>113</a></td>
                      <td><a href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                        Rocket Raccoon</a></td>
                      <td>10,875,529 <span className="small text-secondary">(14.53%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "14.53%" }} aria-valuenow='14.53' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>74,824,386</td>
                      <td>0<b>.</b>05718 ROC</td>
                      <td>0<b>.</b>00571 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802675'>12802675</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:33</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:33'>1 min ago</span></td>
                      <td><a href='/txs?block=12802675'>106</a></td>
                      <td><a href='/address/0xa6f79b60359f141df90a0c745125b131caaffd12' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xa6f79b60359f141df90a0c745125b131caaffd12'>Validator:
                        Rocket Raccoon</a></td>
                      <td>16,178,873 <span className="small text-secondary">(21.54%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "21.54%" }} aria-valuenow='21.54' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,117,813</td>
                      <td>0<b>.</b>08576 ROC</td>
                      <td>0<b>.</b>00857 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802674'>12802674</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:30</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:30'>1 min ago</span></td>
                      <td><a href='/txs?block=12802674'>141</a></td>
                      <td><a href='/address/0x9f8ccdafcc39f3c7d6ebf637c9151673cbc36b88' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x9f8ccdafcc39f3c7d6ebf637c9151673cbc36b88'>Validator: Rocket Raccoon</a>
                      </td>
                      <td>17,787,789 <span className="small text-secondary">(23.62%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "23.62%" }} aria-valuenow='23.62' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,307,757</td>
                      <td>0<b>.</b>1063 ROC</td>
                      <td>0<b>.</b>01063 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802673'>12802673</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:27</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:27'>1 min ago</span></td>
                      <td><a href='/txs?block=12802673'>132</a></td>
                      <td><a href='/address/0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73'>Validator: Rocket Raccoon</a></td>
                      <td>15,931,633 <span className="small text-secondary">(21.18%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "21.18%" }} aria-valuenow='21.18' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,234,288</td>
                      <td>0<b>.</b>08286 ROC</td>
                      <td>0<b>.</b>00828 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802672'>12802672</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:24</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:24'>1 min ago</span></td>
                      <td><a href='/txs?block=12802672'>109</a></td>
                      <td><a href='/address/0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a'>Validator: Rocket Raccoon</a>
                      </td>
                      <td>19,846,656 <span className="small text-secondary">(26.32%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "26.32%;" }} aria-valuenow='26.32' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,412,578</td>
                      <td>0<b>.</b>10165 ROC</td>
                      <td>0<b>.</b>01016 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802671'>12802671</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:21</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:21'>1 min ago</span></td>
                      <td><a href='/txs?block=12802671'>100</a></td>
                      <td><a href='/address/0x72b61c6014342d914470ec7ac2975be345796c2b' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x72b61c6014342d914470ec7ac2975be345796c2b'>Validator: Rocket Raccoon</a></td>
                      <td>10,987,996 <span className="small text-secondary">(14.58%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "14.58%" }} aria-valuenow='14.58' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,339,006</td>
                      <td>0<b>.</b>08468 ROC</td>
                      <td>0<b>.</b>00846 ROC</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12802670'>12802670</a></td>
                      <td className='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='1 min ago'>2022-08-27 8:07:18</span></td>
                      <td className='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-08-27 8:07:18'>1 min ago</span></td>
                      <td><a href='/txs?block=12802670'>107</a></td>
                      <td><a href='/address/0x70f657164e5b75689b64b7fd1fa275f334f28e18' className='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x70f657164e5b75689b64b7fd1fa275f334f28e18'>Validator:
                        Rocket Raccoon</a></td>
                      <td>11,146,165 <span className="small text-secondary">(14.75%)</span>
                        <div className='progress mt-1' style={{ height: '2px' }}>
                          <div className='progress-bar bg-primary' role='progressbar' style={{ width: "14.75%" }} aria-valuenow='14.75' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                      </td>
                      <td>75,568,886</td>
                      <td>0<b>.</b>05856 ROC</td>
                      <td>0<b>.</b>00585 ROC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="ContentPlaceHolder1_pageRecords">
                <form method="post" action="./blocks" id="ctl00">
                  <div className="aspNetHidden">
                    <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                    <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                    <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                    <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="icknrBZ0FvljHGLxhf/Vx8oxkxSlrXpoQ4VMcWYlmioDWI9p8qEZYvVdvUvs8G2pxnDkObaQsV72SHLLqvxKR53EgbgGndKoxLGP8+8w07g=" />
                  </div>

                  <div className="aspNetHidden">
                    <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="1E110816" />
                    <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="OPOxjTPb54l2vvOU4dd+RkcR0V+7pwruoB/ehzR2PNgluZaoyVlT8fbDbVjYInTG8Mb8uMBxM7aEu3OG5M26qQ5oGPBWKfNSyvBYoy4ZTQW0kTfdUVKQTvYW+14e/HABsklX2kgTmW5Qd8xD9hq0Vm3U9YSFMZ/L5nenDep1cbLsLfNLbnaYfXNKyWHGlgMvWhLip0e7tpArgbFLpL48Gg=="
                    />
                  </div>
                  <div className="d-md-flex justify-content-between my-3">
                    <div className="d-flex align-items-center text-secondary mb-2 mb-md-0"> Show <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlRecordsPerPage"
                      className="custom-select custom-select-xs mx-2">
                      <option value="10">10</option>
                      <option selected="selected" value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select> Records </div>
                    <nav className="mb-4 mb-md-0" aria-label="page navigation">
                      <ul className="pagination pagination-sm mb-0">
                        {/* <li className="page-item disabled"><span className="page-link">First</span></li> */}
                        <li className="page-item disabled"><span className="page-link"><i
                          className="fa fa-chevron-left small"></i></span><span className="sr-only">Previous</span></li>
                        <li className="page-item disabled"><span className="page-link text-nowrap">Page
                          <strong className="font-weight-medium">1</strong> of <strong
                            className="font-weight-medium">1</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="blocks?p=2" aria-label="Next"><span
                          aria-hidden="True"><i
                            className="fa fa-chevron-right small"></i></span> <span
                              className="sr-only">Next</span></a></li>
                        {/* <li className="page-item"><a className="page-link" href="blocks?p=832108"><span
                          aria-hidden="True">Last</span> <span
                            className="sr-only">Last</span></a></li> */}
                      </ul>
                    </nav>
                  </div>
                </form>
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
