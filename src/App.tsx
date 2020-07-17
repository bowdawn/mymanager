import React, { FC } from 'react';
import 'src/App.less';
import { ConfigProvider } from 'antd';
import koKr from 'antd/es/locale/ko_KR';
import 'src/assets/constants/global/index';
import Router from './router';

const App: FC = () => {
  return (
    <div className='app ant-override'>
      <ConfigProvider locale={koKr}>
        <Router />
      </ConfigProvider>
    </div>
  );
};

export default App;
