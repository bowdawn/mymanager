import React, { FC } from 'react';

import Dummy from 'src/pages/dummy';
import Dummy1 from 'src/pages/dummy1';
import Dummy2 from 'src/pages/dummy2';
import Dummy3 from 'src/pages/dummy3';
import Dummy4 from 'src/pages/dummy4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MainNavigator: FC = (props: any) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dummy} />
          <Route exact path='/dummypage1' component={Dummy1} />
          <Route exact path='/dummypage2' component={Dummy2} />
          <Route exact path='/dummypage3' component={Dummy3} />
          <Route exact path='/dummypage4' component={Dummy4} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainNavigator;
