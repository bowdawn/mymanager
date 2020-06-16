import React, { FC, ReactHTMLElement } from 'react';
import { message, PageHeader } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header: FC<any> = (props: {
  title: string;
  subTitle: ReactHTMLElement<HTMLElement>;
}) => {
  const { title, subTitle } = props;
  return (
    <PageHeader
      backIcon={<ArrowLeftOutlined style={{ fontSize: 32 }} />}
      className='site-page-header'
      onBack={() => message.info('header back: to be implemented')}
      title={<div style={{ color: '#adeacd' }}>{title}</div>}
      subTitle={subTitle ? subTitle : <div></div>}
    ></PageHeader>
  );
};

export default Header;
