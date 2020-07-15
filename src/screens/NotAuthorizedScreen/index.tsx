import React, { FC } from 'react';

import { Result, Button } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
const PageNotFoundScreen: FC<Props> = ({ history }) => {
  page403Visited = true;
  return (
    <div className='f-fd-c hp100'>
      <Result
        status='403'
        title='403'
        subTitle='해당되는 페이지로 들어갈 수 없습니다. 권한이 없습니다'
        extra={
          <Button type='primary' onClick={() => history.goBack()}>
            이전 페이지로 돌아가기
          </Button>
        }
      />
    </div>
  );
};
export default PageNotFoundScreen;
