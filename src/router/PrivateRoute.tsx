import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  component: any;
  state: Array<string>;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  console.log(rest);
  const state: any = rest.location?.state;
  let stateProps: any = {};

  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          state &&
          rest.state.every(
            (element: string) => state[element] || state[element] === 0
          )
        ) {
          rest.state.forEach((element: string) => {
            stateProps[element] = state[element];
          });
          return <Component {...props} {...stateProps} />;
        } else {
          return (
            <Redirect
              to={{ pathname: screenPath6, state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
