import React, { FC, useRef } from 'react';

import MyManagerScreen from 'src/screens/MyManagerScreen/index';
import CustomerInputScreen from 'src/screens/CustomerInputScreen/index';
import ConfirmPlanScreen from 'src/screens/ConfirmPlanScreen/index';
import AddPlanScreen from 'src/screens/AddPlanScreen/index';
import ProductDetailScreen from 'src/screens/ProductDetailScreen/index';
import PageNotFoundScreen from 'src/screens/PageNotFoundScreen/index';
import NotAuthorizedScreen from 'src/screens/NotAuthorizedScreen/index';
import PrivateRoute from 'src/router/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const MainNavigator: FC<any> = (props: any) => {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to={screenPath1} />
        <Route exact path={screenPath1} component={MyManagerScreen} />
        <Route exact path={screenPath2} component={CustomerInputScreen} />
        <PrivateRoute
          exact
          path={screenPath3}
          component={(props: any) => (
            <ConfirmPlanScreen
              {...props}
              name={props.location.state.name}
              age={props.location.state.age}
            />
          )}
          state={['name', 'age']}
        />
        <PrivateRoute
          exact
          path={screenPath4}
          component={(props: any) => (
            <AddPlanScreen
              {...props}
              name={props.location.state.name}
              age={props.location.state.age}
            />
          )}
          state={['name', 'age']}
        />

        <Route exact path={screenPath5} component={ProductDetailScreen} />
        <Route exact path={screenPath6} component={NotAuthorizedScreen} />
        <Route component={PageNotFoundScreen} />
      </Switch>
    </Router>
  );
};

export default MainNavigator;
