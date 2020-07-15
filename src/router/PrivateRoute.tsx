import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import axios from 'src/lib/api';

interface IPrivateRouteProps extends RouteProps {
  component: any;
  state?: Array<string>;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  console.log(window);
  const state: any = rest.location?.state;
  let stateProps: any = {};

  if (axios.defaults.headers.authorization) {
    if (rest.state) {
      if (
        state &&
        rest.state.every(
          (element: string) => state[element] || state[element] === 0
        )
      ) {
        rest.state.forEach((element: string) => {
          stateProps[element] = state[element];
        });
        return (
          <Route
            {...rest}
            render={(props) => <Component {...props} {...stateProps} />}
          />
        );
      }
    } else {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
  }
  if (page403Visited) {
    globalThis.history.back();
  }
  return (
    <Redirect to={{ pathname: screenPath6, state: { from: screenPath6 } }} />
  );
};

export default PrivateRoute;
