/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/chat" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
