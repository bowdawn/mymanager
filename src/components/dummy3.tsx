import React, { FC } from 'react';
import Header from 'src/components/header';
import { message, Space } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const DummyPage3: FC = (props: any) => {
  return (
    <div>
      <Header
        title='플랜 확인'
        subTitle={
          <div onClick={() => message.info('save icon: to be implemented')}>
            <Space size={4}>
              <SaveOutlined style={{ fontSize: 25 }} />
              저장
            </Space>
          </div>
        }
      />
      <div style={{ padding: 25 }}></div>
    </div>
  );
};
export default DummyPage3;
