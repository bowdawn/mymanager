import React, { FC, useState, useLayoutEffect } from 'react';

import 'src/App.less';

import { ConfigProvider } from 'antd';
import koKr from 'antd/es/locale/ko_KR';
import 'src/assets/constants/colors';
import 'src/assets/constants/globals';
import MainNavigator from './navigations/MainNavigator';

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
  return (
    <div
      className='App ant-override'
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
        <MainNavigator />
      </ConfigProvider>
    </div>
  );
};

export default App;
