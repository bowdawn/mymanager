import React, { FC, ReactChild } from 'react';
import { PageHeader } from 'antd';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/header-arrow-left.svg';
import Icon from '@ant-design/icons';
import 'src/assets/components/header.less';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
  extra?: ReactChild | string;
  backgroundColor?: true;
}

const Header: FC<Props> = ({ title, extra, backgroundColor }) => {
  const history = useHistory();
  return (
    <div {...(backgroundColor ? { className: 'my-header-background' } : {})}>
      <PageHeader
        className='my-header'
        backIcon={
          <Icon className='arrow-left' component={() => <ArrowLeft />} />
        }
        onBack={() => history.goBack()}
        title={null}
        extra={extra ? <div>{extra}</div> : <div></div>}
      >
        {<div className='title'>{title}</div>}
      </PageHeader>
    </div>
  );
};

export default Header;
