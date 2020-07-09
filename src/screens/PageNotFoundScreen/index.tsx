import React, { FC } from 'react';

import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const PageNotFoundScreen: FC<any> = (props: any) => {
  const history = useHistory();
  return (
    <div className='f-fd-c hp100'>
      <Result
        status='404'
        title='404'
        subTitle='존재하지 않는 페이지입니다'
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
