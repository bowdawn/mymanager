import React, { FC, useState } from 'react';
import Header from 'src/components/MyHeader';
import ProductCard from 'src/components/ProductCard';
import Footer from 'src/components/MyFooter';
import {
  TogglePlan,
  NewsCardCarousel,
  SaveModalBody,
} from 'src/screens/ConfirmPlanScreen/components/index';
import { message, Button, Modal, Divider } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as SaveIcon } from 'src/assets/icons/save.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus-icon.svg';
import { ReactComponent as KakaoIcon } from 'src/assets/icons/kakao.svg';

import { productCards } from 'src/assets/constants/index';
import { useHistory } from 'react-router-dom';

const ConfirmPlanScreen: FC<any> = (props: any) => {
  const [myPlan, setMyPlan] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);

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

  return (
    <div className='f-fd-c hp100'>
      <Header
        title='플랜 확인'
        extra={
          <div className='f-fd-c' onClick={() => setShowSaveModal(true)}>
            <Icon className='mb6' component={() => <SaveIcon />} />
            <div className='fs12 fls60'>플랜저장</div>
          </div>
        }
        subHeader={{ name: name, age: age }}
      />
      <div className='ph16 pt20 f-fd-c f-jc-sb '>
        <div className='pb10'>나의 플랜</div>
        <TogglePlan myPlan={myPlan} setMyPlan={setMyPlan} />
        <div className='pb10'>카드 뉴스</div>
      </div>
      <Divider />
      <NewsCardCarousel className='mb24' />
      <div className='ph16'>
        {productCards.map((item: any, i: number) => (
          <ProductCard productCard={item} key={i} className='mb10' active />
        ))}
        <Button
          className='f-jc-c f-ai-c h76 wp100 mb40 fwb fls70 primary-border-button-hover br5'
          style={{ backgroundColor: peacockBlue7 }}
          onClick={() => history.push(screenPath4, props.location.state)}
        >
          <div className='mr4'>상품 추가하기</div>
          <PlusIcon className='ml4' />
        </Button>

        <div className='f wp100 mb50'>
          <Button
            className='mr8 br4 primary-border-button-hover h55'
            size='large'
            onClick={() => message.info('cancel button: to be implemented')}
          >
            취소
          </Button>
          <Button
            className='f1  f-jc-c f-ai-c kakao-btn br4 h55 wp100'
            type='primary'
            size='large'
            onClick={() =>
              message.info('send to kakaotalk button: to be implemented')
            }
          >
            <KakaoIcon className='mr6 ' />
            <div>카카오톡으로 보내기</div>
          </Button>
        </div>
      </div>
      <Footer />
      <Modal
        closable={false}
        title={null}
        bodyStyle={{ padding: 16, borderRadius: 4 }}
        visible={showSaveModal}
        footer={null}
        onCancel={() => setShowSaveModal(false)}
        width={296}
        centered
        destroyOnClose
      >
        <SaveModalBody setVisible={setShowSaveModal} />
      </Modal>
    </div>
  );
};
export default ConfirmPlanScreen;
