import React, { FC, useState, useLayoutEffect } from 'react';

import 'src/App.less';
import { ConfigProvider } from 'antd';
import koKr from 'antd/es/locale/ko_KR';
import 'src/assets/constants/colors';
import 'src/assets/constants/globals';
import 'src/assets/constants/auth';
import MainNavigator from './router';

const App: FC = () => {
  return (
    <ConfigProvider locale={koKr}>
      <MainNavigator />
    </ConfigProvider>
  );
};

export default App;
