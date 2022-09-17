import React, { Component } from "react";
import { Route } from "react-router-dom"
import Login from "./../login/Login";
class AuthenticatedRoute extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      isLogined: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState)
  {

    if (nextProps.isLogined && nextProps.isLogined !== prevState.isLogined) {
      console.log("isLogined");
      return { isLogined: nextProps.isLogined };

    }
    else {
      return null;
    }
  }

  setlogin = () =>
  {
    this.setState(state =>
    {
      return {
        isLogined: true
      }
    })
  }
  render()
  {
    let { isLogined } = this.state;
    let { key, path, exact, name, render } = this.props;

    if (!isLogined) {
      return <Login setlogin={this.setlogin} />
    }
    else {
      return <Route key={key}
        path={path}
        exact={exact}
        name={name}
        isLogined={isLogined} render={render} />
    }
  }
}
export default AuthenticatedRoute;
// AuthenticatedRoute.propTypes = {
//   isLogined: PropTypes.bool.isRequired,
//   component: PropTypes.element,
//   redirectToLogin: PropTypes.func.isRequired
// }