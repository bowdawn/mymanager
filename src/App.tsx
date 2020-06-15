import React, { FC, useState, useLayoutEffect } from 'react';

import 'src/App.less';

import Dummy1 from 'src/components/dummy1';
import Dummy2 from 'src/components/dummy2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    <div
      className='App'
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        maxHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: 'solid 1px #37BD7D',
          borderRadius: 10,
          width: width > maxWidth ? maxWidth : width,
          height: height > maxHeight ? maxHeight : height,
          overflowY: 'auto',
        }}
      >
        <Router>
          <Switch>
            <Route exact path='/' component={Dummy1} />
            <Route exact path='/dummypage2' component={Dummy2} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
