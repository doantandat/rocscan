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
        <div class="container">
          <div class="border-bottom py-3 mb-3">
            <div class="mb-2 mb-sm-0">
              <h1 class="h4 mb-0">Broadcast Raw Transaction</h1>
            </div>
          </div>
          <p class="mb-0">This page allows you to paste a Signed Raw Transaction in hex format (i.e. characters 0-9, a-f) and broadcast it over the Binance network.</p>
        </div>
        <div class="container space-bottom-2">
          <div class="py-4">
            <form method="post" action="./pushTx" id="ctl00" class="js-validate">
              <div class="aspNetHidden">
                <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="BDW8JQSxyV7X3J/BVsL2NnsKkCssvwBcRuJ5hOomYww1Mbxj4ZU8MNGBpDIoHd8dzzQCOwq09sL2UiZKFHGAKzqrmG0BRt5q3fh9Vdw51BZ5hw+jrV39Er6NBO1Y9zMsl+KhbnEhSHQIAO20Bp28m9uiAuW01DtSIkXDxsy1QWbJ0vIregqTqOvjjiGVB0+FJksplDkFREQ+kGx8DiwBGbSvyjZjTElXgrRGxg6oggRjcyMIu/ah3lFzBW4x5oT86/KyQCuD9NE48F+jfnHPLQiN1E2E/2roCLeMDXuJvEkwGQTVoBiji9l/pgIwtjE7H//gAJJLu8mLhpeRlqCvrLDyy7a3n2veZhpXZH86Cr73T8nUANT0r8+OZow4IWM78OYitkwzJBkVUyZuXIz6/55/Wy2Vyt/bqaPDuRs9/DlGbbUeGzBjm7tJnpKnSeh+RJgyUsz98Q4lglYPitpo3x18AaEcvBDsJGds2aPZpFzqng4fss1X1NqSAEXoCLGpADm7HImvbsCj3TI7XXoIU4u3VQMJ+Ztmsv+tflBut7N2UQFa+aMFf1YONa55ru4Hj3soVYWq7hjhrJNO+bM00frPpaTdmo1zNG0GISkkcq2F7FwBwKasvFUvhY/AvBnxOoN2F5OdxvKM5MuvnlwOPaee3qEWUcTG2a8bdfTapgJyUT2DOMLzOwI2yDBUT4UpC8tqIgYtaa9gTx5m8n+AXMobJgVg4eaap+s3kSEoxxpifBY9J4TZ+KGw34i+Cjg2oebqXtUZEyub3x3TCdq4WFHTYr73WGcrZA0EnO8EEJfS+vynMbzIYe2JlK7yuj0FLlETyQcYWrHkMrZ/WLJYmTAR2iluRHzeNJ1ooe2QkSvLjPPb1dIz8UUnL2BKjWgeiNiMgrjN/hW6YFUcNJG/9eF1Z/bj+4pqLbb3JaEE4uOiwd1ZJgBzP8Gh2jmeAj+KY4hbkgT/gIEFvGbRlStQOa8fssHAo4Bwy/tDOg7Hou41rOqX948bFzuMHJWJ//an4H3LSVp/mqVVjPhlrQdKiscYszMyQebGUXBzbvfCijCoUdscFbk5560Ox1ggpdEl69ELbnxqvupO1+W/87BeMpipZ9QUzSBqHz9jZ89afsQwjSV0aMeJd7oeippnsteyL+1P15q5UqevoOMBaFKIfJ0vj3G66v5AfAfdr2g5iEw8cACCxe75kOPaj4lqIuB28LkC2G2HNgr4c4rHTm5Zxe3V9Q7Ei23qqcYdAALp9CwAPxMczDwlmdDWlLTcn+3CTZMplZd9JekDQvgZDI4CSXqN3A8bM2djmyyye+A9jsnKf/PBRkeIhhvYBq4HNj6uVQDf2BK+9KHli0/Pe64Tn3YYaCFqu0u4YPUXiGanAFLNSxvwIoVXvKGmSwK91BE9vSodvpublbje1YP5LQ3AFZ7Ib4Qo125kMyPQ/uVSHph4agkAikQqrls9+PPpvvu7WOR4sEihTXigZ6DfeVNEpn73Ow1gJe+naWQ68nSQOon5GTS+5MG5bCP7Nv+56E3anfAzvQW/a1cyIkvPLOlLYGFgGA4i7xpLtr3vmdtcuegJ/79uPJZiDG+unfkgWUJGzsXn/s0SKzhXB2GRFK7wZf8NlIYTQyKK+lx54ITfBFdr5fl/II8XN5GNvAwDgZSnXWFwItNpxf2dasMYjCHYOPeT3ROi8M7l9T18XFGv58ryLzJ50XShBDvZFTsOji2W1nuJPznZJ+Hf0xlHrFryrpmjdEWsGfey+UxEoJEi4cMKS8aoXUMEL7hHymcJGll2i72vehGN1oT6raiZUr7s6DtXvnywk8n+iDtrv+CNX47BL3qV1SNyyyeUb8Zcv/s8Atevq7qNTCDivG/8qBvexPGRdtsqPMf11MNlRajjse+4u+A0+eS+CP1AxPknVW6j+xOKuZm+JP+zk3O8NaFP5mcgm/4+Qftd+X13RHjrv8tdCceuVtTxRfl4HV4/DTKV/tGIJtUV+ZQPo2fV6UqStmYVhI9pyv8rPFpfvwQIVJBJ2bWR83jrr+1AQNbyGbsRw/gDscMa8FUkqE6rnCm1Z9VCmyRulgYVUxUtUWqksXL6yx6yEBMTxRRa8bzXqmMnvfoV5pLOKYvPKyGFyxq9ciqt8KyxHkIvCgO26cikSUug6L/SlrchsiCnzclhb3SMDxGfad4FLXTyDnpMMmbVxwc+qk/0tSYqecs6/Ptl/NXpu3Lbhhu5b/pWVRMMf7PNVI/m331Z1BnSF0KGgj1UZAZwAYZ2TcXZiexIvR7BqqFaw8HVKa8yJqAebTVkQZkqbkSAhEneOUtrkS6M4Qm/QhMq/6gAWPGx7SFz5NTBDhXTuYJU+FIwzU6Omb7/UyHviIq2OYji0rtTMrUJSJOclhWC99hxvt61swG8oWs1+uM1eaCBrKhMPjZ6uvclc/DcZNkcHZFYPsX/c0iBe6PWo32uBj3HkFcVj+FMKK446lGACZ4iaAdEz9hHLri5NWZoIwj0aa0os/XDngOBWxfmYhRfk5QSewxa2fHyLwmpxySafyf0ZvPYojjQUhYCZyHV9OEPn69e0JyMEfnu9i7R+VtLoTRsozCY/zEPcfffp88RJN7FA2RJSM5ocDkhlBWmNbPErRn5xXU0ojd4uxhknS2vPeWJMXJ0yxhiMXfbPdUYA1Sk0qCA/uzJm/i0im0/yPZmO8gE56Dw6IEfLDUOSlLXrUoM/yATNA6PhsMUsBqtWFvVptL/k9PG/dmFtfz92GiVMEaHU2p4047I/r1PiXeF23ju5rLSRawS5EpyTGGYlgnNKpBoRBVy1keJHCZf64Pu9wBXl7GbDpOlTK2fUQyl57ZOiBj9LFNkBAMDQ0RfKO14LadTMlm7RCdJYpnOvgt1oz9fGpIMBI/pyWq4aQ=="
                />
              </div>
              <div class="aspNetHidden">
                <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="60CB2C01" />
                <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="axpTA1L1/ySTpvrX3coj0MCnkqzWiwNoci/Rf23dd+98RPjLFXeqKN/dgt0bzyYo/oaBduLujgKVD8NKegrUhcjKgFJr3DwJLjBxLnqA+O7O0IXkYKzu2FSqS9Tl39xMQKp4eGXtkMGuT5dZojJMZA==" />
              </div>
              <div class="js-form-message mb-3">
                <textarea name="ctl00$ContentPlaceHolder1$txtRawTx" rows="8" cols="20" id="ContentPlaceHolder1_txtRawTx" class="form-control w-100" required="" data-error-class="u-has-error" data-success-class="u-has-success" placeholder="Enter signed transaction hex (0x..)"
                  data-msg="Please enter signed transaction hex"></textarea>
              </div>
              <div class="text-md-right">
                <input type="submit" name="ctl00$ContentPlaceHolder1$btnSubmit" value="Send Transaction" id="ContentPlaceHolder1_btnSubmit" class="btn btn-sm btn-primary" />
              </div>
            </form>
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
