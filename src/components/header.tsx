import React, { FC, ReactHTMLElement } from 'react';
import { message, PageHeader } from 'antd';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/arrow-left.svg';
import Icon from '@ant-design/icons';
import 'src/assets/components/header.less';
import { Link } from 'react-router-dom';

const Header: FC<any> = (props: {
  title: string;
  subTitle: ReactHTMLElement<HTMLElement>;
}) => {
  const { title, subTitle } = props;

  return (
    <PageHeader
      className='my-header'
      backIcon={
        <Link to=''>
          <Icon className='arrow-left' component={() => <ArrowLeft />} />
        </Link>
      }
      onBack={() => message.info('header back: to be implemented')}
      title={null}
      extra={subTitle ? subTitle : <div></div>}
    >
      {<div className='title'>{title}</div>}
    </PageHeader>
  );
};

export default Header;
