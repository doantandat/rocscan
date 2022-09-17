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
        < div class="container py-3" >
          <div class="d-sm-flex align-items-center">
            <div class="mb-2 mb-sm-0">
              <h1 class="h4 mb-0"><i class="fa fa-code-branch mr-1 small"></i>
                <i class="fa fa-code-fork"></i>Forked Blocks
              </h1>
              <div class="text-secondary mt-1"> Excluded blocks as a result of "Chain Reorganizations" </div>
            </div>
          </div>
        </div >
        <div class="container space-bottom-2">
          <div class="card">
            <div class="card-body">
              <div id="ContentPlaceHolder1_divTopPagination" class="d-md-flex justify-content-between align-items-center mb-4">
                <div class="hidden-xs-down">
                  <p class="mb-2 mb-lg-0"><i id="spinwheel" class="fa fa-spin fa-spinner fa-1x fa-pulse" style={{ display: "none", marginTop: "4px", marginRight: "4px" }}>&nbsp;</i>A total of 2,290 forked blocks found</p>
                </div>
                <nav class="mb-4 mb-md-0" aria-label="page navigation">
                  <ul class="pagination pagination-sm mb-0">
                    <li class="page-item disabled"><span class="page-link">First</span></li>
                    <li class="page-item disabled"><span class="page-link"><i
                      class="fa fa-chevron-left small"></i></span><span class="sr-only">Previous</span></li>
                    <li Class="page-item disabled"><span Class="page-link text-nowrap">Page <strong
                      class="font-weight-medium">1</strong> of <strong
                        class="font-weight-medium">92</strong></span></li>
                    <li class="page-item" data-toggle='tooltip' title="Go to Next"><a class="page-link" href="blocks_forked?p=2" aria-label="Next"><span aria-hidden="True"><i
                      class="fa fa-chevron-right small"></i></span> <span
                        class="sr-only">Next</span></a></li>
                    <li class="page-item"><a class="page-link" href="blocks_forked?p=92"><span
                      aria-hidden="True">Last</span> <span class="sr-only">Last</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="table-responsive mb-2 mb-md-0">
                <table class="table table-hover">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Height</th>
                      <th scope="col">
                        <a href="javascript:;" onclick="switchAgeToDateTime(this)" id="lnkAgeDateTime"></a>
                      </th>
                      <th scope="col">Txn</th>
                      <th scope="col">Uncles</th>
                      <th scope="col">Validator</th>
                      <th scope="col">Gas Limit</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Reward</th>
                      <th scope="col">ReorgDepth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href='/block/18930040/f'>18930040</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='65 days 3 hrs ago'>2022-06-23 4:39:34</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-23 4:39:34'>65 days 3 hrs
                        ago</span></td>
                      <td>151</td>
                      <td>0</td>
                      <td><a href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator: Certik</a>
                      </td>
                      <td>80,880,957</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>12574 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18818398/f'>18818398</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='69 days 48 mins ago'>2022-06-19 7:21:10</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-19 7:21:10'>69 days 48 mins
                        ago</span></td>
                      <td>212</td>
                      <td>0</td>
                      <td><a href='/address/0x3f349bbafec1551819b8be1efea2fc46ca749aa1' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x3f349bbafec1551819b8be1efea2fc46ca749aa1'>Validator: Legend
                        II</a></td>
                      <td>80,340,214</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>16008 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18367137/f'>18367137</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='84 days 19 hrs ago'>2022-06-03 12:55:25</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-03 12:55:25'>84 days 19 hrs
                        ago</span></td>
                      <td>137</td>
                      <td>0</td>
                      <td><a href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                        Neptune</a></td>
                      <td>89,959,451</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>06909 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18338788/f'>18338788</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='85 days 19 hrs ago'>2022-06-02 13:07:38</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-02 13:07:38'>85 days 19 hrs
                        ago</span></td>
                      <td>191</td>
                      <td>0</td>
                      <td><a href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator: Certik</a>
                      </td>
                      <td>97,342,985</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>14299 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18332771/f'>18332771</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='86 days 3 mins ago'>2022-06-02 8:05:47</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-02 8:05:47'>86 days 3 mins
                        ago</span></td>
                      <td>95</td>
                      <td>0</td>
                      <td><a href='/address/0x2d4c407bbe49438ed859fe965b140dcf1aab71a9' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x2d4c407bbe49438ed859fe965b140dcf1aab71a9'>Validator:
                        NodeReal</a></td>
                      <td>91,134,420</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>05847 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18327027/f'>18327027</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='86 days 4 hrs ago'>2022-06-02 3:15:13</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-06-02 3:15:13'>86 days 4 hrs
                        ago</span></td>
                      <td>145</td>
                      <td>0</td>
                      <td><a href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                        Neptune</a></td>
                      <td>81,717,010</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>08785 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18206675/f'>18206675</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='90 days 9 hrs ago'>2022-05-28 22:22:22</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-05-28 22:22:22'>90 days 9 hrs
                        ago</span></td>
                      <td>74</td>
                      <td>0</td>
                      <td><a href='/address/0xe9ae3261a475a27bb1028f140bc2a7c843318afd' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xe9ae3261a475a27bb1028f140bc2a7c843318afd'>Validator:
                        HashQuark</a></td>
                      <td>75,000,000</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>06324 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18172018/f'>18172018</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='91 days 14 hrs ago'>2022-05-27 17:12:33</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-05-27 17:12:33'>91 days 14 hrs
                        ago</span></td>
                      <td>123</td>
                      <td>0</td>
                      <td><a href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                        Neptune</a></td>
                      <td>97,576,011</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>08092 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18157297/f'>18157297</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='92 days 3 hrs ago'>2022-05-27 4:54:00</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-05-27 4:54:00'>92 days 3 hrs
                        ago</span></td>
                      <td>457</td>
                      <td>0</td>
                      <td><a href='/address/0x72b61c6014342d914470ec7ac2975be345796c2b' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x72b61c6014342d914470ec7ac2975be345796c2b'>Validator: ROC48
                        Club</a></td>
                      <td>78,165,875</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>26585 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/18093780/f'>18093780</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='94 days 8 hrs ago'>2022-05-24 23:29:08</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2022-05-24 23:29:08'>94 days 8 hrs
                        ago</span></td>
                      <td>188</td>
                      <td>0</td>
                      <td><a href='/address/0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5'>Validator: Bison
                        Trails</a></td>
                      <td>74,803,892</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>1154 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13467768/f'>13467768</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='255 days 19 hrs ago'>2021-12-14 12:21:55</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-14 12:21:55'>255 days 19 hrs
                        ago</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td><a href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator: Certik</a>
                      </td>
                      <td>84,667,970</td>
                      <td>0.000 TH</td>
                      <td>0 ROC</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13295515/f'>13295515</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='261 days 20 hrs ago'>2021-12-08 11:50:10</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 11:50:10'>261 days 20 hrs
                        ago</span></td>
                      <td>749</td>
                      <td>0</td>
                      <td><a href='/address/0xee226379db83cffc681495730c11fdde79ba4c0c' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xee226379db83cffc681495730c11fdde79ba4c0c'>Validator:
                        InfStones</a></td>
                      <td>97,844,826</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>55695 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13293664/f'>13293664</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='261 days 22 hrs ago'>2021-12-08 9:27:50</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 9:27:50'>261 days 22 hrs
                        ago</span></td>
                      <td>735</td>
                      <td>0</td>
                      <td><a href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                        MathWallet</a></td>
                      <td>87,132,098</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>48992 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13293495/f'>13293495</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='261 days 22 hrs ago'>2021-12-08 9:14:18</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 9:14:18'>261 days 22 hrs
                        ago</span></td>
                      <td>715</td>
                      <td>0</td>
                      <td><a href='/address/0xa6f79b60359f141df90a0c745125b131caaffd12' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xa6f79b60359f141df90a0c745125b131caaffd12'>Validator:
                        Avengers</a></td>
                      <td>92,022,767</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>59461 ROC</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13293119/f'>13293119</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='261 days 23 hrs ago'>2021-12-08 8:43:36</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 8:43:36'>261 days 23 hrs
                        ago</span></td>
                      <td>768</td>
                      <td>0</td>
                      <td><a href='/address/0xe9ae3261a475a27bb1028f140bc2a7c843318afd' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xe9ae3261a475a27bb1028f140bc2a7c843318afd'>Validator:
                        HashQuark</a></td>
                      <td>93,045,157</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>6212 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13292459/f'>13292459</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='262 days 15 mins ago'>2021-12-08 7:53:53</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 7:53:53'>262 days 15 mins
                        ago</span></td>
                      <td>2</td>
                      <td>0</td>
                      <td><a href='/address/0xb8f7166496996a7da21cf1f1b04d9b3e26a3d077' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0xb8f7166496996a7da21cf1f1b04d9b3e26a3d077'>Validator:
                        Coinlix</a></td>
                      <td>97,256,386</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>00027 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13291554/f'>13291554</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='262 days 1 hr ago'>2021-12-08 6:49:23</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-08 6:49:23'>262 days 1 hr
                        ago</span></td>
                      <td>1</td>
                      <td>0</td>
                      <td><a href='/address/0x70f657164e5b75689b64b7fd1fa275f334f28e18' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x70f657164e5b75689b64b7fd1fa275f334f28e18'>Validator:
                        RocScan</a></td>
                      <td>85,323,224</td>
                      <td>0.000 TH</td>
                      <td>0 ROC</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13273938/f'>13273938</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='262 days 17 hrs ago'>2021-12-07 14:38:24</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-07 14:38:24'>262 days 17 hrs
                        ago</span></td>
                      <td>821</td>
                      <td>0</td>
                      <td><a href='/address/0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a'>Validator: Fuji</a>
                      </td>
                      <td>99,221,735</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>67385 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13260280/f'>13260280</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='263 days 5 hrs ago'>2021-12-07 2:37:38</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-12-07 2:37:38'>263 days 5 hrs
                        ago</span></td>
                      <td>366</td>
                      <td>0</td>
                      <td><a href='/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b'>Validator: Legend</a>
                      </td>
                      <td>84,846,940</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>288 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13064981/f'>13064981</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='270 days 5 hrs ago'>2021-11-30 2:12:45</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-30 2:12:45'>270 days 5 hrs
                        ago</span></td>
                      <td>648</td>
                      <td>0</td>
                      <td><a href='/address/0x685b1ded8013785d6623cc18d214320b6bb64759' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x685b1ded8013785d6623cc18d214320b6bb64759'>Validator:
                        Namelix</a></td>
                      <td>100,000,000</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>50936 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13047142/f'>13047142</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='270 days 22 hrs ago'>2021-11-29 9:51:35</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-29 9:51:35'>270 days 22 hrs
                        ago</span></td>
                      <td>659</td>
                      <td>0</td>
                      <td><a href='/address/0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73'>Validator: Legend
                        III</a></td>
                      <td>100,000,000</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>55189 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/13014640/f'>13014640</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='272 days 3 hrs ago'>2021-11-28 4:28:35</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-28 4:28:35'>272 days 3 hrs
                        ago</span></td>
                      <td>663</td>
                      <td>0</td>
                      <td><a href='/address/0x29a97c6effb8a411dabc6adeefaa84f5067c8bbe' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x29a97c6effb8a411dabc6adeefaa84f5067c8bbe'>Validator: CREAM</a>
                      </td>
                      <td>99,510,276</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>54724 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12986966/f'>12986966</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='273 days 4 hrs ago'>2021-11-27 3:41:30</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-27 3:41:30'>273 days 4 hrs
                        ago</span></td>
                      <td>705</td>
                      <td>0</td>
                      <td><a href='/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b'>Validator: Legend</a>
                      </td>
                      <td>99,985,742</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>53845 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12973326/f'>12973326</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='273 days 16 hrs ago'>2021-11-26 15:28:25</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-26 15:28:25'>273 days 16 hrs
                        ago</span></td>
                      <td>728</td>
                      <td>0</td>
                      <td><a href='/address/0x3f349bbafec1551819b8be1efea2fc46ca749aa1' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x3f349bbafec1551819b8be1efea2fc46ca749aa1'>Validator: Legend
                        II</a></td>
                      <td>100,000,000</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>54475 ROC</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td><a href='/block/12972185/f'>12972185</a></td>
                      <td class='showDate ' style={{ display: 'none !important' }}><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='273 days 17 hrs ago'>2021-11-26 14:25:42</span></td>
                      <td class='showAge '><span rel='tooltip' data-toggle='tooltip' data-placement='bottom' title='2021-11-26 14:25:42'>273 days 17 hrs
                        ago</span></td>
                      <td>806</td>
                      <td>0</td>
                      <td><a href='/address/0x4430b3230294d12c6ab2aac5c2cd68e80b16b581' class='hash-tag text-truncate' data-boundary='viewport' data-toggle='tooltip' title='0x4430b3230294d12c6ab2aac5c2cd68e80b16b581'>Validator: Ciscox</a>
                      </td>
                      <td>100,000,000</td>
                      <td>0.000 TH</td>
                      <td>0<b>.</b>52483 ROC</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="ContentPlaceHolder1_divBottomPagination">
                <form method="post" action="./blocks_forked" id="ctl00">
                  <div class="aspNetHidden">
                    <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                    <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                    <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                    <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="QJUOvP4tydvFfnkHCXW0dFWUVFq0KxNOSZnX10uFEo3pExtKi6zC8MU4MlmQJfS4H3A7tPH1x9N2x7dQwA1Z7cR4HneO3Gpu9KedWP1xcf0=" />
                  </div>

                  <div class="aspNetHidden">
                    <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="BD52E795" />
                    <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="QdPp7iSDuBVDd7y2rGTQU8WtbpO3xjdQGIqZNJeyeJm2vTv0t2xbNFMCas1FRgAYVqjzwE6jgLJ/3embjvI7g3I+bsQKtvlttz7Jpeq+/N/Z9H4l8I1EWc0vdsgntpiFU4hYELYdBpw8MBxSUNZCsjKH7e15tCbN42hu/HCHF3e59aqzA1Z4HZEh70wb2dbIJB2ZV//dJ174qQ2zMhXTwA=="
                    />
                  </div>
                  <div class="d-md-flex justify-content-between my-3">
                    <div class="d-flex align-items-center text-secondary mb-2 mb-md-0"> Show <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlRecordsPerPage"
                      class="custom-select custom-select-xs mx-2">
                      <option value="10">10</option>
                      <option selected="selected" value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select> Records </div>
                    <ul class="pagination pagination-sm mb-0">
                      <li class="page-item disabled"><span class="page-link">First</span></li>
                      <li class="page-item disabled"><span class="page-link"><i
                        class="fa fa-chevron-left small"></i></span><span class="sr-only">Previous</span></li>
                      <li Class="page-item disabled"><span Class="page-link text-nowrap">Page <strong
                        class="font-weight-medium">1</strong> of <strong
                          class="font-weight-medium">92</strong></span></li>
                      <li class="page-item" data-toggle='tooltip' title="Go to Next"><a class="page-link" href="blocks_forked?p=2" aria-label="Next"><span
                        aria-hidden="True"><i class="fa fa-chevron-right small"></i></span>
                        <span class="sr-only">Next</span></a></li>
                      <li class="page-item"><a class="page-link" href="blocks_forked?p=92"><span
                        aria-hidden="True">Last</span> <span class="sr-only">Last</span></a>
                      </li>
                    </ul>
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
