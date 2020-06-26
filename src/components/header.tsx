import React, { FC, ReactHTMLElement, ReactChild } from 'react';
import { message, PageHeader } from 'antd';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/arrow-left.svg';
import Icon from '@ant-design/icons';
import 'src/assets/components/header.less';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  extra?: ReactChild;
  backgroundColor?: true;
}

const Header: FC<Props> = ({ title, extra, backgroundColor }) => {
  return (
    <div {...(backgroundColor ? { className: 'my-header-background' } : {})}>
      <PageHeader
        className='my-header'
        backIcon={
          <Link to=''>
            <Icon className='arrow-left' component={() => <ArrowLeft />} />
          </Link>
        }
        onBack={() => message.info('header back: to be implemented')}
        title={null}
        extra={extra ? <div>{extra}</div> : <div></div>}
      >
        {<div className='title'>{title}</div>}
      </PageHeader>
    </div>
  );
};

export default Header;
