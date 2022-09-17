import React, { Component } from "react";

import
{
  withRouter,
  Link
} from "react-router-dom";
class RouteCus extends React.Component
{
  render()
  {
    let { to, activeOnlyWhenExact, location, label } = this.props;
    let active = '';

    if (location && location.pathname === to) {
      active = ' css-8bjxkm ';
    }
    return (

      <Link to={to} target="">
        <p className={"chakra-text css-1795l1l " + active}>{label}</p>
      </Link>
    );
  }
}
const CustomRoute = withRouter(RouteCus);
export default CustomRoute;
