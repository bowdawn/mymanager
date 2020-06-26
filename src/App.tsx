import React, { FC, useState, useLayoutEffect } from 'react';

import 'src/App.less';

import Dummy from 'src/pages/dummy';
import Dummy1 from 'src/pages/dummy1';
import Dummy2 from 'src/pages/dummy2';
import Dummy3 from 'src/pages/dummy3';
import Dummy4 from 'src/pages/dummy4';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import koKr from 'antd/es/locale/ko_KR';
import 'src/assets/constants/colors';
import 'src/assets/constants/globals';

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

const App: FC = () => {
  const [width, height] = useWindowSize();
  const maxWidth = 500;
  const maxHeight = 900;
  return (
    <div className='App'>
      <div
        className='mobile-border'
        style={{
          width:
            width > parseInt(maxScreenWidth) ? parseInt(maxScreenWidth) : width,
          height:
            height > parseInt(maxScreenHeight)
              ? parseInt(maxScreenHeight)
              : height,
        }}
      >
        <ConfigProvider locale={koKr}>
          <Router>
            <Switch>
              <Route exact path='/' component={Dummy} />
              <Route exact path='/dummypage1' component={Dummy1} />
              <Route exact path='/dummypage2' component={Dummy2} />
              <Route exact path='/dummypage3' component={Dummy3} />
              <Route exact path='/dummypage4' component={Dummy4} />
            </Switch>
          </Router>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default App;
