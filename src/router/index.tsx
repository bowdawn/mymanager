import React, { FC } from 'react';

import MyManagerScreen from 'src/screens/MyManagerScreen/index';
import CustomerInputScreen from 'src/screens/CustomerInputScreen/index';
import ConfirmPlanScreen from 'src/screens/ConfirmPlanScreen';
import AddPlanScreen from 'src/screens/AddPlanScreen';
import ProductDetailScreen from 'src/screens/ProductDetailScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const MainNavigator: FC = (props: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to={screenPath1} />
        </Route>
        <Route exact path={screenPath1} component={MyManagerScreen} />
        <Route exact path={screenPath2} component={CustomerInputScreen} />
        <Route exact path={screenPath3} component={ConfirmPlanScreen} />
        <Route exact path={screenPath4} component={AddPlanScreen} />
        <Route exact path={screenPath5} component={ProductDetailScreen} />
      </Switch>
    </Router>
  );
};

export default MainNavigator;
