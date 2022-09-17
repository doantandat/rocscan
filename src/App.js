import React, { Component } from "react";
// import "./components/style.css";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import AuthenticatedRoute from "./pages/AuthenticatedRoute/AuthenticatedRoute ";
import routers from "./routers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Web3 from "web3";
import
{
  addTree,
  getInfoUser

} from "./service";

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    };

  }

  render()
  {
    // /console.log(authentication.isAuthenticated())
    // let isLogined = authentication.isAuthenticated();

    return (

      <Router>
        <div className="wrapper">
          <Header />
          <main id="content" role="main">
            <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
            <input type="hidden" name="hdnDateTimeText" id="hdnDateTimeText" value="Date Time (UTC)" />
            <input type="hidden" name="hdnAgeTitle" id="hdnAgeTitle" value="Click to show Age Format" />
            <input type="hidden" name="hdnDateTimeTitle" id="hdnDateTimeTitle" value="Click to show Datetime Format" />
            <input type="hidden" name="hdnGasPriceTitle" id="hdnGasPriceTitle" value="Gas Price in Gwei" />
            <input type="hidden" name="hdnTxnFeeTitle" id="hdnTxnFeeTitle" value="(Gas Price * Gas Used by Txns) in ROC" />
            <input type="hidden" name="hdnGasPriceText" id="hdnGasPriceText" value="Gas Price" />
            <input type="hidden" name="hdnTxnText" id="hdnTxnText" value="Txn Fee" />
            <Switch>
              {/* <Route path="/login" element={<Login />} /> */}
              {routers.length > 0 &&
                routers.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    // isLogined={isLogined}
                    // RedirectLogin={this.RedirectLogin}
                    // redirectToLogin={this.redirectToLogin}
                    render={props => (
                      route.main({ ...props, routers: route.routers })
                    )}

                  />
                ))}
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>

            </Switch>
          </main>

          <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" id="emailSubscribeModalBox" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <button type="button" class="close close-md" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="text-center py-5-alt px-4">
                    <div id="emailSubscribeModalBoxText"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}


export default App;
