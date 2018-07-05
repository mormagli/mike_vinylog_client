import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';

const PrivateRoute = ({ component: Component, loggedIn, ...passThrough }) => (
  <Route {...passThrough}
    render={props => loggedIn ? 
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />) }
  />
);

const mapStateToProps = (state) => ({ 
  authenticating: state.auth.loading,
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error
});

export default connect(mapStateToProps)(PrivateRoute);