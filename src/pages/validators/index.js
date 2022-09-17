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
              <h1 className="h4 font-weight-normal mb-0">Validators Top Leaderboard (Blocks Validated)
                <p className="mb-0 text-break small">
                  <span className="small text-secondary"></span>
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive mb-2 mb-md-0">
                <table id="mytable1" className="table table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-right">Rank</th>
                      <th scope="col">Address</th>
                      <th scope="col" title="Latest Voting Power">Voting Power</th>
                      <th scope="col" title="First block validated">First Block</th>
                      <th scope="col" title="Latest block validated">Last Block</th>
                      <th scope="col" title="Count of blocks validated in the previous 1 day">1 Day
                      </th>
                      <th scope="col" title="Count of blocks validated in the last 7 days">7 Days</th>
                      <th scope="col" title="Count of blocks validated in the last 30 days">30 Days
                      </th>
                      <th scope="col">Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="text-right text-secondary">🥇 1</div>
                      </td>
                      <td><a href='/address/0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9' className='hash-tag text-truncate' data-toggle='tooltip' title='0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9'>0x2b3a6c089311b478bf629c29d790a7a6db3fc1b9</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 1,125,262 ROC</td>
                      <td><a href='/block/18551879'>18551879</a></td>
                      <td><a href='/block/20802707'>20802707</a></td>
                      <td>1369</td>
                      <td>9592</td>
                      <td>41080</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary">🥈 2</div>
                      </td>
                      <td><a href='/address/0xaacf6a8119f7e11623b5a43da638e91f669a130f' className='hash-tag text-truncate' data-toggle='tooltip' title='0xaacf6a8119f7e11623b5a43da638e91f669a130f'>Validator:
                        Neptune</a></td>
                      <td><i className="fal fa-vote-yea"></i> 942,243 ROC</td>
                      <td><a href='/block/13710799'>13710799</a></td>
                      <td><a href='/block/20802718'>20802718</a></td>
                      <td>1369</td>
                      <td>9590</td>
                      <td>41057</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary">🥉 3</div>
                      </td>
                      <td><a href='/address/0xe9ae3261a475a27bb1028f140bc2a7c843318afd' className='hash-tag text-truncate' data-toggle='tooltip' title='0xe9ae3261a475a27bb1028f140bc2a7c843318afd'>Validator:
                        HashQuark</a></td>
                      <td><i className="fal fa-vote-yea"></i> 922,805 ROC</td>
                      <td><a href='/block/6202466'>6202466</a></td>
                      <td><a href='/block/20802722'>20802722</a></td>
                      <td>1368</td>
                      <td>9588</td>
                      <td>41066</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 4</div>
                      </td>
                      <td><a href='/address/0x70f657164e5b75689b64b7fd1fa275f334f28e18' className='hash-tag text-truncate' data-toggle='tooltip' title='0x70f657164e5b75689b64b7fd1fa275f334f28e18'>Validator:
                        RocScan</a></td>
                      <td><i className="fal fa-vote-yea"></i> 915,546 ROC</td>
                      <td><a href='/block/5572034'>5572034</a></td>
                      <td><a href='/block/20802712'>20802712</a></td>
                      <td>1368</td>
                      <td>9568</td>
                      <td>41065</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 5</div>
                      </td>
                      <td><a href='/address/0x3f349bbafec1551819b8be1efea2fc46ca749aa1' className='hash-tag text-truncate' data-toggle='tooltip' title='0x3f349bbafec1551819b8be1efea2fc46ca749aa1'>Validator: Legend
                        II</a></td>
                      <td><i className="fal fa-vote-yea"></i> 889,231 ROC</td>
                      <td><a href='/block/5629521'>5629521</a></td>
                      <td><a href='/block/20802709'>20802709</a></td>
                      <td>1369</td>
                      <td>9591</td>
                      <td>41075</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 6</div>
                      </td>
                      <td><a href='/address/0x2d4c407bbe49438ed859fe965b140dcf1aab71a9' className='hash-tag text-truncate' data-toggle='tooltip' title='0x2d4c407bbe49438ed859fe965b140dcf1aab71a9'>Validator:
                        NodeReal</a></td>
                      <td><i className="fal fa-vote-yea"></i> 869,897 ROC</td>
                      <td><a href='/block/10'>10</a></td>
                      <td><a href='/block/20802708'>20802708</a></td>
                      <td>1368</td>
                      <td>9591</td>
                      <td>41084</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 7</div>
                      </td>
                      <td><a href='/address/0xbe807dddb074639cd9fa61b47676c064fc50d62c' className='hash-tag text-truncate' data-toggle='tooltip' title='0xbe807dddb074639cd9fa61b47676c064fc50d62c'>Validator: Certik</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 861,450 ROC</td>
                      <td><a href='/block/5945411'>5945411</a></td>
                      <td><a href='/block/20802720'>20802720</a></td>
                      <td>1365</td>
                      <td>9587</td>
                      <td>41080</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 8</div>
                      </td>
                      <td><a href='/address/0x72b61c6014342d914470ec7ac2975be345796c2b' className='hash-tag text-truncate' data-toggle='tooltip' title='0x72b61c6014342d914470ec7ac2975be345796c2b'>Validator: ROC48
                        Club</a></td>
                      <td><i className="fal fa-vote-yea"></i> 860,834 ROC</td>
                      <td><a href='/block/773407'>773407</a></td>
                      <td><a href='/block/20802713'>20802713</a></td>
                      <td>1369</td>
                      <td>9592</td>
                      <td>41086</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 9</div>
                      </td>
                      <td><a href='/address/0xa6f79b60359f141df90a0c745125b131caaffd12' className='hash-tag text-truncate' data-toggle='tooltip' title='0xa6f79b60359f141df90a0c745125b131caaffd12'>Validator:
                        Avengers</a></td>
                      <td><i className="fal fa-vote-yea"></i> 860,113 ROC</td>
                      <td><a href='/block/283807'>283807</a></td>
                      <td><a href='/block/20802717'>20802717</a></td>
                      <td>1370</td>
                      <td>9592</td>
                      <td>41077</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 10</div>
                      </td>
                      <td><a href='/address/0x685b1ded8013785d6623cc18d214320b6bb64759' className='hash-tag text-truncate' data-toggle='tooltip' title='0x685b1ded8013785d6623cc18d214320b6bb64759'>Validator:
                        Namelix</a></td>
                      <td><i className="fal fa-vote-yea"></i> 859,527 ROC</td>
                      <td><a href='/block/4'>4</a></td>
                      <td><a href='/block/20802711'>20802711</a></td>
                      <td>1365</td>
                      <td>9587</td>
                      <td>41079</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 11</div>
                      </td>
                      <td><a href='/address/0xee226379db83cffc681495730c11fdde79ba4c0c' className='hash-tag text-truncate' data-toggle='tooltip' title='0xee226379db83cffc681495730c11fdde79ba4c0c'>Validator:
                        InfStones</a></td>
                      <td><i className="fal fa-vote-yea"></i> 853,984 ROC</td>
                      <td><a href='/block/5945411'>5945411</a></td>
                      <td><a href='/block/20802724'>20802724</a></td>
                      <td>1369</td>
                      <td>9593</td>
                      <td>41088</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 12</div>
                      </td>
                      <td><a href='/address/0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73' className='hash-tag text-truncate' data-toggle='tooltip' title='0x8b6c8fd93d6f4cea42bbb345dbc6f0dfdb5bec73'>Validator: Legend
                        III</a></td>
                      <td><i className="fal fa-vote-yea"></i> 851,464 ROC</td>
                      <td><a href='/block/5686991'>5686991</a></td>
                      <td><a href='/block/20802715'>20802715</a></td>
                      <td>1369</td>
                      <td>9589</td>
                      <td>41077</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 13</div>
                      </td>
                      <td><a href='/address/0xef0274e31810c9df02f98fafde0f841f4e66a1cd' className='hash-tag text-truncate' data-toggle='tooltip' title='0xef0274e31810c9df02f98fafde0f841f4e66a1cd'>Validator:
                        Tranchess</a></td>
                      <td><i className="fal fa-vote-yea"></i> 850,645 ROC</td>
                      <td><a href='/block/14429497'>14429497</a></td>
                      <td><a href='/block/20802725'>20802725</a></td>
                      <td>1369</td>
                      <td>9592</td>
                      <td>41081</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 14</div>
                      </td>
                      <td><a href='/address/0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a' className='hash-tag text-truncate' data-toggle='tooltip' title='0x7ae2f5b9e386cd1b50a4550696d957cb4900f03a'>Validator: Fuji</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 841,565 ROC</td>
                      <td><a href='/block/48'>48</a></td>
                      <td><a href='/block/20802714'>20802714</a></td>
                      <td>1366</td>
                      <td>9587</td>
                      <td>41082</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 15</div>
                      </td>
                      <td><a href='/address/0xe2d3a739effcd3a99387d015e260eefac72ebea1' className='hash-tag text-truncate' data-toggle='tooltip' title='0xe2d3a739effcd3a99387d015e260eefac72ebea1'>Validator:
                        MathWallet</a></td>
                      <td><i className="fal fa-vote-yea"></i> 839,856 ROC</td>
                      <td><a href='/block/5773306'>5773306</a></td>
                      <td><a href='/block/20802721'>20802721</a></td>
                      <td>1369</td>
                      <td>9593</td>
                      <td>41093</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 16</div>
                      </td>
                      <td><a href='/address/0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b' className='hash-tag text-truncate' data-toggle='tooltip' title='0x295e26495cef6f69dfa69911d9d8e4f3bbadb89b'>Validator: Legend</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 836,670 ROC</td>
                      <td><a href='/block/5514516'>5514516</a></td>
                      <td><a href='/block/20802727'>20802727</a></td>
                      <td>1367</td>
                      <td>9587</td>
                      <td>41072</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 17</div>
                      </td>
                      <td><a href='/address/0x2465176c461afb316ebc773c61faee85a6515daa' className='hash-tag text-truncate' data-toggle='tooltip' title='0x2465176c461afb316ebc773c61faee85a6515daa'>Validator: TW
                        Staking</a></td>
                      <td><i className="fal fa-vote-yea"></i> 834,939 ROC</td>
                      <td><a href='/block/5572034'>5572034</a></td>
                      <td><a href='/block/20802726'>20802726</a></td>
                      <td>1369</td>
                      <td>9589</td>
                      <td>41087</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 18</div>
                      </td>
                      <td><a href='/address/0x9f8ccdafcc39f3c7d6ebf637c9151673cbc36b88' className='hash-tag text-truncate' data-toggle='tooltip' title='0x9f8ccdafcc39f3c7d6ebf637c9151673cbc36b88'>Validator: Ankr</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 832,218 ROC</td>
                      <td><a href='/block/5572034'>5572034</a></td>
                      <td><a href='/block/20802716'>20802716</a></td>
                      <td>1369</td>
                      <td>9582</td>
                      <td>41069</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 19</div>
                      </td>
                      <td><a href='/address/0xea0a6e3c511bbd10f4519ece37dc24887e11b55d' className='hash-tag text-truncate' data-toggle='tooltip' title='0xea0a6e3c511bbd10f4519ece37dc24887e11b55d'>Validator:
                        Defibit</a></td>
                      <td><i className="fal fa-vote-yea"></i> 829,869 ROC</td>
                      <td><a href='/block/12'>12</a></td>
                      <td><a href='/block/20802723'>20802723</a></td>
                      <td>1365</td>
                      <td>9586</td>
                      <td>41077</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 20</div>
                      </td>
                      <td><a href='/address/0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5' className='hash-tag text-truncate' data-toggle='tooltip' title='0xac0e15a038eedfc68ba3c35c73fed5be4a07afb5'>Validator: Bison
                        Trails</a></td>
                      <td><i className="fal fa-vote-yea"></i> 814,187 ROC</td>
                      <td><a href='/block/13257196'>13257196</a></td>
                      <td><a href='/block/20802719'>20802719</a></td>
                      <td>1369</td>
                      <td>9589</td>
                      <td>41050</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 21</div>
                      </td>
                      <td><a href='/address/0x61dd481a114a2e761c554b641742c973867899d3' className='hash-tag text-truncate' data-toggle='tooltip' title='0x61dd481a114a2e761c554b641742c973867899d3'>0x61dd481a114a2e761c554b641742c973867899d3</a>
                      </td>
                      <td><i className="fal fa-vote-yea"></i> 806,325 ROC</td>
                      <td><a href='/block/19413356'>19413356</a></td>
                      <td><a href='/block/20802710'>20802710</a></td>
                      <td>1364</td>
                      <td>9586</td>
                      <td>41076</td>
                      <td><span className='text-success'><i className="fal fa-signal-alt-3"></i>Yes</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 22</div>
                      </td>
                      <td><a href='/address/0x68bf0b8b6fb4e317a0f9d6f03eaf8ce6675bc60d' className='hash-tag text-truncate' data-toggle='tooltip' title='0x68bf0b8b6fb4e317a0f9d6f03eaf8ce6675bc60d'>Validator:
                        Stakepulse</a></td>
                      <td>-</td>
                      <td><a href='/block/29'>29</a></td>
                      <td><a href='/block/7360006'>7360006</a></td>
                      <td>11</td>
                      <td>11</td>
                      <td>11</td>
                      <td><span className='text-danger'><i className="fal fa-signal-slash"></i>No</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 23</div>
                      </td>
                      <td><a href='/address/0xce2fd7544e0b2cc94692d4a704debef7bcb61328' className='hash-tag text-truncate' data-toggle='tooltip' title='0xce2fd7544e0b2cc94692d4a704debef7bcb61328'>Validator:
                        Pexmons</a></td>
                      <td>-</td>
                      <td><a href='/block/7'>7</a></td>
                      <td><a href='/block/19413402'>19413402</a></td>
                      <td>5</td>
                      <td>5</td>
                      <td>5</td>
                      <td><span className='text-danger'><i className="fal fa-signal-slash"></i>No</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 24</div>
                      </td>
                      <td><a href='/address/0x4430b3230294d12c6ab2aac5c2cd68e80b16b581' className='hash-tag text-truncate' data-toggle='tooltip' title='0x4430b3230294d12c6ab2aac5c2cd68e80b16b581'>Validator: Ciscox</a>
                      </td>
                      <td>-</td>
                      <td><a href='/block/21'>21</a></td>
                      <td><a href='/block/14429609'>14429609</a></td>
                      <td>7</td>
                      <td>7</td>
                      <td>7</td>
                      <td><span className='text-danger'><i className="fal fa-signal-slash"></i>No</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-right text-secondary"># 25</div>
                      </td>
                      <td><a href='/address/0x9bb832254baf4e8b4cc26bd2b52b31389b56e98b' className='hash-tag text-truncate' data-toggle='tooltip' title='0x9bb832254baf4e8b4cc26bd2b52b31389b56e98b'>Validator:
                        Stake2me</a></td>
                      <td>-</td>
                      <td><a href='/block/5057072'>5057072</a></td>
                      <td><a href='/block/13453198'>13453198</a></td>
                      <td>9</td>
                      <td>9</td>
                      <td>9</td>
                      <td><span className='text-danger'><i className="fal fa-signal-slash"></i>No</span></td>
                    </tr>
                  </tbody>
                </table>
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
