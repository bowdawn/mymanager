import React, { FC, useState } from 'react';
import Header from 'src/components/MyHeader';
import Footer from 'src/components/MyFooter';
import { message, Button } from 'antd';
import { ReactComponent as ResetIcon } from 'src/assets/icons/reset.svg';

import {
  QuickSetup,
  ProductTypeChoice,
  PlanTypeChoice,
  CompanyChoice,
  ExpirationChoice,
  PricePlanChoice,
} from 'src/screens/AddPlanScreen/components/index';
import { useHistory } from 'react-router-dom';

const AddPlanScreen: FC = (props: any) => {
  const history = useHistory();

  let name = '';
  let age = 0;
  if (props.location.state && props.location.state.name) {
    name = props.location.state.name;
    if (props.location.state.age) {
      age = props.location.state.age;
    }
  } else {
    history.replace(screenPath1);
  }

  const [rotate, setRotate] = useState(false);
  return (
    <div>
      <Header title='빠른 설계' subHeader={{ name: name, age: age }} />
      <QuickSetup />

      <div className='ph16 pt40'>
        <div className='fs12 fls60 fwb mb10 ph2-5'>성품군 선택</div>

        <ProductTypeChoice />
        <div className='fs12 fls60 fwb mb10 ph2-5'>플랜선택</div>

        <PlanTypeChoice />
        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>회사 선택</div>
          <CompanyChoice />
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>만기선택</div>
          <ExpirationChoice />
        </div>

        <div className='mb40'>
          <div className='fs12 fls60 fwb mb10 ph2-5'>가격종류</div>
          <PricePlanChoice />
        </div>

        <div className='f f-ai-c h55 mb50'>
          <Button
            className={rotate ? 'hp100 mr8 br4 rot-360' : 'hp100 mr8 br4'}
            onAnimationEnd={() => setRotate(false)}
            onClick={() => {
              setRotate(true);
              message.info('reset button: to be implemented');
            }}
          >
            <ResetIcon />
          </Button>

          <Button
            type='primary'
            className='f1 fls8 fs18 fwb hp100 br4'
            onClick={() => history.push}
          >
            간편 보험료 설계
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default AddPlanScreen;
