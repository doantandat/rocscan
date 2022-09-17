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
              <h1 className="h4 font-weight-normal mb-0"> Top Accounts by ROC Balance&nbsp;<span className="small text-secondary"></span></h1>
            </div>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-body">
              <div id="ContentPlaceHolder1_topPageDiv" className="d-md-flex justify-content-between mb-4">
                <p className="mb-2 mb-md-0">
                  <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ display: "none" }}></i> A total of {">"} <a href='/chart/address' data-toggle='tooltip' title='View Address Growth Chart'>1,999,999 accounts found</a>                                (22,538,883 <b>.</b>54 ROC)<span className="d-block text-secondary small">(Showing the last
                    10,000 top accounts only)</span>
                </p>
                <nav aria-label="page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled"><span className="page-link">First</span></li>
                    <li className="page-item disabled"><span className="page-link"><i
                      className="fa fa-chevron-left small"></i><span
                        className="sr-only">Previous</span></span>
                    </li>
                    <li className="page-item disabled"><span className="page-link">Page <strong
                      className="font-weight-medium">1</strong> of <strong
                        className="font-weight-medium">400</strong></span></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="/accounts/2" aria-label="Next"><span aria-hidden="true"><i
                      className="fa fa-chevron-right small"></i></span> <span
                        className="sr-only">Next</span></a></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Last"><a className="page-link" href="/accounts/400" aria-label="Last"><span aria-hidden="true">Last</span>
                      <span className="sr-only">Last</span></a></li>
                  </ul>
                </nav>
              </div>
              <div id="ContentPlaceHolder1_divTable" className="table-responsive mb-2 mb-md-0">
                <table className="table table-hover" style={{ width: "100%" }}>
                  <thead className="thead-light">
                    <tr>
                      <th id="ContentPlaceHolder1_headerRank" width="40" scope="col">Rank</th>
                      <th scope="col" width="370">Address</th>
                      <th className="remove-icon" scope="col">Name Tag</th>
                      <th scope="col">
                        <i class='fa fa-angle-down text-secondary'></i> Balance
                      </th>
                      <th id="ContentPlaceHolder1_headerPercent" scope="col">Percentage</th>
                      <th scope="col"> Txn Count </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0x0000000000000000000000000000000000001004'>0x0000000000000000000000000000000000001004</a></span>
                      </td>
                      <td>ROC: Token Hub</td>
                      <td>153,867,677<b>.</b><span class='text-secondary'>46683731</span> ROC</td>
                      <td>--</td>
                      <td>4,912,393</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><a href='/address/0xf977814e90da44bfa03b6295a0616a897441acec'>0xf977814e90da44bfa03b6295a0616a897441acec</a>
                      </td>
                      <td></td>
                      <td>4,930,987<b>.</b><span class='text-secondary'>49314248</span> ROC</td>
                      <td>21.87769188%</td>
                      <td>3,556</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'>0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c</a></span>
                      </td>
                      <td>Binance: WROC Token</td>
                      <td>4,360,671<b>.</b><span class='text-secondary'>00455648</span> ROC</td>
                      <td>19.34732480%</td>
                      <td>6,058,360</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><a href='/address/0x4b16c5de96eb2117bbe5fd171e4d203624b014aa'>0x4b16c5de96eb2117bbe5fd171e4d203624b014aa</a>
                      </td>
                      <td></td>
                      <td>1,036,269<b>.</b><span class='text-secondary'>075</span> ROC</td>
                      <td>4.59769479%</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0xa07c5b74c9b40447a954e1466938b865b6bbea36'>0xa07c5b74c9b40447a954e1466938b865b6bbea36</a></span>
                      </td>
                      <td>Venus: vROC Token</td>
                      <td>406,154<b>.</b><span class='text-secondary'>77665779</span> ROC</td>
                      <td>1.80201817%</td>
                      <td>479,807</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td><a href='/address/0x000000000000000000000000000000000000dead'>0x000000000000000000000000000000000000dead</a>
                      </td>
                      <td>Null Address: 0x000...dEaD</td>
                      <td>255,358<b>.</b><span class='text-secondary'>66557613</span> ROC</td>
                      <td>1.13296945%</td>
                      <td>3,244</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td><a href='/address/0x41772edd47d9ddf9ef848cdb34fe76143908c7ad'>0x41772edd47d9ddf9ef848cdb34fe76143908c7ad</a>
                      </td>
                      <td>FTX Exchange</td>
                      <td>254,067<b>.</b><span class='text-secondary'>98729646</span> ROC</td>
                      <td>1.12724300%</td>
                      <td>3,473,858</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td><a href='/address/0x8894e0a0c962cb723c1976a4421c95949be2d4e3'>0x8894e0a0c962cb723c1976a4421c95949be2d4e3</a>
                      </td>
                      <td>Binance: Hot Wallet 6</td>
                      <td>125,973<b>.</b><span class='text-secondary'>95946847</span> ROC</td>
                      <td>0.55891837%</td>
                      <td>13,333,123</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0x1e34a77868e19a6647b1f2f47b51ed72dede95dd'>0x1e34a77868e19a6647b1f2f47b51ed72dede95dd</a></span>
                      </td>
                      <td>Tornado.Cash: 100 ROC</td>
                      <td>92,000 ROC</td>
                      <td>0.40818348%</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td><a href='/address/0xc90b04b27559d78ab95e56ea27119a38bcc66700'>0xc90b04b27559d78ab95e56ea27119a38bcc66700</a>
                      </td>
                      <td></td>
                      <td>68,880<b>.</b><span class='text-secondary'>39340696</span> ROC</td>
                      <td>0.30560694%</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td><a href='/address/0x21d45650db732ce5df77685d6021d7d5d1da807f'>0x21d45650db732ce5df77685d6021d7d5d1da807f</a>
                      </td>
                      <td></td>
                      <td>60,072<b>.</b><span class='text-secondary'>86959658</span> ROC</td>
                      <td>0.26652993%</td>
                      <td>673,268</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td><a href='/address/0xd183f2bbf8b28d9fec8367cb06fe72b88778c86b'>0xd183f2bbf8b28d9fec8367cb06fe72b88778c86b</a>
                      </td>
                      <td></td>
                      <td>57,936<b>.</b><span class='text-secondary'>9904824</span> ROC</td>
                      <td>0.25705351%</td>
                      <td>893</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td><a href='/address/0xfd6042df3d74ce9959922fec559d7995f3933c55'>0xfd6042df3d74ce9959922fec559d7995f3933c55</a>
                      </td>
                      <td>Fake_Phishing7</td>
                      <td>48,510<b>.</b><span class='text-secondary'>94235742</span> ROC</td>
                      <td>0.21523223%</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td><a href='/address/0x50dfef1566462cbc9c76b0e47b814c4315e3df63'>0x50dfef1566462cbc9c76b0e47b814c4315e3df63</a>
                      </td>
                      <td></td>
                      <td>41,518<b>.</b><span class='text-secondary'>36194509</span> ROC</td>
                      <td>0.18420771%</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0x36236fa003ac2e5371e3264276f82d355180a102'>0x36236fa003ac2e5371e3264276f82d355180a102</a></span>
                      </td>
                      <td></td>
                      <td>39,914<b>.</b><span class='text-secondary'>41951</span> ROC</td>
                      <td>0.17709138%</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td><a href='/address/0xf9570d56b233ca5ff0211ab20aad93b8b6370b3a'>0xf9570d56b233ca5ff0211ab20aad93b8b6370b3a</a>
                      </td>
                      <td></td>
                      <td>38,515<b>.</b><span class='text-secondary'>96421937</span> ROC</td>
                      <td>0.17088674%</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td><a href='/address/0xd6216fc19db775df9774a6e33526131da7d19a2c'>0xd6216fc19db775df9774a6e33526131da7d19a2c</a>
                      </td>
                      <td></td>
                      <td>38,035<b>.</b><span class='text-secondary'>42417518</span> ROC</td>
                      <td>0.16875470%</td>
                      <td>835</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td><a href='/address/0xf05e2a70346560d3228c7002194bb7c5dc8fe100'>0xf05e2a70346560d3228c7002194bb7c5dc8fe100</a>
                      </td>
                      <td></td>
                      <td>32,199<b>.</b><span class='text-secondary'>005895</span> ROC</td>
                      <td>0.14285981%</td>
                      <td>852</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td><a href='/address/0x0d0707963952f2fba59dd06f2b425ace40b492fe'>0x0d0707963952f2fba59dd06f2b425ace40b492fe</a>
                      </td>
                      <td>Gate.io</td>
                      <td>27,713<b>.</b><span class='text-secondary'>2610751</span> ROC</td>
                      <td>0.12295756%</td>
                      <td>2,682,034</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td><a href='/address/0x97df8f5982164bfc4cc109e9a1a8899299484c1c'>0x97df8f5982164bfc4cc109e9a1a8899299484c1c</a>
                      </td>
                      <td></td>
                      <td>27,212<b>.</b><span class='text-secondary'>27392197</span> ROC</td>
                      <td>0.12073479%</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td><a href='/address/0xdccf3b77da55107280bd850ea519df3705d1a75a'>0xdccf3b77da55107280bd850ea519df3705d1a75a</a>
                      </td>
                      <td>Binance: Hot Wallet 9</td>
                      <td>26,664<b>.</b><span class='text-secondary'>7196615</span> ROC</td>
                      <td>0.11830541%</td>
                      <td>5,274,196</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td><a href='/address/0x5616e2b8acff064bf902b8a93cbd5da2ca1edc7c'>0x5616e2b8acff064bf902b8a93cbd5da2ca1edc7c</a>
                      </td>
                      <td></td>
                      <td>26,406<b>.</b><span class='text-secondary'>5145</span> ROC</td>
                      <td>0.11715982%</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td><span style={{ whiteSpace: "nowrap" }}><i data-toggle='tooltip' title='Contract'
                        className="far fa-file-alt text-secondary mr-1"></i><a
                          href='/address/0x6560ed767d6003d779f60bccd2d7b168cd4a1583'>0x6560ed767d6003d779f60bccd2d7b168cd4a1583</a></span>
                      </td>
                      <td></td>
                      <td>26,110<b>.</b><span class='text-secondary'>85835875</span> ROC</td>
                      <td>0.11584806%</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td><a href='/address/0x3ddfa8ec3052539b6c9549f12cea2c295cff5296'>0x3ddfa8ec3052539b6c9549f12cea2c295cff5296</a>
                      </td>
                      <td></td>
                      <td>25,585<b>.</b><span class='text-secondary'>96203324</span> ROC</td>
                      <td>0.11351921%</td>
                      <td>1,094</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td><a href='/address/0x269da78999ce4ce5d20ea8d0cae0f46e2763a68d'>0x269da78999ce4ce5d20ea8d0cae0f46e2763a68d</a>
                      </td>
                      <td></td>
                      <td>25,530<b>.</b><span class='text-secondary'>9999</span> ROC</td>
                      <td>0.11327535%</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <form method="post" action="./accounts" id="ctl00">
                <div className="aspNetHidden">
                  <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                  <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                  <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                  <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="iwSx/HXvT/bVVMVUUJqBlG9LDWP3HuXcOi9d21lowBL8fk2kvxy7bmhD0J88y6LeGx+zwX7Sww2P4yNCuEl03TQh3XxTY/zVE+tlvTOnFcg=" />
                </div>
                {/* <script type="text/javascript">
                                //<![CDATA[
                  var theForm = document.forms['ctl00'];
                  if (!theForm) {
                    theForm = document.ctl00;
                                }

                  function __doPostBack(eventTarget, eventArgument) {
                                    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                    theForm.__EVENTTARGET.value = eventTarget;
                  theForm.__EVENTARGUMENT.value = eventArgument;
                  theForm.submit();
                                    }
                                }
                //]]>
                </script> */}
                <div className="aspNetHidden">
                  <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="A75D1253" />
                  <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="Kyuc4gegjaQwIA5KNmCjjKSkFuZlvfod4HIkPEgpOr0qCdLxat4vuB7yqZGyoKq6a2vw1yZKPQAy7oPeCGQxksjY0+yCyTPdB48hVp5XCzARKbH/N8txlMoHzm1rLgE98avUStuqM2EHJROAGNvH8txFV/ZsgXFlg5g43bV3mIT5++kPHzfH/m3TLCbksgJuLcyDZu9zlRC3y0wzY2pxNg=="
                  />
                </div>
                <div id="ContentPlaceHolder1_pageRecords" className="d-md-flex justify-content-between my-3">
                  <div className="d-flex align-items-center text-secondary mb-2 mb-md-0"> Show <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlRecordsPerPage"
                    className="custom-select custom-select-xs mx-2">
                    <option value="10">10</option>
                    <option selected="selected" value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select> Records </div>
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled"><span className="page-link">First</span></li>
                    <li className="page-item disabled"><span className="page-link"><i
                      className="fa fa-chevron-left small"></i><span
                        className="sr-only">Previous</span></span>
                    </li>
                    <li className="page-item disabled"><span className="page-link">Page <strong
                      className="font-weight-medium">1</strong> of <strong
                        className="font-weight-medium">400</strong></span></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="/accounts/2" aria-label="Next"><span aria-hidden="true"><i
                      className="fa fa-chevron-right small"></i></span> <span
                        className="sr-only">Next</span></a></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Last"><a className="page-link" href="/accounts/400" aria-label="Last"><span aria-hidden="true">Last</span>
                      <span className="sr-only">Last</span></a></li>
                  </ul>
                </div>
              </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);
