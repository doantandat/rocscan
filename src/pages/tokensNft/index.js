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
          <div className="d-sm-flex align-items-center">
            <div className="mb-2 mb-sm-0">
              <h1 className="h4 d-flex align-items-center mb-0">Non-Fungible&nbsp;Token Tracker<a className="u-label u-label--xs u-label--secondary rounded color-strong ml-2" href='http://erc721.org/' target="_blank" rel="nofollow noreferrer" data-toggle="tooltip" title="External link to ERC721 Information">ERC-721</a></h1>
            </div>
          </div>
        </div>
        <div className="container space-bottom-2">
          <div className="card">
            <div className="card-header d-md-flex justify-content-between align-items-center">
              <div className="mb-1 mb-md-0">
                <h2 className="card-header-title">Non-Fungible Tokens (NFT)</h2>
              </div>
              <div className="d-flex ml-auto">
                <div className="position-relative order-1 order-md-2">
                  <a id="searchFilterInvoker" className="btn btn-sm btn-icon btn-primary" href="javascript:;" role="button" aria-controls="searchFilter" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchFilter" data-unfold-type="css-animation" data-unfold-duration="300"
                    data-unfold-delay="300" data-unfold-hide-on-scroll="false" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut" data-toggle="tooltip" title="Search for Token Name or Address">
                    <i className="fa fa-search btn-icon__inner"></i>
                  </a>
                  <div id="searchFilter" className="dropdown-menu dropdown-unfold dropdown-menu-sm-right p-2" aria-labelledby="searchFilterInvoker" style={{ width: "310px" }}>
                    <form action="/tokens-nft" method="get" autocomplete="off" spellcheck="false" className="js-focus-state input-group input-group-sm w-100">
                      <input id="searchtoken" name="q" type="search" value="" className="form-control" placeholder="Search for Token Name or Address" onkeyup="handleTokenSearch(this);" />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Find</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="ContentPlaceHolder1_divpagingpanel" className="d-md-flex justify-content-between align-items-lg-center mb-4">
                <p className="mb-2 mb-md-0">
                  <i id="spinwheel" className="fa fa-spin fa-spinner fa-1x fa-pulse mr-1" style={{ display: "none" }}></i> A total of 44,302 ERC-721 Token Contracts found
                </p>
                <nav className="mb-4 mb-md-0" aria-label="page navigation">
                  <ul className="pagination pagination-sm mb-0">
                    <li className="page-item disabled"><span className="page-link">First</span></li>
                    <li className="page-item disabled"><span className="page-link"><i
                      className="fa fa-chevron-left small"></i></span><span className="sr-only">Previous</span></li>
                    <li className="page-item disabled"><span className="page-link text-nowrap">Page <strong
                      className="font-weight-medium">1</strong> of <strong
                        className="font-weight-medium">887</strong></span></li>
                    <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="tokens-nft?p=2" aria-label="Next"><span aria-hidden="True"><i
                      className="fa fa-chevron-right small"></i></span> <span
                        className="sr-only">Next</span></a></li>
                    <li className="page-item"><a className="page-link" href="tokens-nft?p=887"><span
                      aria-hidden="True">Last</span> <span className="sr-only">Last</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="transfers" role="tabpanel" aria-labelledby="tokens-nft-tab">
                  <div className="stickyTableHead" id="divSTContainer">
                    <div id="ContentPlaceHolder1_divresult" className="table-responsive mb-2 mb-md-0">
                      <table className="table table-text-normal table-hover" id="tblResult">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col" width="1" className="token-sticky-header">#</th>
                            <th scope="col" className="token-sticky-header">Token</th>
                            <th scope="col" width="100" className="text-nowrap"><i className='fa fa-angle-down' style={{ color: "gray" }}></i> <a href='/tokens-nft?sort=24h&order=asc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for ascending sort'>Transfers (24H)</a></th>
                            <th scope="col" width="100" className="text-nowrap"><a href='/tokens-nft?sort=7d&order=desc' data-toggle='tooltip' data-boundary='viewport' data-html='true' title='Click for descending sort'>Transfers (2D)</a>

                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x07d971c03553011a48e951a53f48632d37652ba1' data-toggle='tooltip' title="0x07d971c03553011a48e951a53f48632d37652ba1">Era7
                                      NFT</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>14,323</td>
                            <td>25,310</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x7B2705864bF59749FaB351a8CC0E43b5bd8f2435' data-toggle='tooltip' title="0x7B2705864bF59749FaB351a8CC0E43b5bd8f2435">marbleheroes</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>7,089</td>
                            <td>13,952</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xE3b1D32e43Ce8d658368e2CBFF95D57Ef39Be8a6' data-toggle='tooltip' title="0xE3b1D32e43Ce8d658368e2CBFF95D57Ef39Be8a6">SPACE
                                      ID</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>6,896</td>
                            <td>25,861</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xc1c5bd7f7dd8d88e525edcc42856963ce816b33e' data-toggle='tooltip' title="0xc1c5bd7f7dd8d88e525edcc42856963ce816b33e">Dragon
                                      labour</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>5,824</td>
                            <td>9,003</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xADc466855ebe8d1402C5F7e6706Fccc3AEdB44a0' data-toggle='tooltip' title="0xADc466855ebe8d1402C5F7e6706Fccc3AEdB44a0">Galaxy
                                      OAT</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>5,415</td>
                            <td>14,992</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/bombcryptobsc_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x30cc0553f6fa1faf6d7847891b9b36eb559dc618' data-toggle='tooltip' title="0x30cc0553f6fa1faf6d7847891b9b36eb559dc618">Bomber
                                      Hero</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>4,445</td>
                            <td>9,383</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/pikastermetaland_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xFb01C73F9F1e1DF24b8d91a8E9C3e16c6F99BAb6' data-toggle='tooltip' title="0xFb01C73F9F1e1DF24b8d91a8E9C3e16c6F99BAb6">Pikaster</a>
                                    </div>
                                  </h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Pikaster is Metaland's card-based battle strategy Play-To-Earn project. It is the attempt to adopt a 3-token in-game economic model and stand at the forefront of gameplay and token / NFT
                                    applications.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>4,006</td>
                            <td>4,008</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x6421471ddf80ccdc2519a210110542fdcb0e5c5d' data-toggle='tooltip' title="0x6421471ddf80ccdc2519a210110542fdcb0e5c5d">FarmerCryptoNFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>3,867</td>
                            <td>4,117</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x0DA89336d1AA0bCcb7a9C9Cd1983EB9b3172f201' data-toggle='tooltip' title="0x0DA89336d1AA0bCcb7a9C9Cd1983EB9b3172f201">Facility</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>3,586</td>
                            <td>8,208</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x00E87823abc98ca09825Dfa7aa009aa1a65224BF' data-toggle='tooltip' title="0x00E87823abc98ca09825Dfa7aa009aa1a65224BF">GnomeMines
                                      NFT Collection</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>3,542</td>
                            <td>6,453</td>
                          </tr >
                          <tr>
                            <td>11</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xef881176e420e846a02c768e2b0ccc0e54f2cf50' data-toggle='tooltip' title="0xef881176e420e846a02c768e2b0ccc0e54f2cf50">MinerV1</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>3,316</td>
                            <td>5,440</td>
                          </tr >
                          <tr>
                            <td>12</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xF24Bf668Aa087990f1d40aBAbF841456E771913c' data-toggle='tooltip' title="0xF24Bf668Aa087990f1d40aBAbF841456E771913c">Metamon</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>3,014</td>
                            <td>4,359</td>
                          </tr >
                          <tr>
                            <td>13</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xdb30af2eb9fe7dc842988e5895d44e4070109ac8' data-toggle='tooltip' title="0xdb30af2eb9fe7dc842988e5895d44e4070109ac8">Plot</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>2,462</td>
                            <td>4,517</td>
                          </tr >
                          <tr>
                            <td>14</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x4db77c2272047f42262153f43cc1adacd5375962' data-toggle='tooltip' title="0x4db77c2272047f42262153f43cc1adacd5375962">Dracoo
                                      Master</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>2,368</td>
                            <td>3,855</td>
                          </tr >
                          <tr>
                            <td>15</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x4A2228d13898a3048857F1335cAad6639223cc7c' data-toggle='tooltip' title="0x4A2228d13898a3048857F1335cAad6639223cc7c">TGG
                                      Card</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>2,181</td>
                            <td>4,967</td>
                          </tr >
                          <tr>
                            <td>16</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xa8330f559e6317813940936a78b0b4597488cb7b' data-toggle='tooltip' title="0xa8330f559e6317813940936a78b0b4597488cb7b">Amazy
                                      Sneaker</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,913</td>
                            <td>4,114</td>
                          </tr >
                          <tr>
                            <td>17</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x286290331b4a3451eb94c5bf61b16a3816ac2223' data-toggle='tooltip' title="0x286290331b4a3451eb94c5bf61b16a3816ac2223">YINJAverse
                                      Carnival NFT</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,873</td>
                            <td>4,717</td>
                          </tr >
                          <tr>
                            <td>18</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x416f1d70c1c22608814d9f36c492efb3ba8cad4c' data-toggle='tooltip' title="0x416f1d70c1c22608814d9f36c492efb3ba8cad4c">SharNFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,806</td>
                            <td>3,515</td>
                          </tr >
                          <tr>
                            <td>19</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xa8d3cf9a13bedbf2b084127cb5745a42327fdae7' data-toggle='tooltip' title="0xa8d3cf9a13bedbf2b084127cb5745a42327fdae7">ITEM</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,720</td>
                            <td>2,685</td>
                          </tr >
                          <tr>
                            <td>20</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x120ed5f007369bf92b3cac95097ba64b51c1fa02' data-toggle='tooltip' title="0x120ed5f007369bf92b3cac95097ba64b51c1fa02">Binance
                                      NFT Mystery Box-Monsterra</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,669</td>
                            <td>3,741</td>
                          </tr >
                          <tr>
                            <td>21</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xF3857306a37264f15a19ad37DA8A9485e5f7CfB3' data-toggle='tooltip' title="0xF3857306a37264f15a19ad37DA8A9485e5f7CfB3">AlienWorlds-NFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,499</td>
                            <td>2,689</td>
                          </tr >
                          <tr>
                            <td>22</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xd7487022B20c695DE979AfFE7Acba8c6a0B445e4' data-toggle='tooltip' title="0xd7487022B20c695DE979AfFE7Acba8c6a0B445e4">CTK
                                      Badge</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,479</td>
                            <td>6,540</td>
                          </tr >
                          <tr>
                            <td>23</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x9835B7731017f52AdaDbB1d9f2E3aAA88C7D5Db6' data-toggle='tooltip' title="0x9835B7731017f52AdaDbB1d9f2E3aAA88C7D5Db6">Space
                                      Kill NFT</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,428</td>
                            <td>1,439</td>
                          </tr >
                          <tr>
                            <td>24</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/heroesempires-hea_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x4cd0ce1d5e10afbcaa565a0fe2a810ef0eb9b7e2' data-toggle='tooltip' title="0x4cd0ce1d5e10afbcaa565a0fe2a810ef0eb9b7e2">Hero
                                      Assets</a></div>
                                  </h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Heroes & Empires has exquisitely digital collectibles created using blockchain technology. Heroes & Empires Universe has a lot of different races like Human, Goblin, Elf, Demon, Beast, Naga,
                                    God and Undead which are waiting for the user to discover and collect. </p>
                                </div>
                              </div>
                            </td>
                            <td>1,416</td>
                            <td>2,470</td>
                          </tr >
                          <tr>
                            <td>25</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xd3b11c9633da3a7d0bcad89c6c706037ee79a769' data-toggle='tooltip' title="0xd3b11c9633da3a7d0bcad89c6c706037ee79a769">Material</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,392</td>
                            <td>2,291</td>
                          </tr >
                          <tr>
                            <td>26</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xdfe8f54b894793bfbd2591033e7a307ed28a8d40' data-toggle='tooltip' title="0xdfe8f54b894793bfbd2591033e7a307ed28a8d40">Ninneko
                                      Contract</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,364</td>
                            <td>3,793</td>
                          </tr >
                          <tr>
                            <td>27</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x5467d3D05f9c475Cd840B27D065e31f5d4c4D8cf' data-toggle='tooltip' title="0x5467d3D05f9c475Cd840B27D065e31f5d4c4D8cf">Star
                                      Duke</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,236</td>
                            <td>1,236</td>
                          </tr >
                          <tr>
                            <td>28</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x98eb46cbf76b19824105dfbcfa80ea8ed020c6f4' data-toggle='tooltip' title="0x98eb46cbf76b19824105dfbcfa80ea8ed020c6f4">Thetan
                                      Hero</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,217</td>
                            <td>2,087</td>
                          </tr >
                          <tr>
                            <td>29</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/seascape2_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xc54b96b04aa8828b63cf250408e1084e9f6ac6c8' data-toggle='tooltip' title="0xc54b96b04aa8828b63cf250408e1084e9f6ac6c8">Seascape
                                      NFT</a></div>
                                  </h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Scapes are Seascape's official NFTs. It is designed with top-notch art and quirky humor and these NFTs can be used as financial assets on the Seascape Network.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>1,182</td>
                            <td>2,153</td>
                          </tr >
                          <tr>
                            <td>30</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x47190d2e21a92153abf3837a7da4b65336210f81' data-toggle='tooltip' title="0x47190d2e21a92153abf3837a7da4b65336210f81">MMGNFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,139</td>
                            <td>3,924</td>
                          </tr >
                          <tr>
                            <td>31</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x706551600628337b2cFAb1e6C5C08f5FF121FB8A' data-toggle='tooltip' title="0x706551600628337b2cFAb1e6C5C08f5FF121FB8A">XRUNSHOES</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,106</td>
                            <td>1,659</td>
                          </tr >
                          <tr>
                            <td>32</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xdad27129a4fcb1c9d44868c7da6c6928bcf76fc8' data-toggle='tooltip' title="0xdad27129a4fcb1c9d44868c7da6c6928bcf76fc8">SoulCore</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,089</td>
                            <td>2,899</td>
                          </tr >
                          <tr>
                            <td>33</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xe7475a4f8cc905572bda29cf5a3ea121e5b055db' data-toggle='tooltip' title="0xe7475a4f8cc905572bda29cf5a3ea121e5b055db">Port3
                                      Badge NFT Core</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,064</td>
                            <td>1,411</td>
                          </tr >
                          <tr>
                            <td>34</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xd7cc7a66b658b023979b907c15b9a79c929795c8' data-toggle='tooltip' title="0xd7cc7a66b658b023979b907c15b9a79c929795c8">SolidoGenesisNFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,051</td>
                            <td>1,051</td>
                          </tr >
                          <tr>
                            <td>35</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x7c6e62630647d14218a11c21e6587f661b5653c8' data-toggle='tooltip' title="0x7c6e62630647d14218a11c21e6587f661b5653c8">GameItem</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,009</td>
                            <td>1,759</td>
                          </tr >
                          <tr>
                            <td>36</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xf00dd5fc416e25dd0e4b7d0ce9596e71b9955305' data-toggle='tooltip' title="0xf00dd5fc416e25dd0e4b7d0ce9596e71b9955305">Dylan</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,003</td>
                            <td>1,003</td>
                          </tr >
                          <tr>
                            <td>37</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xd17e098d20646532d120cf227cacf06f895306fd' data-toggle='tooltip' title="0xd17e098d20646532d120cf227cacf06f895306fd">Dylan</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>1,000</td>
                            <td>1,000</td>
                          </tr >
                          <tr>
                            <td>38</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/tribalpunkhero_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xee24b9872022c7770CCC828d856224416CBa005f' data-toggle='tooltip' title="0xee24b9872022c7770CCC828d856224416CBa005f">Tribalpunk
                                      Hero</a></div>
                                  </h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Tribalpunk Cryptoverse is an Idle/RPG game with NFT technology made by ANTADA, a professional Game studio. The game will bring players to the post-apocalyptic period of the Earth after the
                                    Great Destruction event.</p>
                                </div>
                              </div>
                            </td>
                            <td>996</td>
                            <td>1,927</td>
                          </tr >
                          <tr>
                            <td>39</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x13b5816396c5095a145af6994688e6e53fda6095' data-toggle='tooltip' title="0x13b5816396c5095a145af6994688e6e53fda6095">CyBloc</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>960</td>
                            <td>1,703</td>
                          </tr >
                          <tr>
                            <td>40</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x6b484924c33122c1b8a6afea8b8e889a22e7a950' data-toggle='tooltip' title="0x6b484924c33122c1b8a6afea8b8e889a22e7a950">StandardParcel</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>956</td>
                            <td>1,522</td>
                          </tr >
                          <tr>
                            <td>41</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x9d379e2d4bdcd59503390a57078c1bf821d5742a' data-toggle='tooltip' title="0x9d379e2d4bdcd59503390a57078c1bf821d5742a">Summoners
                                      Arena Heroes</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>945</td>
                            <td>1,190</td>
                          </tr >
                          <tr>
                            <td>42</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x99df637ffc373de6bb0e81ee9fec3684760369c3' data-toggle='tooltip' title="0x99df637ffc373de6bb0e81ee9fec3684760369c3">MSP
                                      NFT PET</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>936</td>
                            <td>1,569</td>
                          </tr >
                          <tr>
                            <td>43</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x5fdcf857957e9db2b58be6c5f499a2bc8d64f24c' data-toggle='tooltip' title="0x5fdcf857957e9db2b58be6c5f499a2bc8d64f24c">WIDI
                                      Character</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>887</td>
                            <td>1,546</td>
                          </tr >
                          <tr>
                            <td>44</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xd721214DA2c92f927745Bf7F23e8926A3Fed315A' data-toggle='tooltip' title="0xd721214DA2c92f927745Bf7F23e8926A3Fed315A">DroidBot
                                      NFT Token</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>884</td>
                            <td>1,087</td>
                          </tr >
                          <tr>
                            <td>45</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/token/images/pancakebunnies_32.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xdf7952b35f24acf7fc0487d01c8d5690a60dba07' data-toggle='tooltip' title="0xdf7952b35f24acf7fc0487d01c8d5690a60dba07">Pancake
                                      Bunnies</a></div>
                                  </h3>
                                  <p className='d-none d-md-block font-size-1 mb-0'>Pancake Bunnies are PancakeSwap's official, home-raised NFT.
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>861</td>
                            <td>1,602</td>
                          </tr >
                          <tr>
                            <td>46</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xecA16dF8D11d3a160Ff7A835A8DD91e0AE296489' data-toggle='tooltip' title="0xecA16dF8D11d3a160Ff7A835A8DD91e0AE296489">POSI-NFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>858</td>
                            <td>1,438</td>
                          </tr >
                          <tr>
                            <td>47</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0x69D60ad11fEB699fE5fEEeB16AC691dF090bfd50' data-toggle='tooltip' title="0x69D60ad11fEB699fE5fEEeB16AC691dF090bfd50">STEPNNFT</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>840</td>
                            <td>2,171</td>
                          </tr >
                          <tr>
                            <td>48</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xa52c7e2a2a9d09e52f13ae9feb1586fee9da8c88' data-toggle='tooltip' title="0xa52c7e2a2a9d09e52f13ae9feb1586fee9da8c88">Uncharted
                                      Ship</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>838</td>
                            <td>845</td>
                          </tr >
                          <tr>
                            <td>49</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xaAF54a3dC073E5c8D7f03c21C3672DeB118D3514' data-toggle='tooltip' title="0xaAF54a3dC073E5c8D7f03c21C3672DeB118D3514">MetaBombBomb</a>
                                    </div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>825</td>
                            <td>1,354</td>
                          </tr >
                          <tr>
                            <td>50</td>
                            <td>
                              <div className='media'><img className='u-xs-avatar mr-2' src='/images/main/empty-token.png' />
                                <div className='media-body'>
                                  <h3 className='h6 mb-0'>
                                    <div className='token-wrap'><a className='text-primary' href='/token/0xcB10AFCE094D08F8567195669C96e894dbcA9806' data-toggle='tooltip' title="0xcB10AFCE094D08F8567195669C96e894dbcA9806">PandoBox
                                      NFT Token</a></div>
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td>818</td>
                            <td>932</td>
                          </tr >
                        </tbody >
                      </table >
                    </div >
                  </div >
                  <form method="post" action="./tokens-nft" id="ctl00">
                    <div className="aspNetHidden">
                      <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
                      <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
                      <input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
                      <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="cnXUwuYK7Qo7sTxvkJNMovddNsS+OzJQcmI6SXbuXmUe7fa5GzLN3WbG1v/VHN+YMD7rLE9hXWbGlwhPMZgIxzN8w2gz8Eo92Rcj1PFWI2Y=" />
                    </div>

                    <div className="aspNetHidden">
                      <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="BAF40A70" />
                      <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="EOZi0sQ1J81rUQH3sKcCUlXAsEZ3HMQILxOaO50CP7wIw98MOvaavu1YTLYgMyE93oc+lWGAZlHTVbLpyLXGeWXT9cN9kTa+sVXcBKRyljvh0P8WHwoIMWaKSKuo+Ul6cyC3KRmlyCb2bZHvMP88jfc0FQNGL4JNRhQTPirhGNMamZDgrxlTZrywFHSxHiXDB1x8Ln1dfxnvL3GVniiXOw=="
                      />
                    </div>
                    <div id="ContentPlaceHolder1_divPagination" className="d-md-flex justify-content-between align-items-center my-3">
                      <div className="d-flex align-items-center text-secondary mb-3 mb-md-0"> Show <select name="ctl00$ContentPlaceHolder1$ddlRecordsPerPage" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$ContentPlaceHolder1$ddlRecordsPerPage\&#39;,\&#39;\&#39;)&#39;, 0)" id="ContentPlaceHolder1_ddlRecordsPerPage"
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
                            className="font-weight-medium">887</strong></span></li>
                        <li className="page-item" data-toggle='tooltip' title="Go to Next"><a className="page-link" href="tokens-nft?p=2" aria-label="Next"><span
                          aria-hidden="True"><i
                            className="fa fa-chevron-right small"></i></span> <span
                              className="sr-only">Next</span></a></li>
                        <li className="page-item"><a className="page-link" href="tokens-nft?p=887"><span
                          aria-hidden="True">Last</span> <span
                            className="sr-only">Last</span></a></li>
                      </ul>
                    </div>
                  </form>
                </div >
              </div >
            </div >
          </div >
        </div >

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
