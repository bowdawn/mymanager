import React, { FC } from 'react';
import { Typography, Space } from 'antd';

const { Title, Link } = Typography;

const DummyPage: FC = (props: any) => {
  return (
    <div style={{ padding: 25 }}>
      <Space direction='vertical'>
        <Title level={3}>
          Hello This is the prototype navigation page, please go click on the
          links below to view the dummy pages.
        </Title>
        <Link href='/dummypage1'>go to dummypage1</Link>
        <Link href='/dummypage2'>go to dummypage2</Link>
      </Space>
    </div>
  );
};
export default DummyPage;
