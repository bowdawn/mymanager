import React, { FC, useState } from 'react';
import Header from 'src/components/MyHeader';
import { TogglePlan, NewsCardCarousel } from './components/index';
import {
  message,
  Space,
  Row,
  Col,
  Radio,
  Card,
  Tag,
  Collapse,
  Button,
  Modal,
  Divider,
  Table,
} from 'antd';
import Icon, { CaretDownOutlined } from '@ant-design/icons';
import { ReactComponent as SaveIcon } from 'src/assets/icons/save.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/delete-icon.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus-icon.svg';
import { ReactComponent as KakaoIcon } from 'src/assets/icons/kakao.svg';
import Footer from 'src/components/MyFooter';

import { useHistory } from 'react-router-dom';

const { Panel } = Collapse;

const myPlans = [
  { label: '나의 플랜 1', value: 'a' },
  { label: '나의 플랜 2', value: 'b' },
  { label: '나의 플랜 3', value: 'c' },
];

const productCards = [
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
  {
    title: '무)간편건강보험과건강하게사는이야기(20.4)',
    tags: ['#100세만기', '#장기종합', '#암플랜(고)'],
    type: '삼성화재',
    price: 82000,
    ageGroupPlan: [
      { age: 51, price: 87000, premium: 2145000 },
      { age: 56, price: 92000, premium: 3145000 },
      { age: 61, price: 97000, premium: 4145000 },
    ],
  },
];

