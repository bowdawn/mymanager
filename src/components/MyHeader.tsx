import React, { FC, ReactChild } from 'react';
import { PageHeader, Row, Col } from 'antd';

import { ReactComponent as ArrowLeft } from 'src/assets/icons/header-arrow-left.svg';
import Icon from '@ant-design/icons';
import 'src/assets/less/components/header.less';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
  extra?: ReactChild | string;
  subHeader?: { name: string; age: string | number };
}

const Header: FC<Props> = ({ title, extra, subHeader }) => {
  const history = useHistory();
  return (
    <div {...(subHeader ? { className: 'my-header-background' } : {})}>
      <PageHeader
        className='my-header'
        backIcon={<Icon className='arrow-left fs24' component={ArrowLeft} />}
        onBack={() => history.goBack()}
        title={null}
        extra={extra ? <div>{extra}</div> : <div></div>}
      >
        {<div className='title'>{title}</div>}
      </PageHeader>
      {subHeader ? (
        <Row className='ant-row-midnight ' justify='center'>
          <Col>
            <div className='pv10 fs18'>
              <span className='fc-dsb'>김백호</span>님 보험연령
              <span className='fc-dsb'>46</span>세
            </div>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export default Header;
