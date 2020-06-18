import React, { FC, ReactHTMLElement } from 'react';
import { message, PageHeader } from 'antd';
import Icon, { ArrowLeftOutlined } from '@ant-design/icons';

const Header: FC<any> = (props: {
  title: string;
  subTitle: ReactHTMLElement<HTMLElement>;
}) => {
  const { title, subTitle } = props;
  return (
    <PageHeader
      backIcon={<Icon />}
      onBack={() => message.info('header back: to be implemented')}
      title={null}
      extra={subTitle ? subTitle : <div></div>}
    >
      {<div className='title'>{title}</div>}
    </PageHeader>
  );
};

export default Header;
