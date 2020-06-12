import React, { FC } from 'react';
import { Button, message, Row, Col, Space, PageHeader } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header: FC = () => {
  return (
    <PageHeader
      className='site-page-header'
      onBack={() => message.info('to be implemented')}
      title={<div>마이매니저</div>}
      subTitle={<div style={{ width: 32 }}></div>}
      style={{ borderBottom: 'solid 1px lightgreen' }}
    ></PageHeader>
  );
};

export default Header;
