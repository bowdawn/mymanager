import React, { FC } from 'react';

import Dummy from 'src/screens/NavigationScreen';
import Dummy1 from 'src/screens/MyManagerScreen';
import Dummy2 from 'src/screens/CustomerInputScreen';
import Dummy3 from 'src/screens/ConfirmPlanScreen';
import Dummy4 from 'src/screens/AddPlanScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainNavigator: FC = (props: any) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dummy} />
          <Route exact path={screenPath1} component={Dummy1} />
          <Route exact path={screenPath2} component={Dummy2} />
          <Route exact path={screenPath3} component={Dummy3} />
          <Route exact path={screenPath4} component={Dummy4} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainNavigator;