const PlanConfirmScreen: FC<any> = (props: any) => {
  const [collapsedKeyArray, setCollapsedKeyArray] = useState([
    ...productCards.map((item: any) => '0'),
  ]);

  const [saveModal, setSaveModal] = useState(0);

  const [myPlan, setMyPlan] = useState('');
  const [savePlan, setSavePlan] = useState('');

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
          <div className='f-fd-c' onClick={() => setSaveModal(1)}>
            <Icon className='mb6' component={() => <SaveIcon />} />
            <div className='fs12 fls60'>플랜저장</div>
          </div>
        }
        subHeader={{ name: name, age: age }}
      />

      <div className='ph16 pt20 f-fd-c f-jc-sb '>
        <div className='pb10'>나의 플랜</div>
        <TogglePlan
          myPlan={myPlan}
          setMyPlan={setMyPlan}
          myPlans={[
            { label: '나의 플랜 1', value: 'plan1' },
            { label: '나의 플랜 2', value: 'plan2' },
            { label: '나의 플랜 3', value: 'plan3' },
          ]}
        />
      </div>

      <div className='ph16 pb10'>카드 뉴스</div>
      <Divider />
      <div className='mb24'>
        <NewsCardCarousel />
      </div>
      <div className='ph16 f-fd-c f-jc-sb f-ai-c'>
        <Space direction='vertical' size={10} className='wp100'>
          {productCards.map((item: any, i: number) => (
            <Card
              className='ant-card-no-padding'
              key={`productcard-${i}`}
              hoverable
              onClick={() => history.push(screenPath5)}
            >
              <div className='p16'>
                <div className='f-jc-sb'>
                  <Space size={8}>
                    {item.tags.map((tag: any, j: number) => (
                      <div className='fls70' key={`tag${i}-${j}`}>
                        {tag}
                      </div>
                    ))}
                  </Space>

                  <Icon
                    onClick={(e) => {
                      e.stopPropagation();
                      message.info('delete card: to be implemented');
                    }}
                    component={DeleteIcon}
                  />
                </div>

                <div className='fs12 fc-gf mb10'>{item.title}</div>

                <Row justify='space-between'>
                  <Col>
                    <Tag color={darkSkyBlue} className='fc-w'>
                      {item.type}
                    </Tag>
                  </Col>
                  <Col className='fwb'>
                    {item.price.toLocaleString('ko-Kr')}원
                  </Col>
                </Row>
              </div>
              <Collapse activeKey={[collapsedKeyArray[i]]}>
                <Panel showArrow={false} header={null} key='1'>
                  <Table
                    className='clean-style-table'
                    dataSource={item.ageGroupPlan}
                    pagination={false}
                  >
                    <Table.Column
                      align='center'
                      title={<div className='fc-pc fwb fs12 fls60'>나이</div>}
                      dataIndex='age'
                      key='age'
                      render={(value) => (
                        <div className='fs14 fls70'> {value}세</div>
                      )}
                    ></Table.Column>
                    <Table.Column
                      align='center'
                      title={
                        <div className='fc-pc fwb fs12 fls60'>월보험료</div>
                      }
                      render={(value) => (
                        <div className='fs14 fwb'>
                          {value.toLocaleString('ko-Kr')}원
                        </div>
                      )}
                      dataIndex='price'
                      key='price'
                    ></Table.Column>
                    <Table.Column
                      align='center'
                      title={
                        <div className='fc-pc fwb fs10 fls102'>
                          현재 나이 대비 <br /> 더 납입할 보험료 총계원
                        </div>
                      }
                      render={(value) => (
                        <div className='fs14 fw300'>
                          (+{value.toLocaleString('ko-Kr')}원)
                        </div>
                      )}
                      dataIndex='premium'
                      key='premium'
                    ></Table.Column>
                  </Table>
                </Panel>
              </Collapse>

              <div
                className='f-jc-c f-ai-c pv8 lighten-svg-hover  lighten-svg-text-hover '
                onClick={(e) => {
                  e.stopPropagation();
                  collapsedKeyArray[i] =
                    collapsedKeyArray[i] === '1' ? '0' : '1';
                  setCollapsedKeyArray([...collapsedKeyArray]);
                }}
              >
                <div className='mr4'>연령별 설계</div>
                <CaretDownOutlined
                  className='ml4 fs7'
                  rotate={collapsedKeyArray[i] === '1' ? 360 : 0}
                />
              </div>
            </Card>
          ))}
          <Button
            className='f-jc-c f-ai-c h76 wp100 mb40 fwb fls70 primary-border-button-hover br5'
            style={{ backgroundColor: peacockBlue7 }}
            onClick={() => history.push(screenPath4)}
          >
            <div className='mr4'>상품 추가하기</div>
            <PlusIcon className='ml4' />
          </Button>
        </Space>
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
        style={{ borderRadius: 4 }}
        bodyStyle={{ padding: 16 }}
        visible={saveModal !== 0}
        footer={null}
        onCancel={() => setSaveModal(0)}
        width={296}
        centered
      >
        {(saveModal === 1
          ? [
              <div className='fs18 fwb fo9 fc-bt'>
                저장 위치를 선택해주세요.
              </div>,
              <div className='fls70 mb24'>
                * 이전 데이터가 있을 경우 사라질 수 있습니다.
              </div>,
              <Radio.Group className='wp100'>
                <Space
                  direction='vertical'
                  className='wp100 mb24'
                  align='center'
                  size={10}
                >
                  {myPlans.map((item: any, index: number) => (
                    <Radio.Button
                      value={item.value}
                      key={`save-plan-${index + 1}`}
                      onClick={() =>
                        message.info(
                          `save my plan ${index + 1} button : to be implemented`
                        )
                      }
                    >
                      {item.label}
                    </Radio.Button>
                  ))}
                </Space>
              </Radio.Group>,
              <div className='f'>
                <Button
                  className='f1 mr8 primary-border-button-hover br4'
                  onClick={() => setSaveModal(0)}
                >
                  취소
                </Button>

                <Button
                  type='primary'
                  className='f1 br4'
                  onClick={() => setSaveModal(2)}
                >
                  저장
                </Button>
              </div>,
            ]
          : saveModal === 2
          ? [
              <div className='f-jc-c mt36 mb42 '>저장이 완료 되었습니다</div>,
              <div className='f-jc-c'>
                <Button
                  className='h55 w128'
                  type='primary'
                  onClick={() => setSaveModal(0)}
                >
                  닫기
                </Button>
              </div>,
            ]
          : []
        ).map((item: any) => item)}
      </Modal>
    </div>
  );
};
export default PlanConfirmScreen;
