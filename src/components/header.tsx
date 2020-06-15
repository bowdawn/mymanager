import React, { FC } from 'react';
import { message, PageHeader } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header: FC = () => {
  return (
    <PageHeader
      backIcon={<ArrowLeftOutlined style={{ fontSize: 32 }} />}
      className='site-page-header'
      onBack={() => message.info('to be implemented')}
      title={<div style={{ color: '#adeacd' }}>마이매니저</div>}
      subTitle={<div style={{ width: 32 }}></div>}
    ></PageHeader>
  );
};

export default Header;
