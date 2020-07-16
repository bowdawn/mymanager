import React, { FC, useState, useLayoutEffect, useRef } from 'react';

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
  useHistory,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const MainNavigator: FC<any> = (props: any) => {
  const [width, height] = useWindowSize();

  return (
    <Router>
      <ScrollToTop />
      <div className='App ant-override'>
        <div
          style={{
            width:
              width > parseInt(maxScreenWidth)
                ? parseInt(maxScreenWidth)
                : width,
            height: height,
          }}
        >
          <Switch>
            <Redirect
              exact
              from='/'
              to={screenPath1 + '?serviceName=test&key=test'}
            />
            <Route exact path={screenPath1} component={MyManagerScreen} />
            <PrivateRoute
              exact
              path={screenPath2}
              component={CustomerInputScreen}
            />
            <PrivateRoute
              exact
              path={screenPath3}
              component={(props: any) => <ConfirmPlanScreen {...props} />}
            />
            <PrivateRoute
              exact
              path={screenPath4}
              component={(props: any) => <AddPlanScreen {...props} />}
            />

            <Route exact path={screenPath5} component={ProductDetailScreen} />
            <Route exact path={screenPath6} component={NotAuthorizedScreen} />
            <Route component={PageNotFoundScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainNavigator;
