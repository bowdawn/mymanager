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
  return (
    <Route
      {...rest}
      render={(props) =>
        state && rest.state.every((element: string) => state[element]) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: screenPath6, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
